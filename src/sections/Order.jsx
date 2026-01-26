import { HeartHandshake, MessageCircle, Shield, Sparkles } from "lucide-react";
import Anchor from "../components/Anchor";
import ContactButtons from "../components/ContactButtons";
import SectionTitle from "../components/SectionTitle";

export default function Order() {
  return (
    <section className="section">
      <div className="container">
        <Anchor id="order" />
        <SectionTitle
          eyebrow="Контакт"
          title="Як замовити або допомогти"
          desc="Ми не ускладнюємо: просто напиши в приватні повідомлення."
        />

        <div className="grid12 mt20">
          <div className="col7 card cardPadLg">
            <div className="row">
              <div className="iconBox"><MessageCircle size={18} /></div>
              <div>
                <div className="h3">Напиши нам</div>
                <div className="small">Обери месенджер нижче</div>
              </div>
            </div>

            <ContactButtons />

            <div className="cardInner mt16">
              <div style={{ fontWeight: 900 }}>Що написати?</div>
              <p className="p mt8">Скопіюй і встав:</p>
              <div className="codeBox mt12">
{`Привіт! Хочу замовити: [сітка / кікімора / шкарпетки].
Розмір/кількість: …
Місто доставки: …
Термін (якщо важливо): …
Мій контакт: …`}
              </div>
            </div>
          </div>

          <div className="col5 card cardPadLg">
            <div className="h3">Варіанти підтримки</div>
            <div className="small mt8">Додай актуальні реквізити/потреби, коли будеш готовий</div>

            <div className="grid2 mt16">
              <div className="cardInner">
                <div className="row">
                  <HeartHandshake size={16} />
                  <div style={{ fontWeight: 800 }}>Матеріали</div>
                </div>
                <p className="p mt8">Тканина, шнур, основа, нитки, шерсть — напиши, що маєш, і ми підкажемо.</p>
              </div>

              <div className="cardInner">
                <div className="row">
                  <Sparkles size={16} />
                  <div style={{ fontWeight: 800 }}>Долучитися</div>
                </div>
                <p className="p mt8">Волонтерська допомога руками — навчимо, покажемо, дамо матеріали.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
