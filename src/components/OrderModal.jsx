import { Shield } from "lucide-react";
import ContactButtons from "./ContactButtons";
import Modal from "./Modal";

export default function OrderModal({ open, onClose, service }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title={service ? `Замовлення: ${service.title}` : "Зв’язатися з нами"}
    >
      <div className="grid2">
        <div className="card cardPadLg">
          <div style={{ fontWeight: 900 }}>Крок 1: обери месенджер</div>
          <div className="small mt8">(на телефоні Viber відкриється як додаток)</div>
          <ContactButtons />
        </div>

        <div className="card cardPadLg">
          <div style={{ fontWeight: 900 }}>Крок 2: що написати</div>
          <div className="codeBox mt12">
            {service
              ? `Привіт! Хочу замовити: ${service.title}.\nРозмір/кількість: …\nМісто доставки: …\nТермін (якщо важливо): …\nМій контакт: …`
              : `Привіт! Хочу зв’язатися щодо волонтерської допомоги/замовлення.\nЩо мене цікавить: …\nМісто: …\nКонтакт: …`}
          </div>

          <div className="cardInner mt12">
            <div className="row">
              <Shield size={16} />
              <div style={{ fontWeight: 800 }}>Безпека</div>
            </div>
            <div className="p mt8" style={{ marginTop: 8 }}>
              Не публікуй деталі, які можуть зашкодити. Уточнення — тільки в приват.
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
