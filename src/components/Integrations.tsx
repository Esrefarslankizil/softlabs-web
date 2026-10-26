'use client';

import React from 'react';
import Image from 'next/image';

const globalTools = [
  { name: 'HubSpot', category: 'CRM & Pazarlama' },
  { name: 'Salesforce', category: 'Kurumsal CRM' },
  { name: 'Zoho', category: 'İş Yönetimi' },
  { name: 'Mailchimp', category: 'E-Posta Otomasyonu' },
  { name: 'ActiveCampaign', category: 'Müşteri Yolculuğu' },
  { name: 'Zapier', category: 'Webhook & Tetikleyici' },
  { name: 'OpenAI / Claude', category: 'Büyük Dil Modelleri' },
  { name: 'Make (Integromat)', category: 'Görsel Senaryolar' },
  { name: 'Slack / Discord', category: 'Anlık Bildirimler' },
  { name: 'Stripe / İyzico', category: 'Ödeme Altyapıları' },
];

const localTools = [
  { name: 'Logo Yazılım (Go/Tiger)', type: 'Muhasebe & ERP' },
  { name: 'Mikro Yazılım (V16/Fly)', type: 'Ticari Yazılım' },
  { name: 'Netsis Entegrasyonu', type: 'Kurumsal Kaynak' },
  { name: 'Paraşüt & KolayBi', type: 'Bulut Ön Muhasebe' },
  { name: 'WhatsApp Business API', type: 'Müşteri İletişimi' },
  { name: 'Kargo & Lojistik API', type: 'Yurtiçi, Aras, Sürat' },
];

export default function Integrations() {
  return (
    <section id="entegrasyonlar" className="relative py-28 px-5 max-w-7xl mx-auto overflow-hidden bg-[#f7f0e3]/40 border-t border-[#ecdbbb]/60">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ecdbbb]/20 blur-[170px] rounded-full -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <div className="inline-flex items-center gap-2.5 bg-[#ecdbbb]/45 border border-[#ecdbbb] px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md shadow-xs">
          <span className="text-[#525252] font-mono font-semibold">006</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
          <span className="text-[#525252] tracking-wider uppercase text-[11px] font-semibold">ENTEGRASYON EKOSİSTEMİ</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#525252] max-w-3xl leading-tight">
          Kullandığınız Araçlarla <br />
          <span className="underline decoration-[#ecdbbb] decoration-4 underline-offset-8">Kusursuz Birlikte Çalışır</span>
        </h2>

        <p className="text-[#6c6c6c] text-base md:text-lg max-w-2xl leading-relaxed">
          Mevcut sistemlerinizi çöpe atmanıza gerek yok. Kullandığınız küresel ve yerel tüm araçları tek bir merkezi akıllı yazılım omurgasında birleştiriyoruz.
        </p>
      </div>

      {/* Concentric Radar / Circular Orbital Showcase */}
      <div className="relative mx-auto max-w-4xl py-12 flex flex-col items-center justify-center">
        {/* Radar Rings (Concentric Subtle Warm Circles) */}
        <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#ecdbbb] pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] sm:w-[720px] sm:h-[720px] rounded-full border border-[#ecdbbb]/60 border-dashed pointer-events-none" />
        
        {/* Center Glowing Hub */}
        <div className="relative z-20 flex flex-col items-center justify-center p-6 rounded-full bg-white border-2 border-[#ecdbbb] shadow-[0_16px_40px_rgba(82,82,82,0.08)] mb-12">
          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#f7f0e3] border border-[#ecdbbb] backdrop-blur-md">
            <Image
              src="/logo-lockup.png"
              alt="SoftLabs Merkez"
              width={1860}
              height={387}
              className="h-6 w-auto brightness-0 opacity-80"
            />
          </div>
          <span className="mt-3 text-[11px] font-mono tracking-widest text-[#525252] uppercase font-bold">
            MERKEZİ OMURGA
          </span>
        </div>

        {/* Global Tools Cloud */}
        <div className="relative z-10 w-full max-w-4xl">
          <div className="text-center mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#525252] font-semibold bg-[#ecdbbb]/45 border border-[#ecdbbb] px-3.5 py-1 rounded-full shadow-2xs">
              KÜRESEL ENTEGRASYONLAR
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {globalTools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-2.5 rounded-full border border-[#ecdbbb] bg-white px-4 py-2 shadow-2xs transition-all duration-300 hover:border-[#525252]/40 hover:bg-[#f7f0e3] hover:scale-105 cursor-pointer"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#525252] group-hover:scale-125 transition-transform" />
                <span className="text-xs sm:text-sm font-semibold text-[#525252] tracking-tight">
                  {tool.name}
                </span>
                <span className="text-[10px] text-[#858585] font-mono hidden sm:inline font-medium">
                  • {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Local Turkish ERP & Financial Infrastructure Cloud */}
        <div className="relative z-10 w-full max-w-4xl mt-8 pt-8 border-t border-[#ecdbbb]/60">
          <div className="text-center mb-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#525252] font-semibold bg-[#ecdbbb]/45 border border-[#ecdbbb] px-3.5 py-1 rounded-full shadow-2xs">
              YEREL MUHASEBE, ERP & SİSTEMLER
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {localTools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-2.5 rounded-full border border-[#ecdbbb] bg-white px-4 py-2 shadow-2xs transition-all duration-300 hover:border-[#525252]/40 hover:bg-[#f7f0e3] hover:scale-105 cursor-pointer"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#525252]" />
                <span className="text-xs sm:text-sm font-semibold text-[#525252] tracking-tight">
                  {tool.name}
                </span>
                <span className="text-[10px] text-[#858585] font-mono font-medium">
                  ({tool.type})
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
