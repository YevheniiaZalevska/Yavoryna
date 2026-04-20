import { DONATE, CURRENT_NEEDS } from "../data/content";
import { HeartHandshake, ListChecks, MessageCircle, BadgeCheck } from "lucide-react";

export default function NeedsCard({ onContact }) {
  return (
    <div className="card cardPadLg">
      <div className="row">
        <div className="iconBox"><ListChecks size={18} /></div>
        <div>
          <div className="h3">Поточні потреби</div>
        </div>
      </div>

      <div className="bullets mt12">
        {CURRENT_NEEDS.map((n, i) => (
          <div key={i} className="bulletRow">
            <BadgeCheck size={16} color="rgba(110,231,183,.95)" />
            <div className="bulletText">
              {n.title}
              {n.note ? <span className="bulletNote"> — {n.note}</span> : null}
            </div>
          </div>
        ))}
      </div>

      <div className="cardInner mt16">
        <div className="row">
          <HeartHandshake size={16} />
          <div style={{ fontWeight: 800 }}>Як допомогти</div>
        </div>
        <div className="small mt8">
          Пожертва = матеріали + відправки. Якщо маєш матеріали — напиши нам, узгодимо.
        </div>

        <div className="row mt12" style={{ gap: 10, flexWrap: "wrap" }}>
          <a className="btn btnPrimary btnSmall" href={DONATE.href} target="_blank" rel="noreferrer">
            Пожертва →
          </a>

          <button className="btn btnSmall" onClick={onContact}>
            Написати <MessageCircle size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}