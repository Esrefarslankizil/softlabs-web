const sectors = [
  "Perakende & E-Ticaret",
  "Üretim & İmalat",
  "Sağlık & Klinik",
  "Lojistik & Depo",
  "Restoran & Kafe",
  "Saha & Dağıtım Ekipleri",
  "Kurumsal Hizmetler",
  "Eğitim & Akademi",
];

export default function Marquee() {
  const row = [...sectors, ...sectors];

  return (
    <section
      aria-label="Çalıştığımız sektörler"
      className="relative border-y border-white/[0.06] bg-[#0c0e14]/50 py-5 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
      }}
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex items-center">
            {row.map((item, i) => (
              <li
                key={`${copy}-${item}-${i}`}
                className="flex items-center px-7 text-xs tracking-[0.22em] uppercase font-mono text-slate-400 font-medium"
              >
                <span>{item}</span>
                <span className="ml-7 h-1.5 w-1.5 rounded-full bg-white/60 shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
