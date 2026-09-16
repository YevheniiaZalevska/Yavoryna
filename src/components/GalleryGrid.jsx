import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Thumb from "./Thumb";

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
            <Thumb src={it.src} alt={it.alt} width={320} />
          </div>
          <div className="galleryFade" />
          <div className="galleryMeta">
            <span className="tag" aria-hidden="true">{it.tag}</span>
            {/* <Camera size={16} /> */}
          </div>
        </motion.button>
      ))}
    </div>
  );
}
