export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="sectionTitle">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="h2">{title}</h2>
      {desc ? <p className="p">{desc}</p> : null}
    </div>
  );
}
