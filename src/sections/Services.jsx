import Anchor from "../components/Anchor";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../data/content";

export default function Services({ onOpenOrder }) {
  return (
    <section className="section">
      <div className="container">
        <Anchor id="services" />
        <SectionTitle
          eyebrow="Що ми робимо"
          title="Послуги / напрямки"
          desc="Натисни «Замовити» — і сайт підкаже, що написати в месенджер."
        />

        <div className="grid3 mt20">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} s={s} onOrder={onOpenOrder} />
          ))}
        </div>
      </div>
    </section>
  );
}
