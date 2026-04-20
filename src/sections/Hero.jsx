import { motion } from "framer-motion";
import { ArrowRight, Camera, HeartHandshake, Mail, MapPin, MessageCircle, Sparkles, Timer } from "lucide-react";
import { useRef } from "react";
import ContactButtons from "../components/ContactButtons";
import Stat from "../components/Stat";
import useOnScreen from "../hooks/useOnScreen";
import { REGION_LABEL } from "../data/content";
import { GALLERY } from "../data/content";
import { DONATE } from "../data/content";

export default function Hero({ onOpenOrder, onNavigate }) {
  const statsRef = useRef(null);
  const statsOn = useOnScreen(statsRef);
  const firstPhotos = GALLERY.slice(0, 6);

  return (
    <section className="section">
      <div className="container heroGrid">
        <div>
          <div className="badge">
            <MapPin size={14} /> Представництво у Дніпропетровській області ГО "Всеукраїнське Об'єднання Українок "Яворина"
          </div>

          <h1 className="h1">
            Осередок, який працює постійно протягом 12 років.
            <span>Маскування: сітки, чугайстрики та інше</span>
          </h1>

          <p className="p heroText">
            Кожен на своєму місці може зробити багато. Ми працюємо, щоб наблизити перемогу і захистити наших захисників. Якщо хочеш допомогти – напиши нам.
          </p>

          <p className="p zwit">
            Звітуємо за кожен день роботи – 
              <a
                className="heroZwit"
                href="https://www.facebook.com/share/g/1RNGE1GYj9/"
                target="_blank"
                rel="noreferrer"
              >
                Переглянути звіти 
              </a>
          </p>

          <div className="row mt16" style={{ flexWrap: "wrap" }}>
            <button className="btn btnPrimary" onClick={() => onOpenOrder?.(null)}>
              Зв’язатися <ArrowRight size={16} />
            </button>
            <button className="btn" onClick={() => onNavigate?.("gallery")}>
              Подивитися фото <Camera size={16} />
            </button>
          </div>

          <div className="stats mt16" ref={statsRef}>
            <Stat label="Фокус" value={statsOn ? "Допомога фронту" : "…"} icon={HeartHandshake} />
            <Stat label="Формат" value={statsOn ? "Ручна робота" : "…"} icon={Sparkles} />
            <Stat label="Контакт" value={statsOn ? "FB / Telegram / Instagram" : "…"} icon={MessageCircle} />
          </div>
        </div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="cardHeader">
            <div style={{ fontWeight: 900 }}>Швидкий контакт</div>
            <div className="small mt8">Обери месенджер — і напиши нам</div>
            <ContactButtons compact />
          </div>

          <div className="heroMosaic">
            {firstPhotos.map((p) => (
              <div key={p.src} className="heroMosaicItem">
                <img src={p.src} alt={p.alt} loading="lazy" />
                  <div className="heroMosaicFade" />
                  <div className="heroMosaicTag">{p.tag}</div>
              </div>
            ))}
          </div>

          <div className="cardPadLg grid2">
            <div className="cardInner">
              <div className="row">
                <HeartHandshake size={16} />
                  <div style={{ fontWeight: 800 }}>Пожертва</div>
              </div>

              <p className="p mt8">
                За пожертви ми купуємо матеріали та
                оплачуємо відправки. Кожна сума важлива.
              </p>

              <a
                className="btn btnPrimary btnSmall mt12"
                href={DONATE.href}
                target="_blank"
                rel="noreferrer"
              >
                Пожертвувати 
              </a>
           </div>

            <div className="cardInner">
              <div className="row">
                <Mail size={16} />
                <div style={{ fontWeight: 800 }}>Робочі руки</div>
              </div>
              <p className="p mt8">
                Закликаємо допомогти працею. Якщо у вас є навіть пара вільних годин, приходьте допомогти яворинкам. І ми швидше віддамо замовлення захисникам .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
