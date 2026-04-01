import Anchor from "../components/Anchor";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import WorksGallery from "../components/WorksGallery";
import { SERVICES, GALLERY } from "../data/content";

export default function Services({ onOpenOrder }) {
  const nets = SERVICES.filter((s) => s.id === "nets");
  const chug = SERVICES.filter((s) => s.id === "chugaistryky");
  const other = SERVICES.filter((s) => ["underwear", "mats", "socks"].includes(s.id));

  const worksNets = GALLERY.filter((p) => p.group === "nets");
  const worksChug = GALLERY.filter((p) => p.group === "chugaistryky");
  const worksOther = GALLERY.filter((p) => p.group === "other");

  return (
    <section className="section sectionPlain">
      <div className="container">
        <Anchor id="products" />

        <SectionTitle
          eyebrow="Наші вироби"
          title="Ось наші роботи"
          desc="Під кожним напрямом — приклади робіт. Якщо хочеш допомогти — найкраще донатом або матеріалами."
        />

        {/* --- СІТКИ --- */}
        <div className="mt20">
          <Anchor id="nets" />
          <div className="h3">Маскувальні сітки</div>
          <div className="small mt8">Фото робіт і процесу</div>

          <div className="grid3 mt16">
            {nets.map((s) => (
              <ServiceCard key={s.id} s={s} onOrder={onOpenOrder} />
            ))}
          </div>

          <WorksGallery items={worksNets} />
        </div>

        {/* --- ЧУГАЙСТРИКИ --- */}
        <div className="mt20">
          <Anchor id="chugaistryky" />
          <div className="h3">Чугайстрики</div>
          <div className="small mt8">Приклади робіт</div>

          <div className="grid3 mt16">
            {chug.map((s) => (
              <ServiceCard key={s.id} s={s} onOrder={onOpenOrder} />
            ))}
          </div>

          <WorksGallery items={worksChug} />
        </div>

        {/* --- ІНШЕ --- */}
        <div className="mt20">
          <Anchor id="other" />
          <div className="h3">Інше</div>
          <div className="small mt8">Білизна, килимки, теплі речі</div>

          <div className="grid3 mt16">
            {other.map((s) => (
              <ServiceCard key={s.id} s={s} onOrder={onOpenOrder} />
            ))}
          </div>

          <WorksGallery items={worksOther} />
        </div>
      </div>
    </section>
  );
}