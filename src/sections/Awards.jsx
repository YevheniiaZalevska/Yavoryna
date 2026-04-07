import { useState } from "react";
import Anchor from "../components/Anchor";
import SectionTitle from "../components/SectionTitle";
import Lightbox from "../components/Lightbox";
import Carousel3Up from "../components/Carousel3Up";
import { GALLERY } from "../data/content";

export default function Awards() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const awardsItems = GALLERY.filter((p) => p.group === "awards");

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  if (!awardsItems.length) return null; 

  return (
    <section className="section">
      <div className="container">
        <Anchor id="awards" />

        <SectionTitle
          eyebrow="Подяки"
          title="Наші нагороди та подяки"
          desc="Тут зібрані подяки та відзнаки — усе, що підтверджує нашу роботу."
        />

        <Carousel3Up items={awardsItems} onOpen={openAt} intervalMs={5500} />

        <Lightbox
          open={open}
          onClose={() => setOpen(false)}
          items={awardsItems}
          index={idx}
          setIndex={setIdx}
        />
      </div>
    </section>
  );
}