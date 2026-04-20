import { useEffect, useRef, useState } from "react";
import Anchor from "../components/Anchor";
import SectionTitle from "../components/SectionTitle";
import { STATS } from "../data/content";

function CountUp({ to, duration = 1600, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    let animationFrame;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(start + (to - start) * eased);

      setCount(value);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, to, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("uk-UA")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section">
      <div className="container">
        <Anchor id="stats" />

        <SectionTitle
          eyebrow="У цифрах"
          title="Що ми зробили від 2014 року"
          desc="Кожна сітка, кожен виріб і кожна передача — це реальна допомога фронту."
        />

        <div className="statsGrid mt20">
          {STATS.map((item) => (
            <div key={item.label} className="statsCard">
              <div className="statsValue">
                <CountUp to={item.value} suffix={item.suffix} />
              </div>
              <div className="statsLabel">{item.label}</div>
              <div className="statsNote">{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}