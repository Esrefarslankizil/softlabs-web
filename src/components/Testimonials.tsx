const quotes = [
  {
    quote:
      "Excel ve WhatsApp grupları arasında stok kayıpları yaşıyorduk. SoftLabs tüm mağaza ve depomuzu tek bir panelde birleştirdi. Artık haftalık sayım ve kapanış 1 saate indi.",
    name: "Ayşe Kaya",
    role: "Kaya Tekstil, İşletme Sahibi",
    avatar: "AK",
  },
  {
    quote:
      "Günde onlarca randevu telefonla yönetilemez hale gelmişti. Şimdi müşteriler saniyeler içinde rezervasyon yapıyor, saha ekibinin takvimine anında işleniyor. No-show oranı bitti denecek kadar azaldı.",
    name: "Mehmet Demir",
    role: "Demir Lojistik & Hizmet, Operasyon Direktörü",
    avatar: "MD",
  },
];

export default function Testimonials() {
  return (
    <section className="relative border-y border-[#ecdbbb]/60 bg-[#f7f0e3]/45 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-72 h-72 bg-[#ecdbbb]/20 blur-[150px] rounded-full -z-10" />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-16">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#ecdbbb]/45 border border-[#ecdbbb] px-3.5 py-1 text-xs font-semibold text-[#525252] tracking-wider uppercase mb-4 shadow-xs">
            <span className="font-mono text-[#525252]">007</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
            <span>MÜŞTERİ DENEYİMLERİ</span>
          </div>
          <h2 className="font-display max-w-2xl text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#525252] leading-tight">
            Günlük işin sadeleşmesi ve <br />
            <span className="underline decoration-[#ecdbbb] decoration-4 underline-offset-8">gerçek sonuçlar.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {quotes.map((item) => (
            <blockquote
              key={item.name}
              className="relative rounded-3xl border border-[#ecdbbb] bg-white p-8 md:p-10 shadow-[0_16px_45px_rgba(82,82,82,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#525252] text-sm mb-6">
                  {"★".repeat(5)}
                </div>
                <p className="font-display text-lg sm:text-xl leading-relaxed text-[#525252]">
                  “{item.quote}”
                </p>
              </div>

              <footer className="mt-8 pt-6 border-t border-[#ecdbbb]/50 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f7f0e3] border border-[#ecdbbb] flex items-center justify-center text-[#525252] font-mono text-xs font-bold shadow-2xs">
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#525252]">{item.name}</div>
                  <div className="text-xs text-[#6c6c6c] mt-0.5 font-medium">{item.role}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
