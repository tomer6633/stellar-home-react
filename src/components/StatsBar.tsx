import { business } from "../data/BusinessData";

export default function StatsBar() {
  return (
    <div
      className="flex flex-wrap justify-center gap-10 py-5 px-6"
      style={{ backgroundColor: business.colorPrimary }}
    >
      {business.stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="oswald text-3xl font-bold text-white">{s.value}</div>
          <div className="text-xs text-blue-100 uppercase tracking-wider mt-0.5">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
