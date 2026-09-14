// Прев'ю у WebP лежать поруч з оригіналом:
//   /gallery/nets/26.jpg -> /gallery/nets/26-560.webp (карусель)
//                        -> /gallery/nets/26-320.webp (сітка, мозаїка)
// Оригінал лишається запасним варіантом у <img> і повнорозмірним у лайтбоксі.
export default function thumbSrc(src, width = 560) {
  return src.replace(/\.jpg$/i, `-${width}.webp`);
}
