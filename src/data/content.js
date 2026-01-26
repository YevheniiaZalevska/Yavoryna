import { HeartHandshake, MessageCircle, Shield, Sparkles } from "lucide-react";

export const BRAND_NAME = "Яворина";
export const BRAND_SUBTITLE = "Волонтерський осередок";
export const REGION_LABEL = "Дніпропетровська область";

export const CONTACTS = {
  viber: {
    label: "Viber",
    href: "https://vb.me/letsChatOnViber", // ✅ поставь номер
  },
  telegram: {
    label: "Telegram",
    href: "https://t.me/OlZalevska", // ✅ username/ссылка
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CKQxHpsat/", // ✅ messenger link
  },
};

export const NAV = [
  { id: "about", label: "Про нас" },
  { id: "services", label: "Послуги" },
  { id: "order", label: "Як замовити" },
  { id: "gallery", label: "Галерея" },
  { id: "faq", label: "FAQ" },
];

export const SERVICES = [
  {
    id: "nets",
    title: "Плетіння маскувальних сіток",
    desc: "Сітки для укриття техніки, позицій та евакуаційних маршрутів. Робимо партіями та під розмір.",
    bullets: ["Під потрібний розмір", "Можливі партії", "Фото-звіт у процесі"],
    icon: Shield,
  },
  {
    id: "kikimora",
    title: "Кікімори (маскувальні костюми)",
    desc: "Ручна робота, адаптація під сезон і місцевість. Узгоджуємо матеріали та відтінки.",
    bullets: ["Ручна робота", "Під сезон/місцевість", "Уточнюємо терміни"],
    icon: Sparkles,
  },
  {
    id: "socks",
    title: "Теплі шкарпетки",
    desc: "В’язання для фронту та госпіталів. Можливі набори й регулярні відправки.",
    bullets: ["Тепло і надійно", "Набори/партії", "Відправка Новою Поштою"],
    icon: HeartHandshake,
  },
];

export const GALLERY = [
  { src: "/gallery/01.jpg", alt: "Готова маскувальна сітка", tag: "Результат" },
  { src: "/gallery/02.jpg", alt: "Волонтери за роботою", tag: "Команда" },
  { src: "/gallery/03.jpg", alt: "Робоче місце / матеріали", tag: "Команда" },
  { src: "/gallery/04.jpg", alt: "Кікімора — деталі", tag: "Кікімори" },
  { src: "/gallery/05.jpg", alt: "Волонтери за роботою", tag: "Команда" },
  { src: "/gallery/06.jpg", alt: "Волонтери за роботою", tag: "Команда" },
  { src: "/gallery/07.jpg", alt: "Готові вироби", tag: "Посилка" },
  { src: "/gallery/08.jpg", alt: "Робоче місце / матеріали", tag: "Процес" },
  { src: "/gallery/09.jpg", alt: "Відправка", tag: "Відправка" },
  { src: "/gallery/10.jpg", alt: "Готові вироби", tag: "Фідбек" },
  { src: "/gallery/11.jpg", alt: "Плетіння сітки", tag: "Сітки" },
  { src: "/gallery/12.jpg", alt: "Плетіння сітки — процес", tag: "Процес" },
];


export const FAQS = [
  {
    q: "Скільки часу займає виготовлення?",
    a: "Залежить від обсягу та наявності матеріалів. Напиши нам, і ми скажемо реальний термін під твій запит.",
  },
  {
    q: "Чи можна забрати самовивозом?",
    a: "Можна домовитися (якщо це безпечно). Частіше робимо доставку/відправку.",
  },
  {
    q: "Чи робите фото-звіти?",
    a: "Так, зазвичай показуємо процес і готовий результат, а також підтвердження відправки.",
  },
  {
    q: "Як допомогти матеріалами?",
    a: "Напиши, що в тебе є, або запитай актуальний список — потреби можуть змінюватися.",
  },
];
