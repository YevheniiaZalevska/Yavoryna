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
''
export const BASE = import.meta.env.BASE_URL;

export const GALLERY = [
  { src: `${BASE}gallery/01.jpg`, alt: "Готова маскувальна сітка", tag: "Відправка", group: "nets" },
  { src: `${BASE}gallery/02.jpg`, alt: "Волонтери за роботою", tag: "Команда", group: "other" },
  { src: `${BASE}gallery/03.jpg`, alt: "Робоче місце / матеріали", tag: "Волонтери за роботою", group: "other" },
  { src: `${BASE}gallery/04.jpg`, alt: "Чугайстрики", tag: "Чугайстрики", group: "chugaistryky" },
  { src: `${BASE}gallery/05.jpg`, alt: "Волонтери за роботою", tag: "Команда", group: "other" },
  { src: `${BASE}gallery/06.jpg`, alt: "Волонтери за роботою", tag: "Робоче місце", group: "other" },
  { src: `${BASE}gallery/07.jpg`, alt: "Готові вироби", tag: "Посилка", group: "other" },
  { src: `${BASE}gallery/08.jpg`, alt: "Робоче місце / матеріали", tag: "Процес", group: "other" },
  { src: `${BASE}gallery/09.jpg`, alt: "Відправка", tag: "Відправка", group: "other" },
  { src: `${BASE}gallery/10.jpg`, alt: "Готові вироби", tag: "Фідбек", group: "other" },
  { src: `${BASE}gallery/11.jpg`, alt: "Плетіння сітки", tag: "Готові вироби", group: "other" },
  { src: `${BASE}gallery/12.jpg`, alt: "Плетіння сітки — процес", tag: "Процес", group: "other" },
  { src: `${BASE}gallery/13.jpg`, alt: "Шапка", tag: "Шапка", group: "warm" },
  { src: `${BASE}gallery/14.jpg`, alt: "Подушки", tag: "Подушки", group: "warm" },
  { src: `${BASE}gallery/15.jpg`, alt: "Шкарпетки", tag: "Шкарпетки", group: "warm" },
  { src: `${BASE}gallery/16.jpg`, alt: "Шапка", tag: "Шапка", group: "warm" },
  { src: `${BASE}gallery/17.jpg`, alt: "Килимки", tag: "Килимки", group: "warm" },
  { src: `${BASE}gallery/27.jpg`, alt: "Шкарпетки", tag: "Шкарпетки", group: "warm" },
  { src: `${BASE}gallery/19.jpg`, alt: "Сітки", tag: "Літня сітка", group: "nets" },
  { src: `${BASE}gallery/20.jpg`, alt: "Сітки", tag: "Сітки", group: "nets" },
  { src: `${BASE}gallery/21.jpg`, alt: "Сітки", tag: "Сітки в природі", group: "nets" },
  { src: `${BASE}gallery/22.jpg`, alt: "Сітки", tag: "Сітки", group: "nets" },
  { src: `${BASE}gallery/23.jpg`, alt: "Сітки", tag: "Зимова сітка", group: "nets" },
  { src: `${BASE}gallery/24.jpg`, alt: "Сітки", tag: "Зимова сітка", group: "nets" },
  { src: `${BASE}gallery/25.jpg`, alt: "Сітки", tag: "Готова сітка", group: "nets" },
  { src: `${BASE}gallery/26.jpg`, alt: "Сітки", tag: "Сітка в реальному житті", group: "nets" },
  { src: `${BASE}gallery/33.jpg`, alt: "Чугайстрики", tag: "Зимові чугайстрики", group: "chugaistryky" },
  { src: `${BASE}gallery/34.jpg`, alt: "Чугайстрики", tag: "Чугайстрики на природі", group: "chugaistryky" },
  { src: `${BASE}gallery/35.jpg`, alt: "Чугайстрики", tag: "Чугайстрики", group: "chugaistryky" },
  { src: `${BASE}gallery/36.jpg`, alt: "Чугайстрики", tag: "Готовий виріб", group: "chugaistryky" },
  { src: `${BASE}gallery/37.jpg`, alt: "Чугайстрики", tag: "Чугайстрики звіт", group: "chugaistryky" },
  { src: `${BASE}gallery/38.jpg`, alt: "Чугайстрики", tag: "Чугайстрики", group: "chugaistryky" },
  { src: `${BASE}gallery/43.jpg`, alt: "Чугайстрики", tag: "Готові угайстрики", group: "chugaistryky" },
  { src: `${BASE}gallery/44.jpg`, alt: "Чугайстрики", tag: "Чугайстрики", group: "chugaistryky" },
  { src: `${BASE}gallery/45.jpg`, alt: "Чугайстрики", tag: "Чугайстрики на військових", group: "chugaistryky" },
  { src: `${BASE}gallery/46.jpg`, alt: "Чугайстрики", tag: "Чугайстрики взимку", group: "chugaistryky" },
  { src: `${BASE}gallery/28.jpg`, alt: "Команда", tag: "Команда", group: "other" },
  { src: `${BASE}gallery/29.jpg`, alt: "Звіт", tag: "Звіт", group: "other" },
  { src: `${BASE}gallery/30.jpg`, alt: "Відгук", tag: "Відгук", group: "other" },
  { src: `${BASE}gallery/31.jpg`, alt: "Готовий виріб", tag: "Готовий виріб", group: "other" },
  { src: `${BASE}gallery/32.jpg`, alt: "Фідбек", tag: "Фідбек", group: "other" },
  { src: `${BASE}gallery/47.jpg`, alt: "Фідбек", tag: "Фідбек", group: "other" },
  { src: `${BASE}gallery/48.jpg`, alt: "Команда", tag: "команда", group: "other" },
  { src: `${BASE}gallery/49.jpg`, alt: "Відгук", tag: "Відгук", group: "other" },
  { src: `${BASE}gallery/50.jpg`, alt: "Військові з відгуком", tag: "Військові з відгуком", group: "other" },
  { src: `${BASE}gallery/51.jpg`, alt: "Відправка", tag: "Відправка", group: "other" },
  { src: `${BASE}gallery/52.jpg`, alt: "Фідбек", tag: "Фідбек", group: "other" },
  { src: `${BASE}gallery/53.jpg`, alt: "Звіт", tag: "Звіт", group: "other" },
  { src: `${BASE}gallery/54.jpg`, alt: "Звіт", tag: "Звіт", group: "other" },
  { src: `${BASE}gallery/55.jpg`, alt: "Фідбек", tag: "Фідбек", group: "other" },
  { src: `${BASE}gallery/56.jpg`, alt: "Готові вироби", tag: "Готові вироби", group: "other" },
  { src: `${BASE}gallery/57.jpg`, alt: "Волонтери", tag: "Волонтери", group: "other" },
  { src: `${BASE}gallery/58.jpg`, alt: "Сітка", tag: "Готова сітка", group: "other" },
  { src: `${BASE}gallery/59.jpg`, alt: "Посилка", tag: "Фідбек", group: "Посилка" },
  { src: `${BASE}gallery/60.jpg`, alt: "Відправка", tag: "Відправка", group: "other" },
  { src: `${BASE}gallery/61.jpg`, alt: "Фідбек", tag: "Фідбек", group: "other" },
  { src: `${BASE}gallery/62.jpg`, alt: "Волонтери в роботі", tag: "Волонтери в роботі", group: "other" },
  { src: `${BASE}gallery/63.jpg`, alt: "Звіт", tag: "Звіт", group: "other" },
  { src: `${BASE}gallery/64.jpg`, alt: "Відгук", tag: "Відгук", group: "other" },
];

export const DONATE = {
  label: "Донат",
  href: "https://send.monobank.ua/jar/1iuuLBi5L", 
};
