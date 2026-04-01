import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function Carousel3Up({
  items = [],
  onOpen,
  intervalMs = 5000, // скорость автоплея
}) {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const perPage = 3;
  const pages = Math.max(1, Math.ceil(items.length / perPage));

  const go = (p, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(pages - 1, p));
    setPage(clamped);

    const w = track.getBoundingClientRect().width || 1;
    track.scrollTo({ left: w * clamped, behavior: smooth ? "smooth" : "auto" });
  };

  const prev = () => go(page - 1);
  const next = () => go(page + 1);

  // обновляем page если пользователь скроллит руками
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = track.getBoundingClientRect().width || 1;
        const p = Math.round(track.scrollLeft / w);
        setPage(Math.max(0, Math.min(pages - 1, p)));
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    // выставим позицию 0 при старте
    go(0, false);

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages]);

  // автоплей (перелистываем страницы)
  useEffect(() => {
    if (!items.length) return;
    if (pages <= 1) return;
    if (paused) return;

    const t = setInterval(() => {
      setPage((p) => {
        const nextPage = (p + 1) % pages;
        // прокручиваем к следующей странице
        const track = trackRef.current;
        if (track) {
          const w = track.getBoundingClientRect().width || 1;
          track.scrollTo({ left: w * nextPage, behavior: "smooth" });
        }
        return nextPage;
      });
    }, intervalMs);

    return () => clearInterval(t);
  }, [items.length, pages, paused, intervalMs]);

  // пауза при взаимодействии (скролл/drag/тач)
  const pauseNow = () => setPaused(true);
  const resumeLater = () => setTimeout(() => setPaused(false), 900);

  if (!items.length) return null;

  return (
    <div
      className="c3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="c3Arrow left" onClick={() => { pauseNow(); prev(); resumeLater(); }} disabled={page <= 0}>
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
                <Camera size={16} />
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        className="c3Arrow right"
        onClick={() => { pauseNow(); next(); resumeLater(); }}
        disabled={page >= pages - 1}
      >
        <ChevronRight size={18} />
      </button>

      <div className="c3Bottom">
        <div className="small">{page + 1} / {pages}</div>

        <div className="c3Dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`c3Dot ${i === page ? "isActive" : ""}`}
              onClick={() => { pauseNow(); go(i); resumeLater(); }}
              aria-label={`page ${i + 1}`}
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