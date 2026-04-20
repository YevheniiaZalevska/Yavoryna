import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function GalleryGrid({ items, onOpen }) {
  return (
    <div className="galleryGrid">
      {items.map((it, idx) => (
        <motion.button
          key={it.src + idx}
          className="galleryItem"
          onClick={() => onOpen?.(idx)}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="galleryImgWrap">
            <img src={it.src} alt={it.alt} loading="lazy" />
          </div>
          <div className="galleryFade" />
          <div className="galleryMeta">
            <span className="tag">{it.tag}</span>
            {/* <Camera size={16} /> */}
          </div>
        </motion.button>
      ))}
    </div>
  );
}
