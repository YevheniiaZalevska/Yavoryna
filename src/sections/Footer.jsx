import { CONTACTS, BRAND_NAME, BRAND_SUBTITLE, REGION_LABEL } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footerRow">
          <div>
            <div style={{ fontWeight: 900 }}>{BRAND_NAME} • {BRAND_SUBTITLE}</div>
            <div className="small mt8">© {year} • {REGION_LABEL}</div>
          </div>

          <div className="footerLinks">
            <a className="btn btnSmall" href={CONTACTS.telegram.href} target="_blank" rel="noreferrer">Telegram</a>
            <a className="btn btnSmall" href={CONTACTS.facebook.href} target="_blank" rel="noreferrer">Facebook</a>
            <a className="btn btnSmall" href={CONTACTS.viber.href}>Viber</a>
          </div>
        </div>

        <div className="footerNote">
          Порада: не публікуй чутливу інформацію. При завантаженні фото бажано прибирати геолокацію (EXIF).
        </div>
      </div>
    </footer>
  );
}
