import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { DONATE } from "../data/content";

export default function ServiceCard({ s, onOrder }) {
  const Icon = s.icon;

  return (
    <motion.div
      className="card cardPadLg serviceBg"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="serviceGlow" />
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="row">
          <div className="iconBox"><Icon size={18} /></div>
          <div>
            <div className="serviceTitle">{s.title}</div>
            {/* <div className="small">Дніпропетровська область</div> */}
          </div>
        </div>
      </div>

      <p className="p mt12">{s.desc}</p>

      <ul className="ul">
        {s.bullets.map((b) => (
          <li key={b} className="li">
            <BadgeCheck size={16} color="rgba(110,231,183,.95)" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="cardActions">
        <a className="btn btnPrimary" href={DONATE.href} target="_blank" rel="noreferrer">
          Донат →
        </a>
      </div>
    </motion.div>
  );
}
