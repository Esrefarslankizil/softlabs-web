'use client';

import React, { useState } from 'react';

type SectorKey = 'eticaret' | 'restoran';

interface FeatureItem {
  category: string;
  detail: string;
}

interface Plan {
  id: string;
  name: string;
  isPro?: boolean;
  popularBadge?: string;
  description: string;
  price: number;
  period: string;
  ctaText: string;
  features: FeatureItem[];
}

const PRICING_DATA: Record<SectorKey, { label: string; badge?: string; subtitle: string; plans: Plan[] }> = {
  eticaret: {
    label: 'E-Ticaret',
    badge: 'Odak',
    subtitle: 'Ultra hızlı mobil vitrin, sanal POS, pazaryeri ve otomatik kargo entegrasyonu.',
    plans: [
      {
        id: 'eticaret-standart',
        name: 'Standart',
        description: 'Online butikler ve markasını dijitale taşımak isteyenler için.',
        price: 10000,
        period: 'anahtar teslim',
        ctaText: 'Standart Paketi Seç',
        features: [
          { category: 'Mağaza & Sipariş', detail: 'Ultra Hızlı Mobil Mağaza, Üyeliksiz Sipariş' },
          { category: 'Kasa & POS', detail: 'İyzico / PayTR Sanal POS, Havale & Kapıda Ödeme' },
          { category: 'Kargo & Takip', detail: 'Kargo Takip Kodu & Desi / Koli Yönetimi' },
          { category: 'Sipariş İletişimi', detail: 'Sipariş Fişi Termal Çıktısı & WhatsApp Bildirimi' },
          { category: 'Stok & Varyant', detail: 'Temel Düzey Ürün, Varyant & Kategori Yönetimi' },
          { category: 'CRM & Sadakat', detail: 'Temel Müşteri Kaydı & İndirim Kuponu' },
          { category: 'Raporlama', detail: 'Gün Sonu Sipariş ve Ciro Dönüşüm Özeti' },
        ],
      },
      {
        id: 'eticaret-plus',
        name: 'Plus',
        isPro: true,
        popularBadge: 'En Popüler',
        description: 'Pazaryeri ve otomatik kargoyla büyüyen markalar için.',
        price: 15000,
        period: 'anahtar teslim',
        ctaText: 'Plus Paketi Başlat',
        features: [
          { category: 'Mağaza & Sipariş', detail: 'Tümüne Ek + Beden Seçimi & Akıllı Sepet Kurgusu' },
          { category: 'Kasa & POS', detail: 'Taksit Matrisi, Tek Tıkla Kart Saklama & Cüzdan' },
          { category: 'Kargo & Takip', detail: 'Trendyol, Hepsiburada Çift Yönlü Entegrasyon' },
          { category: 'Sipariş İletişimi', detail: 'Otomatik Kargo Barkodu (Yurtiçi, Aras, MNG)' },
          { category: 'Stok & Varyant', detail: 'Pazaryerlerinde Otomatik Stok & Fiyat Eşitleme' },
          { category: 'CRM & Sadakat', detail: 'Müşteri Sadakat (Puan/Cüzdan) ve Terk Sepet' },
          { category: 'Raporlama', detail: 'Kategori ve Ürün Bazlı Net Kâr Analizi' },
        ],
      },
      {
        id: 'eticaret-premium',
        name: 'Premium',
        description: 'Çok kanallı satış, e-ihracat ve kurumsal ERP için.',
        price: 20000,
        period: 'anahtar teslim',
        ctaText: 'Premium Teklif Al',
        features: [
          { category: 'Mağaza & Sipariş', detail: 'Tümüne Ek + Çoklu Şube & B2B Bayi Portalı' },
          { category: 'Kasa & POS', detail: 'Tümüne Ek + Kapsamlı Muhasebe / ERP Entegrasyonu' },
          { category: 'Kargo & Takip', detail: 'Tümüne Ek + Depo & Kendi Kurye/Teslimat Otomasyonu' },
          { category: 'Sipariş İletişimi', detail: 'Tümüne Ek + Hazırlık & Personel Performans Takibi' },
          { category: 'Stok & Varyant', detail: 'Tümüne Ek + Fire Yönetimi, Sayım & Tedarikçi Modülü' },
          { category: 'CRM & Sadakat', detail: 'Gelişmiş CRM, SMS/WhatsApp Kampanya Motoru' },
          { category: 'Raporlama', detail: 'Yapay Zeka Destekli Gelecek Satış Tahmini' },
        ],
      },
    ],
  },
  restoran: {
    label: 'Restoran & Kafe',
    subtitle: 'QR menüden mutfak ekranına, adisyondan kurye takibine eksiksiz restoran sistemi.',
    plans: [
      {
        id: 'restoran-standart',
        name: 'Standart',
        description: 'QR Menü, masadan sipariş ve temel kasa düzeni için.',
        price: 10000,
        period: 'anahtar teslim',
        ctaText: 'Standart Paketi Seç',
        features: [
          { category: 'Menü & Sipariş', detail: 'QR Menü (Dijital Görüntüleme), Masadan Sipariş' },
          { category: 'Kasa & POS', detail: 'Temel Kasa Yönetimi, Online Ödeme' },
          { category: 'Paket Servis', detail: 'Sadece Gel-Al (Manuel)' },
          { category: 'Mutfak İletişimi', detail: 'Mutfak Yazıcısı (Adisyon) Çıktısı' },
          { category: 'Stok & Maliyet', detail: 'Temel Düzey Ürün ve Kategori Yönetimi' },
          { category: 'CRM & Pazarlama', detail: 'Temel Müşteri Kaydı' },
          { category: 'Raporlama', detail: 'Gün Sonu Satış Özeti' },
        ],
      },
      {
        id: 'restoran-plus',
        name: 'Plus',
        isPro: true,
        popularBadge: 'En Popüler',
        description: 'Garson terminali ve mutfak ekranıyla tam operasyon.',
        price: 15000,
        period: 'anahtar teslim',
        ctaText: 'Plus Paketi Başlat',
        features: [
          { category: 'Menü & Sipariş', detail: 'Tümüne Ek + Garson El Terminali / Tablet Desteği' },
          { category: 'Kasa & POS', detail: 'Gelişmiş POS Sistemi, Parçalı ve Çoklu Ödeme' },
          { category: 'Paket Servis', detail: 'Yemeksepeti, Getir, Trendyol Yemek Entegrasyonu' },
          { category: 'Mutfak İletişimi', detail: 'Dijital Mutfak Ekranı (KDS) Entegrasyonu' },
          { category: 'Stok & Maliyet', detail: 'Reçete Bazlı Otomatik Stok Düşümü' },
          { category: 'CRM & Pazarlama', detail: 'Müşteri Sadakat (Puan/Cüzdan) Sistemi' },
          { category: 'Raporlama', detail: 'Kategori ve Ürün Bazlı Kâr Analizi' },
        ],
      },
      {
        id: 'restoran-premium',
        name: 'Premium',
        description: 'Franchise zincirleri ve yapay zeka destekli yönetim.',
        price: 20000,
        period: 'anahtar teslim',
        ctaText: 'Premium Teklif Al',
        features: [
          { category: 'Menü & Sipariş', detail: 'Tümüne Ek + Çoklu Şube (Franchise) Yönetimi' },
          { category: 'Kasa & POS', detail: 'Tümüne Ek + Kapsamlı Muhasebe / ERP Entegrasyonu' },
          { category: 'Paket Servis', detail: 'Tümüne Ek + Kendi Kurye / Teslimat Takip Otomasyonu' },
          { category: 'Mutfak İletişimi', detail: 'Tümüne Ek + Hazırlık Süresi ve Personel Analizi' },
          { category: 'Stok & Maliyet', detail: 'Tümüne Ek + Fire Yönetimi, Sayım ve Tedarikçi Modülü' },
          { category: 'CRM & Pazarlama', detail: 'Gelişmiş CRM, SMS/WhatsApp Kampanya Optimizasyonu' },
          { category: 'Raporlama', detail: 'Yapay Zeka Destekli Gelecek Satış Tahmini' },
        ],
      },
    ],
  },
};

export default function LiquidGlassPricing() {
  const [sector, setSector] = useState<SectorKey>('eticaret');
  const current = PRICING_DATA[sector];

  const getWhatsAppUrl = (plan: Plan) => {
    const msg = `Merhaba SoftLabs, ${current.label} sektörü için "${plan.name}" (${plan.price.toLocaleString('tr-TR')} TL) paketi hakkında detaylı bilgi almak ve projeyi başlatmak istiyorum.`;
    return `https://wa.me/905011366815?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="pricing" aria-label="Fiyatlandırma Paketleri">
      {/* Sector Switcher (Exact Framer .billing Structure) */}
      <div className="billing-wrap">
        <div className="billing" role="radiogroup" aria-label="Sektör Seçimi">
          {(Object.keys(PRICING_DATA) as SectorKey[]).map((key) => {
            const item = PRICING_DATA[key];
            const isChecked = sector === key;
            return (
              <button
                key={key}
                className="billing-option"
                type="button"
                role="radio"
                aria-checked={isChecked}
                onClick={() => setSector(key)}
              >
                <span>{item.label}</span>
                {item.badge && <span className="save">{item.badge}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subtitle / Context */}
      <div className="text-center mb-8">
        <p className="text-sm text-[#15171c]/70 font-medium">
          {current.subtitle}
        </p>
      </div>

      {/* 3 Liquid Glass Cards (Exact Framer .cards & .card Structure) */}
      <div className="cards">
        {current.plans.map((plan) => (
          <article key={plan.id} className={`card ${plan.isPro ? 'pro' : ''}`}>
            <div className="card-head">
              <h2>{plan.name}</h2>
              {plan.popularBadge && <span className="popular">{plan.popularBadge}</span>}
            </div>

            <p className="description">{plan.description}</p>

            <div className="price" aria-label={`₺${plan.price.toLocaleString('tr-TR')} ${plan.period}`}>
              <span className="amount">
                <span className="currency">₺</span>
                <span>{plan.price.toLocaleString('tr-TR')}</span>
              </span>
              <span className="period">/{plan.period}</span>
            </div>

            <a
              className="cta"
              href={getWhatsAppUrl(plan)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {plan.ctaText}
            </a>

            <div className="rule" />

            <ul className="features">
              {plan.features.map((feat, idx) => (
                <li key={idx}>
                  <span className="check">✓</span>
                  <span>
                    <strong className="font-semibold opacity-90">{feat.category}:</strong> {feat.detail}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
