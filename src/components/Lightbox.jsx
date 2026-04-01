import { useEffect } from "react";
import Modal from "./Modal";

export default function Lightbox({ open, onClose, items, index, setIndex }) {
  const current = items[index] || items[0];

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length, setIndex]);

  return (
    <Modal open={open} onClose={onClose} title={current?.alt || "Галерея"}>
      <div className="lightboxWrap">
        <div className="lightboxFrame">
          <img
            src={current?.src}
            alt={current?.alt}
            className="lightboxImg"
          />
        </div>

        <div className="lightboxControls">
          <button
            className="btn btnSmall"
            onClick={() =>
              setIndex((i) => (i - 1 + items.length) % items.length)
            }
          >
            ← Попереднє
          </button>

          <div className="small">
            {index + 1} / {items.length}
          </div>

          <button
            className="btn btnSmall"
            onClick={() => setIndex((i) => (i + 1) % items.length)}
          >
            Наступне →
          </button>
        </div>
      </div>
    </Modal>
  );
}