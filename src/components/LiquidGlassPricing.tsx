'use client';

import React, { useState } from 'react';

export type BillingCycle = 'monthly' | 'yearly';

interface PlanFeature {
  text: string;
  highlight?: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  featured?: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  monthlyNote: string;
  yearlyNote: string;
  features: PlanFeature[];
  buttonLabel: string;
  buttonVariant: 'default' | 'featured' | 'outline';
  customCta?: string;
}

const PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Dijital Vitrin',
    tagline: 'Butik işletmeler, kafeler ve yeni kurulan markalar için.',
    monthlyPrice: 5900,
    yearlyPrice: 4700,
    monthlyNote: '/ay, esnek faturalandırma',
    yearlyNote: '/ay, yıllık faturalandırılır (₺14.400 tasarruf)',
    buttonLabel: 'Projeyi Başlat',
    buttonVariant: 'default',
    features: [
      { text: '0.4s Ultra Hızlı Next.js Mimarisi' },
      { text: 'Mobil & Tablet %100 Uyumlu Responsive Tasarım' },
      { text: 'Google Haritalar & Yerel SEO Entegrasyonu' },
      { text: 'WhatsApp Hızlı İletişim & Tek Tıkla Arama' },
      { text: 'Ücretsiz SSL Sertifikası, Bulut Barındırma & CDN' },
      { text: 'Temel İletişim ve Müşteri Talep Formu' },
    ],
  },
  {
    id: 'pro',
    name: 'Operasyonel Güç',
    tagline: 'Restoran, klinik, spor salonu ve büyüyen işletmeler için.',
    badge: '★ EN ÇOK TERCİH EDİLEN',
    featured: true,
    monthlyPrice: 14500,
    yearlyPrice: 11600,
    monthlyNote: '/ay, esnek faturalandırma',
    yearlyNote: '/ay, yıllık faturalandırılır (₺34.800 tasarruf)',
    buttonLabel: 'Hemen Başlayın',
    buttonVariant: 'featured',
    features: [
      { text: 'Dijital Vitrin paketindeki her şey dahil' },
      { text: 'Sektörel Canlı Modül (QR Menü / QR Turnike / Randevu)', highlight: true },
      { text: 'Otomatik WhatsApp & SMS Randevu / Sipariş Onayları', highlight: true },
      { text: 'Adisyo POS veya Özel Randevu & Seans Entegrasyonu' },
      { text: 'İşletme Sahibine Özel Dijital Yönetim Portalı' },
      { text: 'Gelişmiş Ziyaretçi & Müşteri Analitikleri' },
      { text: '7/24 Öncelikli Teknik Destek & Bakım SLA' },
    ],
  },
  {
    id: 'enterprise',
    name: 'Kurumsal Mimari',
    tagline: 'Çok şubeli zincirler, e-ticaret markaları ve özel ERP ihtiyaçları için.',
    monthlyPrice: 32000,
    yearlyPrice: 25600,
    monthlyNote: '/ay, esnek faturalandırma',
    yearlyNote: '/ay, yıllık faturalandırılır (₺76.800 tasarruf)',
    buttonLabel: 'Özel Teklif Al',
    buttonVariant: 'outline',
    features: [
      { text: 'Operasyonel Güç paketindeki her şey dahil' },
      { text: 'Özel Next.js E-Ticaret veya B2B Bayi Portalı', highlight: true },
      { text: 'Iyzico / Stripe / PayTR Sanal POS & Kargo Entegrasyonu' },
      { text: 'Çok Şubeli Merkezi Stok, Kasa ve Personel Yönetimi' },
      { text: 'Özel API Geliştirme & Logo / Mikro / ERP Köprüsü' },
      { text: 'Kişisel Çözüm Mimarı & Kıdemli Mühendislik Desteği' },
      { text: '%99.9 Kesintisiz Uptime & Felaket Kurtarma Garantisi' },
    ],
  },
];

function formatPrice(amount: number) {
  return amount.toLocaleString('tr-TR');
}

/**
 * Animated rolling price display that rolls digits when the price changes.
 */
function RollingPrice({ value }: { value: number }) {
  const formatted = formatPrice(value);

  return (
    <span className="inline-flex items-baseline overflow-hidden font-display tracking-tight text-zinc-950 font-bold">
      {formatted.split('').map((char, index) => {
        if (char === '.' || char === ',') {
          return (
            <span key={index} className="inline-block text-zinc-400 font-sans mx-0.5">
              {char}
            </span>
          );
        }
        return (
          <span
            key={`${index}-${char}`}
            className="inline-block transition-transform duration-500 ease-out animate-rise"
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default function LiquidGlassPricing() {
  const [billing, setBilling] = useState<BillingCycle>('yearly');

  const getWhatsAppUrl = (planName: string, price: number) => {
    const cycleText = billing === 'yearly' ? 'Yıllık (%20 İndirimli)' : 'Aylık';
    const msg = `Merhaba SoftLabs ekibi, ${planName} paketi (${cycleText} - ₺${formatPrice(price)}/ay) hakkında detaylı bilgi ve işletmeme kurulum süreci için görüşmek istiyorum.`;
    return `https://wa.me/905011366815?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Background Optical Refraction Blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#ecdbbb]/25 via-[#f0e6d6]/20 to-transparent rounded-full blur-[90px] -z-10" />
      <div className="pointer-events-none absolute top-1/2 -left-32 w-[450px] h-[450px] bg-gradient-to-br from-[#ecdbbb]/20 to-transparent rounded-full blur-[100px] -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-[450px] h-[450px] bg-gradient-to-bl from-zinc-200/40 via-[#ecdbbb]/15 to-transparent rounded-full blur-[100px] -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#ecdbbb]/80 shadow-[0_2px_12px_rgba(236,219,187,0.3)] backdrop-blur-xl mb-4">
          <span className="w-2 h-2 rounded-full bg-[#c8a261] animate-pulse" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-800">
            Şeffaf & Esnek Yatırım
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-5">
          İşletmeniz İçin <br />
          <span className="bg-gradient-to-r from-zinc-950 via-zinc-800 to-[#9e7a38] bg-clip-text text-transparent">
            Liquid Glass Fiyatlandırma
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
          Gizli maliyet veya sürpriz ek ücret yok. Kod kalitesi yüksek, ultra hızlı ve operasyonunuzu büyütecek modern yazılım altyapısı.
        </p>

        {/* Liquid Glass Switcher (Framer-inspired Liquid Glass Pill) */}
        <div className="mt-8 sm:mt-10 inline-flex items-center justify-center">
          <div className="relative p-1.5 rounded-full bg-[#f4ede1]/70 border border-white/90 shadow-[inset_0_2px_6px_rgba(0,0,0,0.04),0_8px_24px_-6px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-[#ecdbbb]/40 flex items-center">
            {/* Sliding Pill Indicator */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-white shadow-[0_3px_14px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.04)] border border-white/80 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                billing === 'monthly' ? 'left-1.5' : 'left-[calc(50%+3px)]'
              }`}
            />

            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={`relative z-10 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                billing === 'monthly' ? 'text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Aylık Ödeme
            </button>

            <button
              type="button"
              onClick={() => setBilling('yearly')}
              className={`relative z-10 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                billing === 'yearly' ? 'text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <span>Yıllık Taahhüt</span>
              <span className="px-2 py-0.5 rounded-full bg-[#ecdbbb] text-zinc-950 font-extrabold text-[10px] tracking-wide border border-[#d4b37f]/40 shadow-xs">
                %20 İndirim
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid (Liquid Glass Surfaces) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 items-stretch">
        {PLANS.map((plan) => {
          const currentPrice = billing === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
          const currentNote = billing === 'monthly' ? plan.monthlyNote : plan.yearlyNote;

          return (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-[32px] p-7 sm:p-9 transition-all duration-300 group ${
                plan.featured
                  ? 'lg:-translate-y-2'
                  : 'hover:-translate-y-1'
              }`}
              style={{
                /* Physical Optical Glass Material */
                background: plan.featured
                  ? 'linear-gradient(165deg, rgba(255, 255, 255, 0.95) 0%, rgba(253, 250, 244, 0.88) 55%, rgba(246, 238, 222, 0.85) 100%)'
                  : 'linear-gradient(165deg, rgba(255, 255, 255, 0.85) 0%, rgba(252, 251, 249, 0.72) 100%)',
                backdropFilter: 'blur(32px) saturate(190%)',
                WebkitBackdropFilter: 'blur(32px) saturate(190%)',
                boxShadow: plan.featured
                  ? '0 0 72px 18px rgba(212, 179, 127, 0.24), 0 32px 64px -20px rgba(0, 0, 0, 0.12), inset 0 1.5px 1px rgba(255, 255, 255, 1), inset 0 -1.5px 1px rgba(212, 179, 127, 0.35), inset 1.5px 0 1px rgba(255, 255, 255, 0.7), inset -1.5px 0 1px rgba(255, 255, 255, 0.5), inset 0 34px 50px -34px rgba(255, 255, 255, 0.9)'
                  : '0 20px 48px -18px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.04), inset 0 1.5px 1px rgba(255, 255, 255, 0.9), inset 0 -1px 1px rgba(255, 255, 255, 0.3), inset 1.5px 0 1px rgba(255, 255, 255, 0.4), inset -1px 0 1px rgba(255, 255, 255, 0.2), inset 0 24px 38px -30px rgba(255, 255, 255, 0.6)',
                border: plan.featured
                  ? '1.5px solid rgba(212, 179, 127, 0.55)'
                  : '1px solid rgba(255, 255, 255, 0.75)',
              }}
            >
              {/* Top Specular Sheen Gradient Overlay */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[32px] overflow-hidden"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 70%)',
                }}
              />

              {/* Floating Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#1c1a16] via-[#2d2922] to-[#1c1a16] text-[#ecdbbb] border border-[#ecdbbb]/50 text-[10px] font-extrabold tracking-wider uppercase shadow-[0_4px_16px_rgba(0,0,0,0.18)] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b37f] animate-ping" />
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              {/* Card Header & Price */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-950">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed mb-6 min-h-[38px]">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="pt-2 pb-6 border-b border-zinc-200/60">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-2xl font-display font-bold text-zinc-400">
                      ₺
                    </span>
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      <RollingPrice value={currentPrice} />
                    </span>
                  </div>
                  <div className="text-xs text-zinc-500 font-medium mt-1.5">
                    {currentNote}
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3.5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-zinc-400 mb-2">
                    Paket Kapsamı & Avantajlar
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-[13px] text-zinc-700 leading-snug">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          feat.highlight || plan.featured
                            ? 'bg-[#ecdbbb] text-zinc-950 shadow-xs'
                            : 'bg-zinc-200/80 text-zinc-800'
                        }`}
                      >
                        <span className="text-[10px] font-bold">✓</span>
                      </div>
                      <span className={feat.highlight ? 'font-bold text-zinc-950' : 'font-medium'}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <a
                  href={getWhatsAppUrl(plan.name, currentPrice)}
                  target="_blank"
                  rel="noreferrer"
                  className={`relative w-full py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer select-none active:scale-[0.98] ${
                    plan.featured
                      ? 'bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-[#ecdbbb] hover:text-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] border border-[#ecdbbb]/40'
                      : 'bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 hover:border-zinc-300 shadow-xs'
                  }`}
                >
                  <span>{plan.buttonLabel}</span>
                  <span className="text-sm">→</span>
                </a>

                <div className="text-center mt-2.5 text-[10px] text-zinc-400 font-medium">
                  {plan.id === 'starter'
                    ? '10 iş gününde anahtar teslim'
                    : plan.id === 'pro'
                    ? '14 iş gününde entegre canlı kurulum'
                    : 'Özel sprint planlaması ile teslim'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Feature Comparison & Value Guarantee Strip */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-white/90 via-[#fcfaf7]/85 to-[#f6f0e4]/80 border border-[#ecdbbb]/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] backdrop-blur-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-2xl bg-[#ecdbbb]/50 border border-[#d4b37f]/40 flex items-center justify-center text-lg mx-auto md:mx-0">
              ⚡
            </div>
            <h4 className="text-base font-bold text-zinc-950 font-display">
              0.4 Saniye Açılış Hızı Garantisi
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Shopify veya WordPress hantallığı olmadan, Next.js mimarisiyle müşterilerinizin reklam dönüşüm oranını 2-3 katına çıkarıyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-2xl bg-[#ecdbbb]/50 border border-[#d4b37f]/40 flex items-center justify-center text-lg mx-auto md:mx-0">
              🔒
            </div>
            <h4 className="text-base font-bold text-zinc-950 font-display">
              Sıfır Komisyon & Bağımsızlık
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Yemeksepeti veya Getir gibi platformlara cironuzun %20-30&apos;unu kaptırmadan doğrudan kendi müşterinize kendi posunuzla satış yapın.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-10 h-10 rounded-2xl bg-[#ecdbbb]/50 border border-[#d4b37f]/40 flex items-center justify-center text-lg mx-auto md:mx-0">
              🤝
            </div>
            <h4 className="text-base font-bold text-zinc-950 font-display">
              Yerinde Eğitim & 7/24 Destek
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Sistemi kurup bırakmıyoruz; personelinizi eğitiyor, menü ve ürünlerinizi yüklüyor ve 7/24 teknik nöbet desteği sağlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
