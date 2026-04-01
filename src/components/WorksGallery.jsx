import { useState } from "react";
import GalleryGrid from "./GalleryGrid";
import Lightbox from "./Lightbox";

export default function WorksGallery({ items }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  if (!items || items.length === 0) {
    return <div className="small mt12">Фото для цього розділу поки не додані.</div>;
  }

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  return (
    <>
      <GalleryGrid items={items} onOpen={openAt} />
      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        items={items}
        index={idx}
        setIndex={setIdx}
      />
    </>
  );
}