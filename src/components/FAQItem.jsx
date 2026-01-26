import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <button className="faqBtn" onClick={() => setOpen((v) => !v)}>
        <div className="row" style={{ minWidth: 0 }}>
          <div className="iconBox"><HelpCircle size={18} /></div>
          <div style={{ fontWeight: 800, minWidth: 0 }}>{q}</div>
        </div>
        <div className="small">{open ? "−" : "+"}</div>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="faqA">{a}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
