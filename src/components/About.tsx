'use client';

import React from 'react';

const partnerBrands = [
  {
    name: 'Trendyol',
    logo: (
      <div className="flex items-center gap-1.5 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <span className="font-sans font-black text-xl tracking-tight">trendyol</span>
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      </div>
    ),
  },
  {
    name: 'Trendyol GO',
    logo: (
      <div className="flex items-center gap-1.5 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <span className="font-sans font-black text-xl tracking-tight">trendyol</span>
        <span className="rounded px-1.5 py-0.5 text-[10px] font-black border border-current tracking-wider">GO</span>
      </div>
    ),
  },
  {
    name: 'Getir Yemek',
    logo: (
      <div className="flex items-center gap-1.5 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <span className="font-sans font-black text-xl tracking-tight">getir</span>
        <span className="rounded px-1.5 py-0.5 text-[10px] font-black border border-current tracking-wider uppercase">yemek</span>
      </div>
    ),
  },
  {
    name: 'Yemeksepeti',
    logo: (
      <div className="flex items-center gap-2 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
        </svg>
        <span className="font-sans font-extrabold text-lg tracking-tight">yemeksepeti</span>
      </div>
    ),
  },
  {
    name: 'Aras Kargo',
    logo: (
      <div className="flex items-center gap-2 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M4 18L14 6L11 18H4Z" />
          <path d="M13 18L20 6L17 18H13Z" opacity="0.75" />
        </svg>
        <div className="flex flex-col leading-none text-left">
          <span className="text-[12px] font-black tracking-wider uppercase">ARAS</span>
          <span className="text-[9px] font-bold tracking-widest uppercase opacity-75">KARGO</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Yurtiçi Kargo',
    logo: (
      <div className="flex items-center gap-2 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <div className="flex h-5 w-5 items-center justify-center rounded border border-current font-black text-[10px]">
          YK
        </div>
        <div className="flex flex-col leading-none text-left">
          <span className="text-[12px] font-black tracking-tight">Yurtiçi</span>
          <span className="text-[8px] font-bold tracking-wider uppercase opacity-75">Kargo</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Hepsiburada',
    logo: (
      <div className="flex items-center gap-1 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <span className="font-sans font-black text-lg tracking-tight">hepsiburada</span>
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      </div>
    ),
  },
  {
    name: 'Migros Hemen',
    logo: (
      <div className="flex items-center gap-1.5 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <span className="font-sans font-black text-base tracking-wider uppercase">MİGROS</span>
        <span className="rounded px-1.5 py-0.5 text-[9px] font-black border border-current uppercase">hemen</span>
      </div>
    ),
  },
  {
    name: 'Paraşüt',
    logo: (
      <div className="flex items-center gap-1.5 select-none text-zinc-600 hover:text-zinc-950 transition-colors">
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.31 1.61 6.24 4.09 8.04l.91-1.58A8.005 8.005 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.45-1.11 4.65-2.86 6.13l.86 1.6A9.957 9.957 0 0022 12c0-5.52-4.48-10-10-10z" />
        </svg>
        <span className="font-sans font-bold text-base tracking-tight">paraşüt</span>
      </div>
    ),
  },
];

const stats = [
  { value: '500+', label: 'Kazanılan Saat+' },
  { value: '%80', label: 'Verimlilik Artışı' },
  { value: '5x', label: 'Daha Hızlı Yanıt' },
  { value: '%99.9', label: 'Sistem Sürekliliği' },
  { value: '40+', label: 'Özel Proje Teslimi' },
];

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#b9b9b9] via-[#dcd8cf] via-20% via-[#f0ebe0] via-45% to-[#f7f0e3] pt-10 pb-28"
    >
      {/* Warm Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ecdbbb]/20 blur-[160px] rounded-full -z-10" />

      {/* 1. Turkish Platforms Logo Marquee (Slow, Infinite Loop) */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] select-none mb-20 sm:mb-24">
        <div className="flex flex-col items-center text-center gap-1.5 mb-5 max-w-2xl mx-auto px-4">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#525252] uppercase">
            KUSURSUZ YEREL SİSTEM ENTEGRASYONU
          </span>
          <p className="text-xs sm:text-sm text-[#6c6c6c] font-medium leading-relaxed">
            Geliştirdiğimiz yazılımlar; Trendyol, Getir, Yemeksepeti, kargo ağları ve yerel muhasebe programlarınızla çift yönlü, anlık ve tam otomatik entegre çalışır.
          </p>
        </div>
        <div className="flex w-max animate-[marquee_50s_linear_infinite] items-center gap-12 sm:gap-16 py-2">
          {[...partnerBrands, ...partnerBrands, ...partnerBrands, ...partnerBrands].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center text-[#858585] hover:text-[#525252] transition-colors duration-300 cursor-pointer"
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Content Container (001 BİZ KİMİZ) */}
      <div className="max-w-7xl mx-auto px-5">
        {/* Header Tag & Manifesto */}
        <div className="flex flex-col items-center text-center gap-6 mb-6">
          <div className="inline-flex items-center gap-2.5 bg-[#ecdbbb]/45 border border-[#ecdbbb] px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md shadow-xs">
            <span className="text-[#525252] font-mono font-bold">001</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
            <span className="text-[#525252] tracking-wider uppercase text-[11px] font-bold">BİZ KİMİZ</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#525252] max-w-4xl leading-[1.18]">
            Elazığ ve çevre illerdeki işletmelere özel,{' '}
            <span className="text-[#525252] underline decoration-[#ecdbbb] decoration-4 underline-offset-8">yeni nesil yazılım çözümleri</span> sunuyoruz.
          </h2>

          <p className="text-[#6c6c6c] text-base md:text-lg max-w-3xl leading-relaxed">
            Restoran, kafe, diş kliniği, spor salonu ve büyüyen yerel işletmeler için özel web, mobil, adisyon, online randevu ve akıllı otomasyon sistemleri tasarlayıp devreye alıyoruz. İş süreçlerinizi tek merkezden yönetilebilir, otomatik ve karlı hale getiriyoruz.
          </p>

          {/* Sector & Regional Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2">
            {[
              '🍽️ Restoran & Kafe Çözümleri',
              '🦷 Diş Kliniği & Randevu',
              '🏋️ Spor Salonu & Üyelik',
              '📍 Elazığ & Çevre İller',
              '⚡ Özel Yazılım & Entegrasyon',
            ].map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-white border border-[#ecdbbb] px-3.5 py-1.5 text-xs font-semibold text-[#525252] shadow-2xs backdrop-blur-sm transition-all hover:bg-[#ecdbbb]/30 hover:border-[#525252]/30 hover:scale-105"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Continuous Statistics Marquee (Ticker in Warm Ivory Palette) */}
      <div className="mt-12 sm:mt-14 relative w-full overflow-hidden border-y border-[#ecdbbb] py-8 bg-[#f7f0e3]">
        {/* Left & Right Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f7f0e3] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f7f0e3] to-transparent z-10" />

        <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16">
          {[...stats, ...stats, ...stats].map((st, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#525252]">
                {st.value}
              </span>
              <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-[#6c6c6c] font-semibold whitespace-nowrap">
                {st.label}
              </span>
              <span className="text-[#ecdbbb] font-black text-lg ml-8">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
