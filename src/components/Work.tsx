'use client';

import React from 'react';

const caseStudies = [
  {
    tag: 'GAYRİMENKUL & EMLAK',
    title: 'Gayrimenkul Firmaları İçin AI Talep & Randevu Asistanı',
    description: 'Gelen tüm mülk taleplerini filtreleyen, alıcı sorularını saniyeler içinde yanıtlayan ve yerinde görme randevularını otomatik takvime işleyen akıllı diyalog sistemi.',
    image: 'https://framerusercontent.com/images/S8Ya3bZm5hKzKHZ1WWwtc09Gu0.png?width=762&height=720',
    metrics: [
      { val: '3x', label: 'Talep Yanıt Hızı' },
      { val: '+%40', label: 'Randevu Artışı' },
      { val: '24/7', label: 'Kesintisiz İletişim' },
    ],
  },
  {
    tag: 'KREATİF & AJANS',
    title: 'Kreatif ve Operasyonel Ekipler İçin Süreç Otomasyonu',
    description: 'Proje koordinasyonu, görev atamaları ve revizyon takiplerini hızlandırarak ekipler arasındaki manuel iş yükünü ve iletişim gecikmelerini sıfıra indiren otomasyon.',
    image: 'https://framerusercontent.com/images/E5IqsYnTd6volBburXjEsGHak4.png?width=762&height=720',
    metrics: [
      { val: '+%38', label: 'Hızlı Teslimat' },
      { val: '-%62', label: 'Manuel Yönetim' },
      { val: '4x', label: 'Ekip Verimliliği' },
    ],
  },
  {
    tag: 'FİNANS & B2B SAAS',
    title: 'Finans ve SaaS Firmaları İçin Süreç Otomasyonu',
    description: 'Fatura onayları, müşteri katılım (onboarding) süreçleri ve mutabakatları insan hatasından arındırarak dakikalar içinde sonuçlandıran kurumsal yapay zeka hattı.',
    image: 'https://framerusercontent.com/images/F1ceXDYLhKYcg9ROAsw3PtZSnQ.png?width=762&height=720',
    metrics: [
      { val: '+%40', label: 'Demo Talebi' },
      { val: '+%25', label: 'Kapanış Oranı' },
      { val: '3x', label: 'Müşteri Bağlılığı' },
    ],
  },
];

export default function Work() {
  return (
    <section id="calismalar" className="relative py-28 px-5 max-w-7xl mx-auto overflow-hidden bg-white border-t border-[#ecdbbb]/50">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/4 -left-20 w-[600px] h-[350px] bg-[#ecdbbb]/20 blur-[160px] rounded-full -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <div className="inline-flex items-center gap-2.5 bg-[#ecdbbb]/45 border border-[#ecdbbb] px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md shadow-xs">
          <span className="text-[#525252] font-mono font-semibold">005</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
          <span className="text-[#525252] tracking-wider uppercase text-[11px] font-semibold">BAŞARI HİKAYELERİ</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#525252] max-w-3xl leading-tight">
          Neler İnşa Ettik? <br />
          <span className="underline decoration-[#ecdbbb] decoration-4 underline-offset-8">Ölçülebilir Somut Başarılar</span>
        </h2>

        <p className="text-[#6c6c6c] text-base md:text-lg max-w-2xl leading-relaxed">
          Geliştirdiğimiz yapay zeka ve yazılım altyapılarının iş dünyasındaki gerçek performans çıktıları.
        </p>
      </div>

      {/* Case Studies Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caseStudies.map((study) => (
          <article
            key={study.title}
            className="group relative rounded-[32px] border border-[#ecdbbb] bg-[#f7f0e3]/45 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#525252]/40 hover:-translate-y-2 hover:bg-[#f7f0e3]/75 hover:shadow-[0_24px_50px_rgba(82,82,82,0.08)] flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Visual Preview Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#ecdbbb]/70 bg-white mb-6 shadow-xs">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

                {/* Top Sector Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#525252] font-semibold bg-white/95 border border-[#ecdbbb] px-3 py-1 rounded-full backdrop-blur-md shadow-xs">
                    {study.tag}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-[#525252] tracking-tight leading-snug group-hover:text-[#6c6c6c] transition-colors">
                {study.title}
              </h3>
              
              <p className="mt-3 text-sm text-[#6c6c6c] leading-relaxed">
                {study.description}
              </p>
            </div>

            {/* Metrics Pills Footer */}
            <div className="mt-8 pt-6 border-t border-[#ecdbbb]/60">
              <div className="grid grid-cols-3 gap-2">
                {study.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col items-center p-2.5 rounded-xl bg-white border border-[#ecdbbb] text-center shadow-2xs"
                  >
                    <span className="font-mono text-base font-bold text-[#525252]">
                      {m.val}
                    </span>
                    <span className="text-[10px] text-[#858585] mt-0.5 tracking-tight font-medium whitespace-nowrap">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div className="mt-5 flex items-center justify-between text-xs font-semibold text-[#525252] group-hover:text-[#6c6c6c] transition-colors">
                <span>Vakayı İncele</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
