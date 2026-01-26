import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { useState } from "react";
import { BRAND_NAME, BRAND_SUBTITLE, NAV, REGION_LABEL } from "../data/content";

export default function Header({ onNavigate, onOpenOrder }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    onNavigate?.(id);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="headerRow">
          <div className="brand">
            <div className="logo"><Shield size={18} /></div>
            <div className="brandText">
              <div className="brandName">{BRAND_NAME}</div>
              <div className="brandSub">{BRAND_SUBTITLE} • {REGION_LABEL}</div>
            </div>
          </div>

          <nav className="nav">
            {NAV.map((n) => (
              <button key={n.id} className="navBtn" onClick={() => go(n.id)}>
                {n.label}
              </button>
            ))}
          </nav>

          <div className="headerActions">
            <button className="btn btnPrimary btnSmall" onClick={() => onOpenOrder?.(null)}>
              Зв’язатися <ArrowRight size={16} />
            </button>

            <button className="mobileMenuBtn" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? "Закрити" : "Меню"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              className="mobileMenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mobileMenuInner">
                {NAV.map((n) => (
                  <button key={n.id} onClick={() => go(n.id)}>
                    {n.label}
                  </button>
                ))}
                <button className="btn btnPrimary btnFull" onClick={() => onOpenOrder?.(null)}>
                  Зв’язатися <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
