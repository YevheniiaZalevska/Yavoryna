import Anchor from "../components/Anchor";
import FAQItem from "../components/FAQItem";
import SectionTitle from "../components/SectionTitle";
import { FAQS } from "../data/content";

export default function FAQ() {
  return (
    <section className="section">
      <div className="container">
        <Anchor id="faq" />
        <SectionTitle
          eyebrow="Питання"
          title="FAQ"
          desc="Короткі відповіді — менше переписок, більше користі."
        />

        <div className="faqGrid">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
