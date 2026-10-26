import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#ecdbbb]/60 bg-[#f7f0e3]/45 overflow-hidden">
      {/* Ambient Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#ecdbbb] to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-3">
          <Image
            src="/logo-lockup.png"
            alt="SoftLabs"
            width={1860}
            height={387}
            className="h-6 w-auto brightness-0 opacity-80"
          />
          <p className="text-xs text-[#6c6c6c] max-w-xs leading-relaxed font-medium">
            Yerel ve büyüyen işletmeler için özel web, mobil ve operasyon yazılımları.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-7 text-xs font-semibold text-[#6c6c6c]">
          <a href="#hakkimizda" className="hover:text-[#525252] transition">
            Hakkımızda
          </a>
          <a href="#neden-biz" className="hover:text-[#525252] transition">
            Neden Biz?
          </a>
          <a href="#hizmetler" className="hover:text-[#525252] transition">
            Hizmetler
          </a>
          <a href="#surec" className="hover:text-[#525252] transition">
            Süreç
          </a>
          <a href="#calismalar" className="hover:text-[#525252] transition">
            Başarılar
          </a>
          <a href="#entegrasyonlar" className="hover:text-[#525252] transition">
            Entegrasyonlar
          </a>
          <a href="#iletisim" className="hover:text-[#525252] transition">
            İletişim
          </a>
          <a href="mailto:hello@softlabs.com" className="text-[#525252] hover:text-[#6c6c6c] transition underline underline-offset-4 decoration-[#ecdbbb] decoration-2 font-bold">
            hello@softlabs.com
          </a>
        </div>
      </div>

      <div className="border-t border-[#ecdbbb]/50 bg-[#f7f0e3]/80">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4 px-5 py-6 text-xs text-[#858585] md:px-8">
          <p>© 2026 SoftLabs Yazılım Teknolojileri. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#525252]" />
            <span className="text-[11px] font-mono text-[#6c6c6c] font-medium">Sistemler Normal & Aktif</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
