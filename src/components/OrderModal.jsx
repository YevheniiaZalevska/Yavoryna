import Modal from "./Modal";
import ContactButtons from "./ContactButtons";
import { DONATE } from "../data/content";

export default function OrderModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Зв’язатися з нами">
      <div className="grid2">
        {/* Месенджери */}
        <div className="card cardPadLg">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Напиши нам</div>
          <div className="small mt8">
            Обери месенджер — відповімо та підкажемо, як найкраще допомогти.
          </div>
          <ContactButtons />
        </div>

        {/* Донат */}
        <div className="card cardPadLg">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Донат</div>
          <div className="small mt8">
            Пожертва — найшвидший спосіб підтримати. На ці кошти ми купуємо матеріали
            та оплачуємо відправки. Кожна сума важлива.
          </div>

          <a
            className="btn btnPrimary mt16"
            href={DONATE.href}
            target="_blank"
            rel="noreferrer"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Пожертва →
          </a>

          <div className="small mt8">
            Якщо не можеш донатити — напиши нам, підкажемо інші варіанти допомоги.
          </div>
        </div>
      </div>
    </Modal>
  );
}
