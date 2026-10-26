import LogoMark from "./LogoMark";

export default function Intro() {
  return (
    <section id="intro" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-3.5 py-1 text-[11px] font-semibold text-zinc-300 tracking-widest uppercase mb-6">
            ÖZEL GELİŞTİRME
          </div>
          
          <h2 className="font-display max-w-xl text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]">
            Yerel firmalar için <br />
            <span className="text-gradient">net, ölçülebilir</span> ve <br />
            <span className="text-gradient">ölçeklenebilir yazılım.</span>
          </h2>
          
          <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-zinc-400">
            Web sitenizi, mobil uygulamanızı ve arka plan operasyon sisteminizi tek bir çatı altında, pürüzsüz bir süreçle kuruyoruz. Hazır paket şablonlar yerine, tamamen işinize uyum sağlayan çözümler.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow-[0_0_25px_rgba(255,255,255,0.2)] transition hover:bg-zinc-200 hover:scale-105 active:scale-95"
            >
              <span>Ücretsiz Keşif Görüşmesi</span>
              <span>→</span>
            </a>
            <a
              href="#hizmetler"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.08] hover:border-white/20 hover:text-white"
            >
              Hizmetleri İnceleyin
            </a>
          </div>
        </div>

        {/* High-Tech Glass Graphic */}
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md rounded-3xl p-8 bg-gradient-to-b from-[#181a24]/80 to-[#0e1017]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden group">
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-white/[0.05] blur-3xl rounded-full pointer-events-none" />
          <div className="absolute inset-[8%] rounded-[2rem] border border-white/10 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute right-[8%] bottom-[8%] h-[60%] w-[42%] rounded-[1.6rem] border border-white/20 bg-white/[0.04] backdrop-blur-md p-4 flex flex-col justify-between shadow-lg">
            <div className="h-1.5 w-10 rounded-full bg-white/40" />
            <div className="space-y-1.5">
              <div className="h-1 w-full rounded bg-white/15" />
              <div className="h-1 w-3/4 rounded bg-white/15" />
            </div>
          </div>
          <div className="absolute right-[16%] bottom-[20%] h-[34%] w-[24%] rounded-[1rem] border border-white/15 bg-white/[0.02] backdrop-blur-sm" />
          <div className="absolute bottom-[10%] left-[14%] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/80 animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-400">Canlı Sistem Aktif</span>
          </div>
          <LogoMark className="absolute top-[18%] left-[16%] h-14 w-14 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
        </div>
      </div>
    </section>
  );
}
