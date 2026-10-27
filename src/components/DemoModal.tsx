'use client';

import React, { useState, useEffect } from 'react';

export type SectorType = 'cafe' | 'clinic' | 'beauty' | 'gym' | 'ecommerce' | 'hotel' | 'auto';

interface SectorInfo {
  id: SectorType;
  title: string;
  tagline: string;
  badge: string;
  image: string;
  tags: string[];
  description: string;
}

const SECTORS: SectorInfo[] = [
  {
    id: 'cafe',
    title: 'Restoran & Cafe',
    tagline: 'Lüks QR Menü, Adisyon & Masa Servis Sistemi',
    badge: 'Canlı Çalışan Demo',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    tags: ['Adisyo POS Uyumlu', 'Garson Çağır', 'Masa QR', 'Sepet & Sipariş'],
    description: 'Müşterilerinizin telefonlarından temassızca menüyü inceleyebileceği, garson çağırabileceği ve masaya özel sipariş verebileceği premium dijital menü deneyimi.',
  },
  {
    id: 'clinic',
    title: 'Özel Klinik & Diş Hekimi',
    tagline: 'Hasta Takip, Randevu & Dijital Tedavi Planı',
    badge: 'İnteraktif Sistem',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tags: ['Online Randevu', 'SMS & WhatsApp Hatırlatıcı', 'Hasta Dosyası', 'Tedavi Geçmişi'],
    description: 'Randevu kaçırmalarını sıfıra indiren otomatik WhatsApp hatırlatıcıları, online hasta kabul takvimi ve hekime özel pratik hasta takip arayüzü.',
  },
  {
    id: 'beauty',
    title: 'Güzellik Merkezi & Estetik',
    tagline: 'Paket & Seans Takibi, Danışan Yönetimi',
    badge: 'İnteraktif Sistem',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Kalan Seans Sayacı', 'Uzman Takvimi', 'Kabin Doluluğu', 'Otomatik SMS'],
    description: 'Lazer epilasyon, bölgesel incelme ve cilt bakımı gibi çoklu seans paketlerini danışan bazında eksiksiz takip edin; tek tıkla seans düşün.',
  },
  {
    id: 'gym',
    title: 'Spor Salonu & Pilates',
    tagline: 'QR Turnike Giriş, Üyelik & PT Rezervasyon',
    badge: 'Canlı Çalışan Demo',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    tags: ['Turnike QR Kod', 'Reformer PT Seansı', 'Üyelik Süre Takibi', 'Grup Dersi Rezervasyon'],
    description: 'Üyelerinize telefonlarından dinamik QR ile turnikeden geçme imkanı sunun; PT ve grup reformer ders rezervasyonlarını otomatikleştirelim.',
  },
  {
    id: 'ecommerce',
    title: 'E-Ticaret & Butik Mağaza',
    tagline: 'Hızlı Satış, Sanal POS & Akıllı Sepet',
    badge: 'İnteraktif Sistem',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Iyzico / Stripe POS', 'WhatsApp Sipariş', 'Canlı Stok', 'Kargo Entegrasyonu'],
    description: 'Milisaniyeler içinde yüklenen ultra hızlı butik e-ticaret altyapısı; tek dokunuşla sepet ve doğrudan WhatsApp hızlı sipariş kanalı.',
  },
  {
    id: 'hotel',
    title: 'Otel & Butik Konaklama',
    tagline: 'Dijital Oda Servisi & Resepsiyon Asistanı',
    badge: 'Önerilen Sektör',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tags: ['Oda QR Servis', 'Temassız Resepsiyon', 'Spa Rezervasyonu', 'Ekstra İstek Talebi'],
    description: 'Odalara yerleştirilen QR ile misafirlerin telefonlarından doğrudan gurme kahvaltı, ekstra yastık/havlu sipariş etmesini ve resepsiyona anlık ulaşmasını sağlayın.',
  },
  {
    id: 'auto',
    title: 'Oto Servis & Detailing',
    tagline: 'Plaka Bazlı İş Emri & Canlı Bakım Takibi',
    badge: 'Önerilen Sektör',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    tags: ['Plaka Sorgulama', 'Aşama SMS Bildirimi', 'Dijital Ekspertiz', 'Parça Maliyet Dökümü'],
    description: 'Müşterilerinizin araçlarının bakım/detailing aşamalarını (Araç Kabul, Bakım, Seramik Kaplama, Teslim) canlı takip edebildiği modern servis portalı.',
  },
];

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<SectorType | null>(null);

  // Clinic Interactive State
  const [clinicDoctor, setClinicDoctor] = useState('Dr. Selin Yılmaz (Estetik Diş)');
  const [clinicTime, setClinicTime] = useState('14:30');
  const [clinicBooked, setClinicBooked] = useState(false);

  // Beauty Center Interactive State
  const [beautyRemaining, setBeautyRemaining] = useState(3);
  const [beautyToast, setBeautyToast] = useState('');

  // Gym Interactive State
  const [gymBooked, setGymBooked] = useState(false);
  const [qrSeconds, setQrSeconds] = useState(14);
  const [gymMemberName, setGymMemberName] = useState('Eşref Fırat');

  // E-Commerce Interactive State
  const [cartCount, setCartCount] = useState(1);
  const [orderToast, setOrderToast] = useState(false);

  // Dynamic origin for mobile QR code test (uses public Vercel URL even if viewed on localhost so phone camera QR always works)
  const [originUrl, setOriginUrl] = useState('https://softlabs-web.vercel.app');

  // Listen to open-demo-modal events
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.location.origin &&
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== '127.0.0.1'
    ) {
      setOriginUrl(window.location.origin);
    }

    // Check URL query param or hash on mount & hashchange
    const checkUrl = () => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const demoParam = urlParams.get('demo');
        if (demoParam && SECTORS.some((s) => s.id === demoParam)) {
          setSelectedSector(demoParam as SectorType);
          setIsOpen(true);
          document.body.style.overflow = 'hidden';
        } else if (demoParam === 'all' || window.location.hash === '#demo') {
          setSelectedSector(null);
          setIsOpen(true);
          document.body.style.overflow = 'hidden';
        }
      }
    };

    checkUrl();
    window.addEventListener('hashchange', checkUrl);

    const handleOpen = (e: any) => {
      if (e?.detail?.sector) {
        setSelectedSector(e.detail.sector);
      } else {
        setSelectedSector(null);
      }
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('open-demo-modal', handleOpen);
    return () => {
      window.removeEventListener('hashchange', checkUrl);
      window.removeEventListener('open-demo-modal', handleOpen);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Timer for Gym Dynamic QR
  useEffect(() => {
    if (selectedSector === 'gym') {
      const interval = setInterval(() => {
        setQrSeconds((prev) => (prev <= 1 ? 15 : prev - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedSector]);

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSector(null);
    document.body.style.overflow = 'auto';
  };

  if (!isOpen) return null;

  const currentSectorInfo = SECTORS.find((s) => s.id === selectedSector);

  const getWhatsAppMessage = (sectorName: string) => {
    return encodeURIComponent(
      'Merhaba SoftLabs! 👋\n\n' + sectorName + ' sektörüne özel dijital çözüm ve yazılım demolarınızı inceledim. 🚀\n\nİşletmemize bu sistemi kurmak ve detaylı teklif almak istiyoruz. Bilgi alabilir miyim? ✨'
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden bg-black/80 backdrop-blur-xl animate-fadeIn">
      {/* Modal Card Shell */}
      <div className="relative flex flex-col w-full h-full sm:h-[92vh] sm:max-w-6xl rounded-none sm:rounded-3xl border border-[#ecdbbb]/35 bg-[#141414] text-white shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#ecdbbb]/20 bg-[#1a1a1a]/95 backdrop-blur-md z-30 shrink-0">
          <div className="flex items-center gap-3">
            {selectedSector ? (
              <button
                type="button"
                onClick={() => setSelectedSector(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#ecdbbb] hover:text-white text-xs sm:text-sm font-medium transition-all cursor-pointer"
              >
                <span>←</span>
                <span>Tüm Sektörlere Dön</span>
              </button>
            ) : (
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#ecdbbb] shadow-[0_0_8px_#ecdbbb] animate-pulse" />
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#ecdbbb] font-semibold font-mono">
                  SoftLabs Canlı Demo Merkezi
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {selectedSector && (
              <a
                href={'https://wa.me/905011366815?text=' + getWhatsAppMessage(currentSectorInfo?.title || 'Özel')}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
              >
                <span>💬</span>
                <span>Bu Sistemi İşletmeme Kur</span>
              </a>
            )}

            <button
              type="button"
              onClick={closeModal}
              aria-label="Kapat"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain bg-gradient-to-b from-[#141414] via-[#111111] to-[#0a0a0a]">
          
          {/* ========================================================= */}
          {/* VIEW 1: SECTOR SELECTION CATALOG                          */}
          {/* ========================================================= */}
          {!selectedSector && (
            <div className="px-5 sm:px-8 py-8 sm:py-10 max-w-6xl mx-auto">
              {/* Introduction Header */}
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#ecdbbb]/15 border border-[#ecdbbb]/30 text-[#ecdbbb] text-xs font-semibold tracking-wider uppercase mb-3">
                  Sektörel Yazılım Çözümleri
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-semibold tracking-tight text-white mb-3">
                  Hangi Sektör İçin Demo İncelemek İstersiniz?
                </h2>
                <p className="text-sm sm:text-base text-zinc-400">
                  İşletmenizin operasyonlarını hızlandıran, müşteri deneyimini katlayan interaktif demoyu seçin ve hemen canlı test edin.
                </p>
              </div>

              {/* Sector Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {SECTORS.map((sector) => (
                  <div
                    key={sector.id}
                    onClick={() => setSelectedSector(sector.id)}
                    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 hover:border-[#ecdbbb]/60 bg-[#1c1c1c]/80 hover:bg-[#222222] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_35px_rgba(236,219,187,0.15)] hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Sector Card Image Banner */}
                    <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-black/40 to-transparent" />
                      
                      {/* Badge Top Left */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-[#ecdbbb]">
                        {sector.badge}
                      </span>
                    </div>

                    {/* Sector Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-[#ecdbbb] transition-colors mb-1.5 flex items-center justify-between">
                          <span>{sector.title}</span>
                          <span className="text-xs text-zinc-400 group-hover:translate-x-1 transition-transform">→</span>
                        </h3>
                        <p className="text-xs text-zinc-300 font-medium mb-3 line-clamp-1">
                          {sector.tagline}
                        </p>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                          {sector.description}
                        </p>
                      </div>

                      {/* Capabilities Tag Pills */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {sector.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-zinc-300 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action CTA */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-[#ecdbbb] group-hover:text-white transition-colors">
                          <span>Demoyu İncele</span>
                          <span>Başlat ⚡</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Custom Sector Notice */}
              <div className="mt-12 p-6 rounded-2xl border border-[#ecdbbb]/25 bg-gradient-to-r from-[#201d18] via-[#1c1a16] to-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Farklı bir sektör veya özel bir iş akışınız mı var?
                  </h4>
                  <p className="text-xs text-zinc-400">
                    ERP, fabrika üretim takibi, depo barkodlama veya özel B2B platformları için mimariyi işletmenize göre sıfırdan kuruyoruz.
                  </p>
                </div>
                <a
                  href={'https://wa.me/905011366815?text=' + getWhatsAppMessage('Özel Proje & Farklı Sektör')}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs whitespace-nowrap hover:bg-[#ecdbbb] transition-colors shadow-sm"
                >
                  Özel İhtiyacınızı Konuşalım 💬
                </a>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* VIEW 2: DEDICATED SECTOR LIVE DEMO                        */}
          {/* ========================================================= */}
          {selectedSector && currentSectorInfo && (
            <div className="px-4 sm:px-8 py-6 sm:py-8 max-w-6xl mx-auto">
              
              {/* Sector Header Information */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ecdbbb]/20 border border-[#ecdbbb]/40 text-[#ecdbbb] text-xs font-semibold">
                      {currentSectorInfo.badge}
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Sistem Aktif & Hazır
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {currentSectorInfo.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {currentSectorInfo.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={'https://wa.me/905011366815?text=' + getWhatsAppMessage(currentSectorInfo.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>💬</span>
                    <span>İşletmenize Fiyat & Kurulum Alın</span>
                  </a>
                </div>
              </div>

              {/* ----------------------------------------------------------- */}
              {/* DEMO 1: RESTORAN & CAFE (AURA QR MENU EMBED)                */}
              {/* ----------------------------------------------------------- */}
              {selectedSector === 'cafe' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Smartphone Device Preview Frame (iPhone 18 Pro Max) */}
                  <div className="lg:col-span-7 flex flex-col items-center">
                    {/* Device Header Badge */}
                    <div className="mb-3 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400">
                      <svg className="w-3.5 h-3.5 text-[#ecdbbb] fill-current" viewBox="0 0 170 170">
                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.63-13.98-5.3-8.2-9.43-17.72-12.39-28.55-2.96-10.83-4.44-21.25-4.44-31.27 0-15.76 4.14-28.89 12.43-39.4 8.28-10.51 18.73-15.89 31.33-16.14 4.89 0 10.22 1.34 16 4.01 5.79 2.67 9.55 4.06 11.3 4.16 1.41-.1 5.34-1.55 11.8-4.35 6.46-2.81 12.03-4.1 16.71-3.89 12.73.65 22.84 5.37 30.34 14.16-11.08 6.74-16.51 16.03-16.3 27.87.21 9.35 3.84 17.15 10.89 23.4 7.05 6.25 15.42 9.8 25.11 10.66-2.28 6.85-4.99 13.78-8.13 20.79zM119.22 31.84c0-7.28 2.66-14.18 7.99-20.7 5.33-6.52 11.95-10.49 19.86-11.91.22 1.09.33 2.17.33 3.26 0 7.28-2.77 14.24-8.31 20.89-5.54 6.64-12.23 10.49-20.08 11.53-.21-1.09-.32-2.18-.32-3.27z" />
                      </svg>
                      <span className="font-medium text-zinc-200">iPhone 18 Pro Max</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-emerald-400 font-medium">Canlı İnteraktif Simülatör</span>
                    </div>

                    {/* iPhone 18 Pro Max Outer Shell */}
                    <div className="relative w-full max-w-[375px] h-[740px] rounded-[54px] p-[3.5px] bg-gradient-to-b from-[#44423e] via-[#242321] to-[#363431] shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(236,219,187,0.12)] ring-1 ring-white/25 select-none transition-all">
                      
                      {/* --- PHYSICAL HARDWARE BUTTONS --- */}
                      {/* Left: Action Button (Eylem Tuşu) */}
                      <div className="absolute -left-[5.5px] top-[105px] w-[5.5px] h-7 bg-gradient-to-r from-[#2c2b29] to-[#4a4844] rounded-l-md border-y border-l border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Left: Volume Up */}
                      <div className="absolute -left-[5.5px] top-[148px] w-[5.5px] h-12 bg-gradient-to-r from-[#2c2b29] to-[#4a4844] rounded-l-md border-y border-l border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Left: Volume Down */}
                      <div className="absolute -left-[5.5px] top-[210px] w-[5.5px] h-12 bg-gradient-to-r from-[#2c2b29] to-[#4a4844] rounded-l-md border-y border-l border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Left Antenna Bands */}
                      <div className="absolute -left-[4px] top-16 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />
                      <div className="absolute -left-[4px] bottom-24 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />

                      {/* Right: Power / Siri Button */}
                      <div className="absolute -right-[5.5px] top-[160px] w-[5.5px] h-16 bg-gradient-to-l from-[#2c2b29] to-[#4a4844] rounded-r-md border-y border-r border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Right: Camera Control (iPhone 16/17/18 Pro Sapphire Capacitive Sensor) */}
                      <div className="absolute -right-[4.5px] top-[465px] w-[4.5px] h-14 bg-gradient-to-l from-[#1e1d1c] to-[#343330] rounded-r-sm border-y border-r border-[#4e4c47] shadow-inner pointer-events-none" />
                      
                      {/* Right Antenna Bands */}
                      <div className="absolute -right-[4px] top-16 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />
                      <div className="absolute -right-[4px] bottom-24 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />

                      {/* Top Micro Speaker Earpiece Slit */}
                      <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-14 h-[2px] bg-[#181716] rounded-full z-30 pointer-events-none" />

                      {/* --- SCREEN CONTAINER (Ultra-slim 3.5px Bezel & Concentric 50px Radius) --- */}
                      <div 
                        className="relative w-full h-full rounded-[50px] overflow-hidden bg-[#f8f6f0] flex flex-col ring-1 ring-black/80"
                        style={{
                          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                          isolation: 'isolate',
                        }}
                      >
                        {/* iOS Status Bar (Native Pro Max Header) */}
                        <div className="h-[42px] shrink-0 bg-[#f8f6f0] px-6 flex items-center justify-between z-30 select-none border-b border-[#a87e24]/10">
                          {/* Time */}
                          <div className="w-16 flex items-center">
                            <span className="text-[13px] font-semibold tracking-tight text-neutral-900 font-sans">
                              09:41
                            </span>
                          </div>

                          {/* iPhone 18 Pro Max Dynamic Island */}
                          <div className="relative w-[112px] h-[27px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.6)] ring-1 ring-white/10 group cursor-default">
                            {/* Privacy / Sensor indicator */}
                            <div className="w-2 h-2 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                            
                            {/* TrueDepth Camera Optics with Blue Coated Reflection */}
                            <div className="w-3.5 h-3.5 rounded-full bg-[#060b14] border border-[#162035] flex items-center justify-center relative shadow-inner">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#1e2a4a]/90 shadow-[0_0_2px_#3b82f6]" />
                            </div>
                          </div>

                          {/* Status Icons: Signal, 5G, Battery */}
                          <div className="w-16 flex items-center justify-end gap-1.5 text-neutral-900">
                            {/* Cellular Signal (4 bars) */}
                            <div className="flex items-end gap-[1.5px] h-3">
                              <div className="w-[3px] h-[3.5px] bg-neutral-900 rounded-[0.5px]" />
                              <div className="w-[3px] h-[5.5px] bg-neutral-900 rounded-[0.5px]" />
                              <div className="w-[3px] h-[8px] bg-neutral-900 rounded-[0.5px]" />
                              <div className="w-[3px] h-[10.5px] bg-neutral-900 rounded-[0.5px]" />
                            </div>
                            
                            {/* 5G */}
                            <span className="text-[10px] font-bold tracking-tighter ml-0.5">5G</span>

                            {/* Battery */}
                            <div className="flex items-center ml-0.5">
                              <div className="w-[20px] h-[10.5px] rounded-[3px] border border-neutral-900 p-[1px] flex items-center">
                                <div className="h-full w-[85%] bg-neutral-900 rounded-[1.5px]" />
                              </div>
                              <div className="w-[1.5px] h-[4px] bg-neutral-900 rounded-r-[1px]" />
                            </div>
                          </div>
                        </div>

                        {/* Live Website Viewport (Iframe Container) */}
                        <div className="relative flex-1 w-full bg-[#f8f6f0] overflow-hidden">
                          <iframe
                            src="/demos/qr-menu/index.html?masa=04"
                            title="AURA Premium Dijital QR Kafe Menüsü"
                            className="w-full h-full border-0 select-none"
                          />
                        </div>

                        {/* iOS Bottom Home Bar */}
                        <div className="h-[20px] shrink-0 bg-[#f8f6f0] flex items-center justify-center z-30 select-none pb-1">
                          <div className="w-32 h-[4px] bg-neutral-900/35 rounded-full hover:bg-neutral-900/60 transition-colors" />
                        </div>

                        {/* Corner Curvature Protective Ring Overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-[52px] ring-1 ring-black/35 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)] z-40" />
                      </div>
                    </div>

                    {/* Bottom Actions & Controls */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href="/demos/qr-menu/index.html?masa=04"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/20 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
                      >
                        <span>↗</span>
                        <span>Yeni Sekmede Tam Ekran Aç</span>
                      </a>
                      <span className="text-[11px] text-zinc-500">
                        📱 Ekranı kaydırabilir, sepet & masayı test edebilirsiniz
                      </span>
                    </div>
                  </div>

                  {/* Right: Capability & Interactive Stand Details */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="p-6 rounded-2xl border border-[#ecdbbb]/25 bg-[#1c1c1c]/90">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <span>☕</span>
                        <span>AURA Dijital QR Menü & Adisyon</span>
                      </h3>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                        Kafenizde veya restoranınızda masalardaki QR kodu okutan misafirleriniz, bu lüks arayüzle anında karşılaşır. Siparişini seçip garson çağırabilir veya doğrudan mutfak adisyonuna gönderebilir.
                      </p>

                      <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span><strong>Adisyo POS & Bulut Sistemlerle</strong> 1:1 tam entegre çalışır.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span><strong>Masa Numarası Tanıma:</strong> QR kodu hangi masayı işaret ediyorsa adisyon o masaya yazılır.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span><strong>Garson Çağır Butonu:</strong> Masaya gelen personelin zaman tasarrufu sağlar.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span><strong>Anlık Fiyat & Ürün Güncelleme:</strong> Basılı menü maliyetini sıfırlar.</span>
                        </li>
                      </ul>

                      {/* Live Table Test Simulator */}
                      <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                        <div className="text-[11px] font-semibold text-[#ecdbbb] uppercase tracking-wider mb-2">
                          📱 Kendi Telefonunuzdan Test Edin
                        </div>
                        <p className="text-[11px] text-zinc-400 mb-3">
                          Bu QR kodunu telefonunuzun kamerasıyla okutarak sol taraftaki menüyü kendi mobil ekranınızda anında deneyimleyebilirsiniz:
                        </p>
                        <div className="flex items-center justify-center p-3 bg-white rounded-lg w-fit mx-auto shadow-md">
                          <img
                            src={'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=' + encodeURIComponent(originUrl + '/demos/qr-menu/index.html?masa=04')}
                            alt="Masa 04 QR Kodu"
                            className="w-28 h-28"
                          />
                        </div>
                        <div className="text-center mt-2 text-[10px] text-zinc-400 font-mono">
                          Masa: 04 · Canlı Test
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------- */}
              {/* DEMO 2: ÖZEL KLİNİK & DİŞ HEKİMİ                           */}
              {/* ----------------------------------------------------------- */}
              {selectedSector === 'clinic' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#1c1c1c]/90">
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                          <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 text-lg">🦷</span>
                          <div>
                            <h3 className="text-base font-semibold text-white">Canlı Randevu Rezervasyon Modülü</h3>
                            <p className="text-xs text-zinc-400">Hastalarınızın web sitenizden veya WhatsApp linkinden 7/24 randevu alabildiği akıllı modül.</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 text-xs">
                        <div>
                          <label className="block text-zinc-400 mb-1.5 font-medium">Hekim / Branş Seçimi</label>
                          <select
                            value={clinicDoctor}
                            onChange={(e) => setClinicDoctor(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white focus:border-[#ecdbbb] focus:outline-none"
                          >
                            <option>Dr. Selin Yılmaz (Estetik Diş & Gülüş Tasarımı)</option>
                            <option>Dr. Emre Demir (Ortodonti & Şeffaf Plak)</option>
                            <option>Dr. Kaan Öz (İmplant & Cerrahi)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-zinc-400 mb-1.5 font-medium">Randevu Saati Seçimi (Bugün)</label>
                          <div className="grid grid-cols-4 gap-2">
                            {['10:00', '11:30', '14:30', '16:00'].map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setClinicTime(time)}
                                className={'py-2 rounded-lg font-medium transition-all ' + (
                                  clinicTime === time
                                    ? 'bg-[#ecdbbb] text-zinc-950 font-bold shadow-sm'
                                    : 'bg-white/5 hover:bg-white/10 text-zinc-300'
                                )}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setClinicBooked(true)}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-md transition-all cursor-pointer"
                        >
                          Randevuyu Onayla & Otomatik SMS Gönder ⚡
                        </button>

                        {clinicBooked && (
                          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 animate-fadeIn">
                            <div className="font-semibold text-xs mb-1">✓ Randevu Başarıyla Kaydedildi!</div>
                            <div className="text-[11px] text-emerald-400/90 leading-relaxed">
                              Hastanın telefonuna SMS onayı ve kliniğinize WhatsApp randevu bildirimi anında iletildi:
                              <br />
                              <em>&quot;Sayın Danışan, {clinicDoctor} ile saat {clinicTime} kontrolünüz oluşturulmuştur.&quot;</em>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-white/10 bg-[#161616]">
                      <h4 className="text-xs font-semibold text-[#ecdbbb] uppercase tracking-wider mb-3">
                        📋 Hekim Dijital Hasta Kartı Önizlemesi
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between p-2.5 rounded-lg bg-black/40">
                          <span className="text-zinc-400">Hasta Adı:</span>
                          <span className="text-white font-medium">Buse Aksoy (Protokol #4108)</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded-lg bg-black/40">
                          <span className="text-zinc-400">Son Tedavi:</span>
                          <span className="text-white font-medium">Zirkonyum Kaplama & Diş Taşı Temizliği</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded-lg bg-black/40">
                          <span className="text-zinc-400">Hatırlatma Notu:</span>
                          <span className="text-amber-400 font-medium">6 Ay Sonraki Rutin Kontrol (Otomatik SMS Aktif)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-5">
                    <div className="p-6 rounded-2xl border border-[#ecdbbb]/25 bg-[#1c1c1c]/90">
                      <h4 className="text-base font-semibold text-white mb-3">Kliniklere Sağladığımız Avantajlar</h4>
                      <div className="space-y-3.5 text-xs text-zinc-300">
                        <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                          <strong className="text-white block mb-0.5">📅 Randevu Unutmalarına Son:</strong>
                          Randevudan 24 saat ve 2 saat önce otomatik WhatsApp onayı ile gelmeme oranı %90 düşer.
                        </div>
                        <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                          <strong className="text-white block mb-0.5">📂 Bulut Tabanlı Hasta Arşivi:</strong>
                          Röntgen, tedavi notu ve reçeteler her cihazdan hekime özel şifreli erişilir.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------- */}
              {/* DEMO 3: GÜZELLİK MERKEZİ & ESTETİK                          */}
              {/* ----------------------------------------------------------- */}
              {selectedSector === 'beauty' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#1c1c1c]/90">
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                          <span className="p-2 rounded-xl bg-rose-500/10 text-rose-400 text-lg">✨</span>
                          <div>
                            <h3 className="text-base font-semibold text-white">Canlı Paket & Seans Düşme Paneli</h3>
                            <p className="text-xs text-zinc-400">Danışan geldiğinde tek tıkla seans sayısını güncelleyin ve SMS bilgilendirmesi gönderin.</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-black/50 border border-white/10 mb-5">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <div className="text-sm font-semibold text-white">Danışan: Merve Aydın</div>
                            <div className="text-xs text-zinc-400">Paket: Lazer Epilasyon Tüm Vücut + Cilt Bakımı</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold">
                            Toplam: 8 Seans
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-between">
                          <div>
                            <div className="text-xs text-zinc-400 mb-0.5">Kalan Seans Hakkı:</div>
                            <div className="text-3xl font-bold font-display text-[#ecdbbb]">
                              {beautyRemaining} <span className="text-sm font-normal text-zinc-400">/ 8</span>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              if (beautyRemaining > 0) {
                                setBeautyRemaining((prev) => prev - 1);
                                setBeautyToast("Seans başarıyla düşüldü! Merve Aydın'ın kalan seansı: " + (beautyRemaining - 1) + ". Danışana bakım talimatı SMS iletildi.");
                              }
                            }}
                            disabled={beautyRemaining === 0}
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50"
                          >
                            Seans Kullan / Düş (-1) ⚡
                          </button>
                        </div>
                      </div>

                      {beautyToast && (
                        <div className="p-3.5 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-300 text-xs animate-fadeIn">
                          ✓ {beautyToast}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-5">
                    <div className="p-6 rounded-2xl border border-[#ecdbbb]/25 bg-[#1c1c1c]/90">
                      <h4 className="text-base font-semibold text-white mb-3">Güzellik Merkezlerine Özel</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                        Danışanlarınız kalan seans haklarını WhatsApp mesajı üzerinden dilediği an görebilir. Randevu günü geldiğinde cihaz ve oda çakışmaları tamamen engellenir.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------- */}
              {/* DEMO 4: SPOR SALONU & PILATES (iPhone 18 Pro Max + QR)      */}
              {/* ----------------------------------------------------------- */}
              {selectedSector === 'gym' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Smartphone Device Preview Frame (iPhone 18 Pro Max) */}
                  <div className="lg:col-span-7 flex flex-col items-center">
                    {/* Device Header Badge */}
                    <div className="mb-3 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400">
                      <svg className="w-3.5 h-3.5 text-[#ecdbbb] fill-current" viewBox="0 0 170 170">
                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.7-11.63-13.98-5.3-8.2-9.43-17.72-12.39-28.55-2.96-10.83-4.44-21.25-4.44-31.27 0-15.76 4.14-28.89 12.43-39.4 8.28-10.51 18.73-15.89 31.33-16.14 4.89 0 10.22 1.34 16 4.01 5.79 2.67 9.55 4.06 11.3 4.16 1.41-.1 5.34-1.55 11.8-4.35 6.46-2.81 12.03-4.1 16.71-3.89 12.73.65 22.84 5.37 30.34 14.16-11.08 6.74-16.51 16.03-16.3 27.87.21 9.35 3.84 17.15 10.89 23.4 7.05 6.25 15.42 9.8 25.11 10.66-2.28 6.85-4.99 13.78-8.13 20.79zM119.22 31.84c0-7.28 2.66-14.18 7.99-20.7 5.33-6.52 11.95-10.49 19.86-11.91.22 1.09.33 2.17.33 3.26 0 7.28-2.77 14.24-8.31 20.89-5.54 6.64-12.23 10.49-20.08 11.53-.21-1.09-.32-2.18-.32-3.27z" />
                      </svg>
                      <span className="font-medium text-zinc-200">iPhone 18 Pro Max</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-emerald-400 font-medium">Canlı QR Turnike Simülatörü</span>
                    </div>

                    {/* iPhone 18 Pro Max Outer Shell */}
                    <div className="relative w-full max-w-[375px] h-[740px] rounded-[54px] p-[3.5px] bg-gradient-to-b from-[#44423e] via-[#242321] to-[#363431] shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(16,185,129,0.14)] ring-1 ring-white/25 select-none transition-all">
                      
                      {/* --- PHYSICAL HARDWARE BUTTONS --- */}
                      {/* Left: Action Button (Eylem Tuşu) */}
                      <div className="absolute -left-[5.5px] top-[105px] w-[5.5px] h-7 bg-gradient-to-r from-[#2c2b29] to-[#4a4844] rounded-l-md border-y border-l border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Left: Volume Up */}
                      <div className="absolute -left-[5.5px] top-[148px] w-[5.5px] h-12 bg-gradient-to-r from-[#2c2b29] to-[#4a4844] rounded-l-md border-y border-l border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Left: Volume Down */}
                      <div className="absolute -left-[5.5px] top-[210px] w-[5.5px] h-12 bg-gradient-to-r from-[#2c2b29] to-[#4a4844] rounded-l-md border-y border-l border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Left Antenna Bands */}
                      <div className="absolute -left-[4px] top-16 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />
                      <div className="absolute -left-[4px] bottom-24 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />

                      {/* Right: Power / Siri Button */}
                      <div className="absolute -right-[5.5px] top-[160px] w-[5.5px] h-16 bg-gradient-to-l from-[#2c2b29] to-[#4a4844] rounded-r-md border-y border-r border-[#5f5d58] shadow-sm pointer-events-none" />
                      
                      {/* Right: Camera Control (iPhone 18 Pro Sapphire Capacitive Sensor) */}
                      <div className="absolute -right-[4.5px] top-[465px] w-[4.5px] h-14 bg-gradient-to-l from-[#1e1d1c] to-[#343330] rounded-r-sm border-y border-r border-[#4e4c47] shadow-inner pointer-events-none" />
                      
                      {/* Right Antenna Bands */}
                      <div className="absolute -right-[4px] top-16 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />
                      <div className="absolute -right-[4px] bottom-24 w-[4px] h-[2px] bg-[#66635d] pointer-events-none" />

                      {/* Top Micro Speaker Earpiece Slit */}
                      <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-14 h-[2px] bg-[#181716] rounded-full z-30 pointer-events-none" />

                      {/* --- SCREEN CONTAINER (Ultra-slim 3.5px Bezel & Concentric 50px Radius) --- */}
                      <div 
                        className="relative w-full h-full rounded-[50px] overflow-hidden bg-[#0b0c0e] flex flex-col ring-1 ring-black/80"
                        style={{
                          WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                          isolation: 'isolate',
                        }}
                      >
                        {/* iOS Status Bar (Dark Mode Pro Max Header - 18:00) */}
                        <div className="h-[42px] shrink-0 bg-[#0b0c0e] px-6 flex items-center justify-between z-30 select-none border-b border-white/5">
                          {/* Time */}
                          <div className="w-16 flex items-center">
                            <span className="text-[13px] font-semibold tracking-tight text-white font-sans">
                              18:00
                            </span>
                          </div>

                          {/* iPhone 18 Pro Max Dynamic Island */}
                          <div className="relative w-[112px] h-[27px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.8)] ring-1 ring-white/15 group cursor-default">
                            {/* Privacy / Turnstile Active Sensor indicator */}
                            <div className="w-2 h-2 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            </div>
                            
                            {/* TrueDepth Camera Optics */}
                            <div className="w-3.5 h-3.5 rounded-full bg-[#060b14] border border-[#162035] flex items-center justify-center relative shadow-inner">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#1e2a4a]/90 shadow-[0_0_2px_#3b82f6]" />
                            </div>
                          </div>

                          {/* Status Icons: Signal, 5G, Battery */}
                          <div className="w-16 flex items-center justify-end gap-1.5 text-white">
                            {/* Cellular Signal (4 bars) */}
                            <div className="flex items-end gap-[1.5px] h-3">
                              <div className="w-[3px] h-[3.5px] bg-white rounded-[0.5px]" />
                              <div className="w-[3px] h-[5.5px] bg-white rounded-[0.5px]" />
                              <div className="w-[3px] h-[8px] bg-white rounded-[0.5px]" />
                              <div className="w-[3px] h-[10.5px] bg-white rounded-[0.5px]" />
                            </div>
                            
                            {/* 5G */}
                            <span className="text-[10px] font-bold tracking-tighter ml-0.5">5G</span>

                            {/* Battery */}
                            <div className="flex items-center ml-0.5">
                              <div className="w-[20px] h-[10.5px] rounded-[3px] border border-white/80 p-[1px] flex items-center">
                                <div className="h-full w-[92%] bg-emerald-400 rounded-[1.5px]" />
                              </div>
                              <div className="w-[1.5px] h-[4px] bg-white/80 rounded-r-[1px]" />
                            </div>
                          </div>
                        </div>

                        {/* Live Gym App Viewport (Iframe Container) */}
                        <div className="relative flex-1 w-full bg-[#0b0c0e] overflow-hidden">
                          <iframe
                            src={'/demos/gym-app/index.html?scan=1&isim=' + encodeURIComponent(gymMemberName || 'Eşref Fırat')}
                            title="APEX CLUB Spor Salonu QR Turnike & Üye Sistemi"
                            className="w-full h-full border-0 select-none"
                          />
                        </div>

                        {/* iOS Bottom Home Bar */}
                        <div className="h-[20px] shrink-0 bg-[#0b0c0e] flex items-center justify-center z-30 select-none pb-1">
                          <div className="w-32 h-[4px] bg-white/35 rounded-full hover:bg-white/60 transition-colors" />
                        </div>

                        {/* Corner Curvature Protective Ring Overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-[50px] ring-1 ring-black/50 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] z-40" />
                      </div>
                    </div>

                    {/* Bottom Actions & Controls */}
                    <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={'/demos/gym-app/index.html?scan=1&isim=' + encodeURIComponent(gymMemberName || 'Eşref Fırat')}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/20 transition-all cursor-pointer shadow-sm hover:scale-[1.02]"
                      >
                        <span>↗</span>
                        <span>Yeni Sekmede Tam Ekran Aç</span>
                      </a>
                      <span className="text-[11px] text-zinc-500">
                        📱 İsim değiştirebilir, turnike geçişini & dersleri test edebilirsiniz
                      </span>
                    </div>
                  </div>

                  {/* Right: Capability & Live QR Turnstile Test */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="p-6 rounded-2xl border border-[#ecdbbb]/25 bg-[#1c1c1c]/90">
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <span>🏋️‍♂️</span>
                        <span>APEX CLUB · QR Turnike & Üye Sistemi</span>
                      </h3>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                        Üyeleriniz salona geldiğinde fiziksel kart taşımadan telefonlarındaki QR kodu turnikeye okutur. Okutulduğu anda ekranda <strong>&quot;{gymMemberName || 'Eşref Fırat'} — Saat 18:00 itibarıyla salona giriş yaptınız!&quot;</strong> bildirimi, akıllı dolap numarası ve kalan üyelik bilgileri belirir.
                      </p>

                      {/* Live Name Customizer for Instant QR & Phone Update */}
                      <div className="p-3.5 rounded-xl bg-black/50 border border-emerald-500/30 mb-5">
                        <label className="block text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
                          👤 Giriş Yapan Üye Adı Soyadı (Canlı Değiştirin)
                        </label>
                        <input
                          type="text"
                          value={gymMemberName}
                          onChange={(e) => setGymMemberName(e.target.value)}
                          placeholder="Adınız Soyadınız..."
                          className="w-full px-3.5 py-2 rounded-lg bg-[#121316] border border-white/15 text-white text-xs font-semibold focus:border-emerald-400 focus:outline-none"
                        />
                        <div className="mt-1.5 text-[10px] text-zinc-400">
                          Yazdığınız isim hem soldaki <strong>iPhone 18 Pro Max</strong> ekranında hem de aşağıdaki QR kodda anında güncellenir.
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-xs text-zinc-300 mb-6">
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span><strong>Saat 18:00 Anlık Giriş Onayı:</strong> İsim-soyisim, giriş saati ve otomatik soyunma dolabı ataması.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span><strong>Kopyalanamaz Dinamik QR:</strong> Her 15 saniyede yenilenen güvenlikli turnike geçiş kodu.</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span><strong>Reformer Pilates & PT Rezervasyon:</strong> Üyeler grup derslerindeki son kontenjanları telefondan ayırtır.</span>
                        </li>
                      </ul>

                      {/* Live Mobile QR Turnstile Scanner Box */}
                      <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/25">
                        <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                          <span>📱 Telefonunuzdan QR Okutun (Turnike Simülasyonu)</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 mb-3">
                          Telefon kameranızla bu QR kodu okuttuğunuzda kendi ekranınızda <strong>&quot;{gymMemberName || 'Eşref Fırat'} · Saat 18:00 itibarıyla salona giriş yaptınız!&quot;</strong> ekranı açılır:
                        </p>
                        <div className="flex items-center justify-center p-3 bg-white rounded-xl w-fit mx-auto shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                          <img
                            src={'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(originUrl + '/demos/gym-app/index.html?scan=1&isim=' + (gymMemberName || 'Eşref Fırat'))}
                            alt="Spor Salonu Turnike QR Kodu"
                            className="w-32 h-32"
                          />
                        </div>
                        <div className="text-center mt-2.5 text-[10px] text-emerald-400 font-mono font-semibold">
                          ✓ Turnike #01 · Saat 18:00 Giriş Kartı
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------- */}
              {/* DEMO 5: E-TİCARET & BUTİK MAĞAZA                           */}
              {/* ----------------------------------------------------------- */}
              {selectedSector === 'ecommerce' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#1c1c1c]/90">
                      <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                          <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 text-lg">🛍️</span>
                          <div>
                            <h3 className="text-base font-semibold text-white">Lüks Butik E-Ticaret Arayüzü</h3>
                            <p className="text-xs text-zinc-400">Tek tıkla sepete ekleme, beden seçimi ve anlık WhatsApp sipariş akışı.</p>
                          </div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#ecdbbb]">
                          Sepetim: {cartCount} Ürün
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex flex-col sm:flex-row gap-4 items-center">
                        <img
                          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=300&q=80"
                          alt="Lüks Kaşmir Ceket"
                          className="w-24 h-32 object-cover rounded-lg border border-white/10"
                        />
                        <div className="flex-1 space-y-2 text-xs text-left w-full">
                          <div className="text-sm font-semibold text-white">Artisan İtalyan Yün & Kaşmir Ceket</div>
                          <div className="text-zinc-400">Özel Seri · Kum Beji / Beden: M</div>
                          <div className="text-lg font-bold font-display text-[#ecdbbb]">₺3.850</div>
                          
                          <div className="flex items-center gap-2 pt-2">
                            <button
                              type="button"
                              onClick={() => {
                                setCartCount((prev) => prev + 1);
                                setOrderToast(true);
                              }}
                              className="px-4 py-2 rounded-xl bg-[#ecdbbb] hover:bg-white text-zinc-950 font-bold transition-all shadow-md cursor-pointer"
                            >
                              + Sepete Ekle
                            </button>
                            <button
                              type="button"
                              onClick={() => setOrderToast(true)}
                              className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold transition-all flex items-center gap-1.5"
                            >
                              <span>💬</span>
                              <span>WhatsApp ile 1-Tıkla Al</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {orderToast && (
                        <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs animate-fadeIn">
                          ✓ Sipariş akışı simüle edildi! Ürün sepetinize eklendi ve Iyzico sanal POS veya WhatsApp sipariş kanalı hazırlandı.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-2xl border border-[#ecdbbb]/25 bg-[#1c1c1c]/90 text-xs text-zinc-300 space-y-3">
                    <h4 className="text-base font-semibold text-white">Modern E-Ticaret Avantajı</h4>
                    <p>Shopify veya WooCommerce hantallığından uzak, 0.8 saniyede açılan özel Next.js butik mağaza altyapısıyla satış dönüşüm oranınızı 2-3 katına çıkarın.</p>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------- */}
              {/* DEMO 6: OTEL & BUTİK KONAKLAMA                             */}
              {/* ----------------------------------------------------------- */}
              {selectedSector === 'hotel' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#1c1c1c]/90">
                      <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                        <span className="p-2 rounded-xl bg-amber-500/10 text-amber-400 text-lg">🛎️</span>
                        <div>
                          <h3 className="text-base font-semibold text-white">Dijital Oda Servisi (Room Service QR)</h3>
                          <p className="text-xs text-zinc-400">Oda 402 misafiri için temassız concierge ve sipariş ekranı.</p>
                        </div>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/50 border border-white/10">
                          <div>
                            <div className="font-semibold text-white">Serpme Ege Kahvaltısı (2 Kişilik)</div>
                            <div className="text-zinc-400 text-[11px]">Sıcak servis · Odaya Teslim</div>
                          </div>
                          <span className="text-[#ecdbbb] font-bold">₺650</span>
                        </div>

                        <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/50 border border-white/10">
                          <div>
                            <div className="font-semibold text-white">Ekstra Yastık & Havlu Seti Talebi</div>
                            <div className="text-zinc-400 text-[11px]">Kat Hizmetleri Bildirimi</div>
                          </div>
                          <span className="px-2 py-1 rounded bg-white/10 text-zinc-300 font-semibold text-[10px]">Ücretsiz</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-2xl border border-[#ecdbbb]/25 bg-[#1c1c1c]/90 text-xs text-zinc-300 space-y-3">
                    <h4 className="text-base font-semibold text-white">Otellere Özel Çözüm</h4>
                    <p>Odalara yerleştirilen şık akrilik QR stantlar sayesinde misafirleriniz telefon indirmeden oda servisi siparişi verir, spa randevusu oluşturur ve resepsiyona tek tıkla ulaşır.</p>
                  </div>
                </div>
              )}

              {/* ----------------------------------------------------------- */}
              {/* DEMO 7: OTO SERVİS & DETAILING                             */}
              {/* ----------------------------------------------------------- */}
              {selectedSector === 'auto' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="p-6 rounded-2xl border border-white/10 bg-[#1c1c1c]/90">
                      <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                        <span className="p-2 rounded-xl bg-red-500/10 text-red-400 text-lg">🏎️</span>
                        <div>
                          <h3 className="text-base font-semibold text-white">Canlı Bakım & Servis Aşamaları Takibi</h3>
                          <p className="text-xs text-zinc-400">Plaka: 34 SOFT 101 (BMW 420d Gran Coupe)</p>
                        </div>
                      </div>

                      <div className="space-y-3 text-xs">
                        {[
                          { step: 1, name: 'Araç Kabul & Ekspertiz Fotoğrafları', done: true },
                          { step: 2, name: 'Periyodik Yağ & Filtre Değişimi', done: true },
                          { step: 3, name: 'Boya Koruma & Seramik Kaplama', done: true, current: true },
                          { step: 4, name: 'Son Kontrol & Müşteri Teslimi', done: false },
                        ].map((item) => (
                          <div
                            key={item.step}
                            className={'flex items-center justify-between p-3.5 rounded-xl border ' + (
                              item.current
                                ? 'bg-amber-500/10 border-amber-500/40 text-white font-semibold'
                                : item.done
                                ? 'bg-black/50 border-white/10 text-zinc-300'
                                : 'bg-black/20 border-white/5 text-zinc-500'
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={'w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ' + (
                                item.done ? 'bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-400'
                              )}>
                                {item.done ? '✓' : item.step}
                              </span>
                              <span>{item.name}</span>
                            </div>
                            {item.current && (
                              <span className="text-[11px] text-amber-400 font-mono animate-pulse">
                                Devam Ediyor...
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 rounded-2xl border border-[#ecdbbb]/25 bg-[#1c1c1c]/90 text-xs text-zinc-300 space-y-3">
                    <h4 className="text-base font-semibold text-white">Oto Servis & Detailing Avantajları</h4>
                    <p>Müşteri sürekli arayıp aracını sormaz; SMS ile gelen takip linkinden aracına yapılan tüm işlemleri fotoğraflarıyla anlık izler.</p>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
