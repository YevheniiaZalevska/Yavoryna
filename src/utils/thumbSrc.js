// Прев'ю у WebP лежить поруч з оригіналом: /gallery/nets/26.jpg -> /gallery/nets/26-560.webp
// Оригінал залишається запасним варіантом у <img> і повнорозмірним у лайтбоксі.
export default function thumbSrc(src) {
  return src.replace(/\.jpg$/i, "-560.webp");
}
