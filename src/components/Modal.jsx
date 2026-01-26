import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

export default function Modal({ open, onClose, title, children }) {
  useLockBodyScroll(open);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="modalWrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="modalOverlay" onClick={onClose} />
          <motion.div
            className="modal"
            initial={{ y: 18, scale: 0.99, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.99, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <div className="modalHead">
              <div style={{ minWidth: 0 }}>
                <div className="modalTitle">{title}</div>
                <div className="modalHint">Esc — закрити</div>
              </div>
              <button className="btn btnSmall" onClick={onClose}>Закрити</button>
            </div>
            <div className="modalBody">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
