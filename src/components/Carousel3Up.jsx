import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getPerPage() {
  if (window.matchMedia("(max-width: 560px)").matches) return 1;
  if (window.matchMedia("(max-width: 900px)").matches) return 2;
  return 3;
}

export default function Carousel3Up({
  items = [],
  onOpen,
  intervalMs = 5000,
}) {
  const trackRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const [perPage, setPerPage] = useState(() => getPerPage());
  const [index, setIndex] = useState(0); // индекс первой видимой карточки
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, items.length - perPage);
  const positions = maxIndex + 1;

  const clampIndex = (i) => Math.max(0, Math.min(maxIndex, i));

  const getItemLeft = (itemIndex) => {
    const track = trackRef.current;
    if (!track) return 0;

    const el = track.children[itemIndex];
    return el instanceof HTMLElement ? el.offsetLeft : 0;
  };

  const scrollOnlyToIndex = (i, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = clampIndex(i);
    track.scrollTo({
      left: getItemLeft(clamped),
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const go = (i, smooth = true) => {
    const clamped = clampIndex(i);
    setIndex(clamped);
    scrollOnlyToIndex(clamped, smooth);
  };

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  const pauseNow = () => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setPaused(true);
  };

  const resumeLater = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, 900);
  };

  useEffect(() => {
    const mq560 = window.matchMedia("(max-width: 560px)");
    const mq900 = window.matchMedia("(max-width: 900px)");

    const onChange = () => setPerPage(getPerPage());

    mq560.addEventListener?.("change", onChange);
    mq900.addEventListener?.("change", onChange);
    onChange();

    return () => {
      mq560.removeEventListener?.("change", onChange);
      mq900.removeEventListener?.("change", onChange);
    };
  }, []);

  useEffect(() => {
    const clamped = Math.max(0, Math.min(items.length - perPage, index));
    setIndex(clamped);
    requestAnimationFrame(() => {
      scrollOnlyToIndex(clamped, false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const currentLeft = track.scrollLeft;

        let bestIndex = 0;
        let bestDiff = Infinity;

        for (let i = 0; i <= maxIndex; i++) {
          const diff = Math.abs(currentLeft - getItemLeft(i));
          if (diff < bestDiff) {
            bestDiff = diff;
            bestIndex = i;
          }
        }

        setIndex(bestIndex);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    scrollOnlyToIndex(index, false);

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex, perPage]);

  useEffect(() => {
    if (!items.length) return;
    if (positions <= 1) return;
    if (paused) return;

    const t = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
        requestAnimationFrame(() => {
          scrollOnlyToIndex(nextIndex, true);
        });
        return nextIndex;
      });
    }, intervalMs);

    return () => clearInterval(t);
  }, [items.length, positions, paused, intervalMs, maxIndex]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  if (!items.length) return null;

  return (
    <div
      className="c3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        className="c3Arrow left"
        onClick={() => {
          pauseNow();
          prev();
          resumeLater();
        }}
        disabled={index <= 0}
      >
        <ChevronLeft size={18} />
      </button>

      <div
        className="c3Track"
        ref={trackRef}
        onPointerDown={pauseNow}
        onPointerUp={resumeLater}
        onPointerCancel={resumeLater}
        onTouchStart={pauseNow}
        onTouchEnd={resumeLater}
      >
        {items.map((it, idx) => (
          <button
            key={it.src + idx}
            className="c3Item"
            onClick={() => onOpen?.(idx)}
            title={it.alt}
          >
            <div className="c3ImgWrap">
              <img src={it.src} alt={it.alt} loading="lazy" />
              <div className="c3Fade" />
              <div className="c3Meta">
                <span className="c3Tag">{it.tag}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        className="c3Arrow right"
        onClick={() => {
          pauseNow();
          next();
          resumeLater();
        }}
        disabled={index >= maxIndex}
      >
        <ChevronRight size={18} />
      </button>

      <div className="c3Bottom">
        <div className="small">
          {index + 1} / {positions}
        </div>

        <div className="c3Dots">
          {Array.from({ length: positions }).map((_, i) => (
            <button
              key={i}
              className={`c3Dot ${i === index ? "isActive" : ""}`}
              onClick={() => {
                pauseNow();
                go(i);
                resumeLater();
              }}
              aria-label={`position ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="small" style={{ marginTop: 6, opacity: 0.7 }}>
        {paused ? "Пауза" : "Автоплей"}
      </div>
    </div>
  );
}