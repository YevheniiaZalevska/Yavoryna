import { MessageCircle } from "lucide-react";
import { CONTACTS } from "../data/content";

export default function ContactButtons({ compact = false }) {
  return (
    <div className={compact ? "row mt12" : "row mt16"} style={{ flexWrap: "wrap" }}>
      <a className={`btn ${compact ? "btnSmall" : ""}`} href={CONTACTS.insta.href}>
        <MessageCircle size={16} /> {CONTACTS.insta.label}
      </a>
      <a className={`btn ${compact ? "btnSmall" : ""}`} href={CONTACTS.telegram.href} target="_blank" rel="noreferrer">
        <MessageCircle size={16} /> {CONTACTS.telegram.label}
      </a>
      <a className={`btn ${compact ? "btnSmall" : ""}`} href={CONTACTS.facebook.href} target="_blank" rel="noreferrer">
        <MessageCircle size={16} /> {CONTACTS.facebook.label}
      </a>
    </div>
  );
}
