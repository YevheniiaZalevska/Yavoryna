import { useState } from "react";
import thumbSrc from "../utils/thumbSrc";

// Фото для сітки, мозаїки й каруселі.
// Спершу пробуємо легке WebP-прев'ю. Якщо його немає (наприклад, фото
// щойно додали й прев'ю ще не згенерували), <picture> сам не відкотиться
// на оригінал — тому ловимо помилку й показуємо звичайний JPG.
export default function Thumb({ src, alt, width = 560 }) {
  const [thumbMissing, setThumbMissing] = useState(false);

  if (thumbMissing) {
    return <img src={src} alt={alt} loading="lazy" />;
  }

  return (
    <picture>
      <source srcSet={thumbSrc(src, width)} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setThumbMissing(true)}
      />
    </picture>
  );
}
