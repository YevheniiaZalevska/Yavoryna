import { HeartHandshake, MapPin, Shield } from "lucide-react";
import Anchor from "../components/Anchor";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <Anchor id="about" />

        <SectionTitle
          eyebrow="Хто ми"
          title="Осередок, який працює щодня"
          desc="Цей сайт — простий спосіб показати, що ми робимо, і як швидко з нами зв’язатися. Додавай реальні цифри, імена, партнерів — коли будеш готовий."
        />

        <div className="grid12 mt20">
          <div className="col7 card cardPadLg">
            <div className="row">
              <div className="iconBox"><HeartHandshake size={18} /></div>
              <div>
                <div className="h3">Наша місія</div>
                <div className="small">Підтримка через конкретну роботу</div>
              </div>
            </div>

            <p className="p mt12">
              Ми робимо речі, які рятують: маскування, тепло, стабільність.
              Працюємо прозоро: фото-звіти, підтвердження відправок, реальні запити.
            </p>

            <div className="grid3 mt16">
              <div className="cardInner">
                <div className="small">1</div>
                <div style={{ fontWeight: 900 }} className="mt8">Збір потреб</div>
                <div className="p mt8">Уточнюємо запит</div>
              </div>
              <div className="cardInner">
                <div className="small">2</div>
                <div style={{ fontWeight: 900 }} className="mt8">Виробництво</div>
                <div className="p mt8">Плетемо / в’яжемо</div>
              </div>
              <div className="cardInner">
                <div className="small">3</div>
                <div style={{ fontWeight: 900 }} className="mt8">Відправка</div>
                <div className="p mt8">Звіт і підтвердження</div>
              </div>
            </div>
          </div>

          <div className="col5 card cardPadLg">
            <div className="row">
              <div className="iconBox"><MapPin size={18} /></div>
              <div>
                <div className="h3">Локація</div>
                <div className="small">Дніпропетровська область</div>
              </div>
            </div>

            <p className="p mt12">
              Додай тут місто/район (якщо це безпечно), або залиш тільки область.
              Для безпеки можна не вказувати точну адресу.
            </p>

            <div className="cardInner mt16">
              <div className="row">
                <Shield size={16} />
                <div style={{ fontWeight: 800 }}>Безпека</div>
              </div>
              <p className="p mt8">
                Не публікуй чутливі дані. Фото — без геоміток та без деталей, які можуть нашкодити.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
