import { useState } from "react";
import Anchor from "../components/Anchor";
import GalleryGrid from "../components/GalleryGrid";
import Lightbox from "../components/Lightbox";
import SectionTitle from "../components/SectionTitle";
import { GALLERY } from "../data/content";
import { CONTACTS } from "../data/content";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  return (
    <section className="section">
      <div className="container">
        <Anchor id="gallery" />
        <SectionTitle
          eyebrow="Фото"
          title="Галерея робіт і звітів"
          desc="Тут — частина фото з процесу, готових робіт та відправок."
        />

        <GalleryGrid items={GALLERY} onOpen={openAt} />
        <Lightbox open={open} onClose={() => setOpen(false)} items={GALLERY} index={idx} setIndex={setIdx} />
        <div className="mt16" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <a
            className="btn btnPrimary"
            href={CONTACTS.facebook.href}
            target="_blank"
            rel="noreferrer"
          >
          Більше звітів і фото — дивись Facebook →
          </a>

          <div className="small">
            Якщо хочеш підтримати — донат у шапці сайту.
          </div>
       </div>
      </div>
    </section>
  );
}
