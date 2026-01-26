import { useState } from "react";
import Anchor from "../components/Anchor";
import GalleryGrid from "../components/GalleryGrid";
import Lightbox from "../components/Lightbox";
import SectionTitle from "../components/SectionTitle";
import { GALLERY } from "../data/content";

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
          title="Галерея робіт і процесу"
          desc="Заміни картинки в /public/gallery та підпиши їх — і галерея готова."
        />

        <GalleryGrid items={GALLERY} onOpen={openAt} />
        <Lightbox open={open} onClose={() => setOpen(false)} items={GALLERY} index={idx} setIndex={setIdx} />
      </div>
    </section>
  );
}
