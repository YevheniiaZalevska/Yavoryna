import {
  Shield,
  Sparkles,
  HeartHandshake,
  Shirt,
  Layers,
  Leaf
} from "lucide-react";

export const CONTACTS = {
  viber: {
    label: "Viber",
    href: "https://vb.me/letsChatOnViber", 
  },
  telegram: {
    label: "Telegram",
    href: "https://t.me/OlZalevska", 
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CKQxHpsat/", 
  },
};

export const BRAND_NAME = "Яворина";
export const BRAND_SUBTITLE = "Волонтерська ініціатива";
export const REGION_LABEL = "Дніпропетровська область";

export const NAV = [
  {
    id: "products",
    label: "Наші вироби",
    children: [
      { id: "nets", label: "Маскувальні сітки" },
      { id: "chugaistryky", label: "Чугайстрики" },
      { id: "other", label: "Інше" },
    ],
  },
  { id: "gallery", label: "Звіти" },
];

export const SERVICES = [
  {
    id: "nets",
    title: "Маскувальні сітки різних кольорів",
    desc: "Плетемо сітки під сезон та місцевість: зелений/літо, коричневий/осінь, білий/зима. Узгоджуємо розмір.",
    bullets: ["Кольори під сезон", "Розміри під запит", "Фото-звіт у процесі"],
    icon: Shield,
  },
  {
    id: "chugaistryky",
    title: "Чугайстрики (маскування/укриття)",
    desc: "Робимо маскувальні елементи та покриття під конкретні задачі.",
    bullets: ["Під задачу", "Матеріали за наявністю", "Уточнюємо терміни"],
    icon: Leaf,
  },
  {
    id: "underwear",
    title: "Білизна",
    desc: "Збираємо/передаємо білизну та базові речі за потребами.",
    bullets: ["Під актуальні потреби", "Пакування наборами", "Відправка"],
    icon: Shirt,
  },
  {
    id: "mats",
    title: "Килимки (утеплення/побут)",
    desc: "Робимо/збираємо килимки для побутових потреб.",
    bullets: ["Різні формати", "Можна партіями", "Уточнюємо наявність"],
    icon: Layers,
  },
  {
    id: "socks",
    title: "Теплі шкарпетки",
    desc: "В’язання для фронту та госпіталів.",
    bullets: ["Тепло і надійно", "Набори/партії", "Відправка"],
    icon: HeartHandshake,
  },
];

export const BASE = import.meta.env.BASE_URL;

export const GALLERY = [
  { src: `${BASE}gallery/01.jpg`, alt: "Готова маскувальна сітка", tag: "Результат", group: "nets" },
  { src: `${BASE}gallery/02.jpg`, alt: "Волонтери за роботою", tag: "Команда", group: "other" },
  { src: `${BASE}gallery/03.jpg`, alt: "Робоче місце / матеріали", tag: "Команда", group: "other" },
  { src: `${BASE}gallery/04.jpg`, alt: "Кікімора — деталі", tag: "Кікімори", group: "chugaistryky" },
  { src: `${BASE}gallery/05.jpg`, alt: "Волонтери за роботою", tag: "Команда", group: "other" },
  { src: `${BASE}gallery/06.jpg`, alt: "Волонтери за роботою", tag: "Команда", group: "other" },
  { src: `${BASE}gallery/07.jpg`, alt: "Готові вироби", tag: "Посилка", group: "other" },
  { src: `${BASE}gallery/08.jpg`, alt: "Робоче місце / матеріали", tag: "Процес", group: "other" },
  { src: `${BASE}gallery/09.jpg`, alt: "Відправка", tag: "Відправка", group: "other" },
  { src: `${BASE}gallery/10.jpg`, alt: "Готові вироби", tag: "Фідбек", group: "other" },
  { src: `${BASE}gallery/11.jpg`, alt: "Плетіння сітки", tag: "Сітки", group: "nets" },
  { src: `${BASE}gallery/12.jpg`, alt: "Плетіння сітки — процес", tag: "Процес", group: "nets" },
];

export const DONATE = {
  label: "Донат",
  href: "https://example.com", 
};
