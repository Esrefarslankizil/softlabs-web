'use client';

import React from 'react';

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-28 px-5 max-w-7xl mx-auto overflow-hidden bg-white border-t border-[#ecdbbb]/50">
      {/* Warm Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/3 -right-24 w-[600px] h-[350px] bg-[#ecdbbb]/20 blur-[160px] rounded-full -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2.5 bg-[#ecdbbb]/45 border border-[#ecdbbb] px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md shadow-xs">
          <span className="text-[#525252] font-mono font-semibold">003</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
          <span className="text-[#525252] tracking-wider uppercase text-[11px] font-semibold">ÇÖZÜMLERİMİZ</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#525252] max-w-3xl leading-tight">
          İşletmeniz İçin <br />
          <span className="underline decoration-[#ecdbbb] decoration-4 underline-offset-8">Özel Yazılım ve Sistemler</span>
        </h2>

        <p className="text-[#6c6c6c] text-base md:text-lg max-w-2xl leading-relaxed">
          Restoran, klinik, güzellik merkezi ve e-ticaret işletmelerinin günlük operasyonlarını kolaylaştıran, maliyetleri düşüren ve satışları katlayan akıllı sistemler.
        </p>
      </div>

      {/* 4 Premium Bento Cards Grid (2x2 Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-6xl mx-auto">
        
        {/* Card 1: QR Menü & Akıllı Adisyon */}
        <div className="group relative rounded-[32px] border border-[#ecdbbb] bg-[#f7f0e3]/45 p-7 sm:p-9 backdrop-blur-xl transition-all duration-500 hover:border-[#525252]/40 hover:bg-[#f7f0e3]/75 hover:shadow-[0_20px_50px_rgba(82,82,82,0.08)] flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#525252] font-bold bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                RESTORAN & KAFE
              </span>
              <span className="text-xs font-mono text-[#858585] font-semibold">01 / 04</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#525252] tracking-tight">
              QR Menü & Akıllı Adisyon
            </h3>

            <p className="text-[#6c6c6c] text-sm sm:text-base leading-relaxed">
              Masadan temassız QR sipariş, mutfak ekranı (KDS), garson el terminali ve kasa adisyonunu tek merkezde senkronize eden modern restoran otomasyonu.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                📱 QR Menü & Masa Siparişi
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                👨‍🍳 Mutfak Ekranı (KDS)
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                🧾 Masaya / Parçalı Hesap
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                📊 Anlık Ciro & Z-Raporu
              </span>
            </div>
          </div>

          {/* Interactive UI Mock: Restaurant Kitchen & Table Terminal */}
          <div className="relative mt-7 rounded-2xl border border-[#ecdbbb] bg-white p-5 shadow-xs transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="flex items-center justify-between border-b border-[#ecdbbb]/40 pb-3 mb-3.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#525252] animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#525252] uppercase tracking-wider">
                  Masa 04 • Salon Katı
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#525252] bg-[#f7f0e3] border border-[#ecdbbb] px-2.5 py-0.5 rounded-full">
                Sipariş Hazırlanıyor (4 dk)
              </span>
            </div>

            {/* Receipt / Order Items */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-dashed border-[#ecdbbb]/60">
                <span className="text-[#525252] font-medium">2x Özel Dana Antrikot (Orta Pişmiş)</span>
                <span className="font-mono font-bold text-[#525252]">₺960</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-dashed border-[#ecdbbb]/60">
                <span className="text-[#525252] font-medium">1x Akdeniz Salatası (Zeytinyağlı)</span>
                <span className="font-mono font-bold text-[#525252]">₺180</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-[#525252] font-medium">2x Taze Ev Yapımı Limonata</span>
                <span className="font-mono font-bold text-[#525252]">₺160</span>
              </div>
            </div>

            {/* Bottom Bar Actions */}
            <div className="mt-4 pt-3 border-t border-[#ecdbbb]/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase text-[#858585] font-semibold tracking-wider block">Toplam Tutar</span>
                <span className="font-mono text-base font-bold text-[#525252]">₺1.300,00</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { sector: 'cafe' } }));
                    }
                  }}
                  className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#525252] hover:bg-black text-[#ecdbbb] hover:text-white transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                >
                  <span>Canlı Menü Demosu</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Randevu & Danışan / Paket Seans Takip */}
        <div className="group relative rounded-[32px] border border-[#ecdbbb] bg-[#f7f0e3]/45 p-7 sm:p-9 backdrop-blur-xl transition-all duration-500 hover:border-[#525252]/40 hover:bg-[#f7f0e3]/75 hover:shadow-[0_20px_50px_rgba(82,82,82,0.08)] flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#525252] font-bold bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                KLİNİK & GÜZELLİK MERKEZİ
              </span>
              <span className="text-xs font-mono text-[#858585] font-semibold">02 / 04</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#525252] tracking-tight">
              Randevu & Danışan / Paket Seans Takibi
            </h3>

            <p className="text-[#6c6c6c] text-sm sm:text-base leading-relaxed">
              Diş klinikleri ve güzellik merkezleri için dijital hasta kartı, seans/paket kullanımı, kalan seans uyarıları ve otomatik WhatsApp randevu hatırlatmaları.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                ✨ Paket & Kalan Seans Takibi
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                🦷 Hasta / Danışan Dijital Dosyası
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                💬 Otomatik WhatsApp Hatırlatıcı
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                📅 Uzman & Kabin Takvim Planı
              </span>
            </div>
          </div>

          {/* Interactive UI Mock: Client Package & Treatment Tracking */}
          <div className="relative mt-7 rounded-2xl border border-black/[0.08] bg-white p-5 shadow-sm transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center text-xs font-bold text-indigo-700">
                  MY
                </div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-950 leading-none">Melis Yılmaz</h5>
                  <span className="text-[10px] text-zinc-500">Cilt Gençleştirme & Lazer Protokolü</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                Paket: 6 / 8 Seans
              </span>
            </div>

            {/* 8-Step Interactive Seans Pill Bar */}
            <div className="space-y-1.5 mb-3.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-600 font-medium">Tamamlanma Oranı</span>
                <span className="font-mono font-bold text-zinc-950">%75 (Kalan 2 Seans)</span>
              </div>
              <div className="grid grid-cols-8 gap-1.5 h-2.5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-full rounded-full bg-emerald-500" title={`Seans ${i} Tamamlandı`} />
                ))}
                {[7, 8].map((i) => (
                  <div key={i} className="h-full rounded-full bg-zinc-200" title={`Seans ${i} Bekliyor`} />
                ))}
              </div>
            </div>

            {/* Next Appointment Alert */}
            <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-sm">📅</span>
                <div>
                  <span className="font-semibold text-zinc-900 block">Yarın 14:30 • Kabin 2 (Uzm. Derya)</span>
                  <span className="text-[10px] text-emerald-600 font-medium">✓ WhatsApp Onayı Alındı</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { sector: 'beauty' } }));
                    }
                  }}
                  className="text-[11px] font-semibold text-[#525252] hover:text-black bg-white hover:bg-[#ecdbbb]/40 border border-[#ecdbbb] px-2.5 py-1 rounded-md shadow-2xs transition-colors cursor-pointer"
                >
                  Seans Demosu →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { sector: 'clinic' } }));
                    }
                  }}
                  className="text-[11px] font-semibold text-white bg-[#525252] hover:bg-black px-2.5 py-1 rounded-md shadow-2xs transition-colors cursor-pointer"
                >
                  Klinik Demosu →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Ön Muhasebe & Akıllı Stok Takibi */}
        <div className="group relative rounded-[32px] border border-[#ecdbbb] bg-[#f7f0e3]/45 p-7 sm:p-9 backdrop-blur-xl transition-all duration-500 hover:border-[#525252]/40 hover:bg-[#f7f0e3]/75 hover:shadow-[0_20px_50px_rgba(82,82,82,0.08)] flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#525252] font-bold bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                FİNANS & STOK KONTROLÜ
              </span>
              <span className="text-xs font-mono text-[#858585] font-semibold">03 / 04</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#525252] tracking-tight">
              Ön Muhasebe & Akıllı Stok Takibi
            </h3>

            <p className="text-[#6c6c6c] text-sm sm:text-base leading-relaxed">
              Giriş-çıkış faturaları, kritik stok uyarıları, cari hesaplar, kasa/banka hareketleri ve resmi e-Fatura / e-Arşiv entegrasyonu tek ekranda.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                📑 Resmi e-Fatura & e-Arşiv
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                ⚠️ Kritik Stok Erken Uyarısı
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                👥 Tedarikçi & Müşteri Cari Takip
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                💳 Kasa, POS & Banka Raporu
              </span>
            </div>
          </div>

          {/* Interactive UI Mock: Stock & Financial Overview */}
          <div className="relative mt-7 rounded-2xl border border-[#ecdbbb] bg-white p-5 shadow-xs transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div className="rounded-xl bg-[#f7f0e3] border border-[#ecdbbb] p-3">
                <span className="text-[10px] uppercase font-semibold text-[#6c6c6c] tracking-wider block">Bu Ayki Tahsilat</span>
                <span className="font-mono text-lg font-bold text-[#525252]">₺482.500</span>
                <span className="text-[10px] text-[#525252] font-semibold mt-0.5 block">↑ Geçen aya göre +%18</span>
              </div>
              <div className="rounded-xl bg-[#ecdbbb]/35 border border-[#ecdbbb] p-3">
                <span className="text-[10px] uppercase font-semibold text-[#525252] tracking-wider block">Kritik Stok Uyarısı</span>
                <span className="font-mono text-lg font-bold text-[#525252]">2 Ürün</span>
                <span className="text-[10px] text-[#6c6c6c] font-semibold mt-0.5 block">Otomatik sipariş önerildi</span>
              </div>
            </div>

            {/* Inventory Quick Status */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-[#ecdbbb]/40">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ecdbbb]" />
                  <span className="text-[#525252] font-medium">Özel Espresso Çekirdeği (10kg)</span>
                </div>
                <span className="text-[11px] font-semibold text-[#525252] bg-[#f7f0e3] border border-[#ecdbbb] px-2 py-0.5 rounded">
                  Kalan: 2 Adet
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-[#ecdbbb]/40">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#525252]" />
                  <span className="text-[#525252] font-medium">Termal Adisyon Rulosu (Koli)</span>
                </div>
                <span className="text-[11px] font-semibold text-[#525252] bg-[#f7f0e3] border border-[#ecdbbb] px-2 py-0.5 rounded">
                  Kalan: 28 Adet
                </span>
              </div>
            </div>

            {/* e-Fatura Status Badge */}
            <div className="mt-3 pt-2.5 border-t border-[#ecdbbb]/40 flex items-center justify-between text-[11px]">
              <span className="text-[#858585]">e-Fatura Entegrasyonu</span>
              <span className="font-semibold text-[#525252] flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#525252]" /> GİB & Özel Entegratör Aktif
              </span>
            </div>
          </div>
        </div>

        {/* Card 4: Modern E-Ticaret Sitesi */}
        <div className="group relative rounded-[32px] border border-[#ecdbbb] bg-[#f7f0e3]/45 p-7 sm:p-9 backdrop-blur-xl transition-all duration-500 hover:border-[#525252]/40 hover:bg-[#f7f0e3]/75 hover:shadow-[0_20px_50px_rgba(82,82,82,0.08)] flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#525252] font-bold bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                ONLINE SATIŞ & E-TİCARET
              </span>
              <span className="text-xs font-mono text-[#858585] font-semibold">04 / 04</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#525252] tracking-tight">
              Modern E-Ticaret Sitesi & Satış Platformu
            </h3>

            <p className="text-[#6c6c6c] text-sm sm:text-base leading-relaxed">
              İşletmenize özel, ultra hızlı mobil uyumlu mağaza. İyzico/PayTR sanal POS, otomatik kargo barkodu ve Trendyol / Hepsiburada pazaryeri senkronizasyonu.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                💳 Güvenli Sanal POS (İyzico / PayTR)
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                📦 Otomatik Kargo Barkodu & Takip
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                🔄 Trendyol & Pazaryeri Senkronizasyonu
              </span>
              <span className="text-xs font-medium text-[#525252] bg-white border border-[#ecdbbb] px-3 py-1 rounded-full shadow-2xs">
                ⚡ 100/100 Mobil Hız & SEO Altyapısı
              </span>
            </div>
          </div>

          {/* Interactive UI Mock: E-Commerce Store & Marketplace Hub */}
          <div className="relative mt-7 rounded-2xl border border-[#ecdbbb] bg-white p-5 shadow-xs transition-transform duration-500 group-hover:scale-[1.01]">
            <div className="flex items-center justify-between border-b border-[#ecdbbb]/40 pb-3 mb-3.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#525252]" />
                <span className="font-mono text-xs font-bold text-[#525252] uppercase tracking-wider">
                  Sipariş #84920
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#525252] bg-[#f7f0e3] border border-[#ecdbbb] px-2.5 py-0.5 rounded-full">
                Ödeme Onaylandı (PayTR)
              </span>
            </div>

            {/* Channel Sync Indicators */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3.5">
              <div className="p-2 rounded-lg bg-[#f7f0e3] border border-[#ecdbbb]">
                <span className="text-[10px] text-[#6c6c6c] block">Web Sitesi</span>
                <span className="font-bold text-[#525252]">Canlı Satışta</span>
              </div>
              <div className="p-2 rounded-lg bg-[#ecdbbb]/40 border border-[#ecdbbb] text-[#525252]">
                <span className="text-[10px] text-[#6c6c6c] block">Trendyol</span>
                <span className="font-bold">Senkronize</span>
              </div>
              <div className="p-2 rounded-lg bg-[#f7f0e3] border border-[#ecdbbb] text-[#525252]">
                <span className="text-[10px] text-[#6c6c6c] block">Hepsiburada</span>
                <span className="font-bold">Stok Eşitlendi</span>
              </div>
            </div>

            {/* Cargo & Dispatch Status */}
            <div className="rounded-xl bg-[#f7f0e3] border border-[#ecdbbb] p-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-sm">🚚</span>
                <div>
                  <span className="font-semibold text-[#525252] block">Yurtiçi Kargo Barkodu Hazır</span>
                  <span className="text-[10px] text-[#6c6c6c]">Takip No: 8392-1094-82</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { sector: 'ecommerce' } }));
                  }
                }}
                className="text-[11px] font-semibold text-white bg-[#525252] hover:bg-black px-3 py-1.5 rounded-md shadow-2xs cursor-pointer transition-colors"
              >
                E-Ticaret Demosu →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
