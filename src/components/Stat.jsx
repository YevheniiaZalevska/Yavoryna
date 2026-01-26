export default function Stat({ label, value, icon: Icon }) {
  return (
    <div className="card cardPad">
      <div className="statLabel">
        <Icon size={16} />
        <span>{label}</span>
      </div>
      <div className="statValue">{value}</div>
    </div>
  );
}
