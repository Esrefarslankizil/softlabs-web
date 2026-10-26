'use client';

import React from 'react';
import Image from 'next/image';

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

const benefits: BenefitItem[] = [
  {
    id: 'sozlesme-yok',
    title: 'Sözleşme Yok',
    description: 'İstediğiniz an duraklatın veya iptal edin; bağlayıcı taahhüt yok, kontrol tamamen sizde.',
    icon: '/icons/sozlesme-doc-3d.svg',
    badge: 'Tam Özgürlük',
  },
  {
    id: 'uygun-fiyat',
    title: 'Uygun Fiyat',
    description: 'Gereksiz ajans ve aracı maliyetleri olmadan; şeffaf, sürpriz ek masrafsız ve bütçe dostu.',
    icon: '/icons/uygun-fiyat-3d.svg',
    badge: 'Şeffaf Fiyat',
  },
  {
    id: 'hizli-teslimat',
    title: 'Hızlı Teslimat',
    description: 'Yazılım ve tasarım taleplerinizin büyük çoğunluğu 72 saat içinde tamamlanıp anında yayına alınır.',
    icon: '/icons/hizli-teslimat-3d.svg',
    badge: '72 Saatte Teslim',
  },
  {
    id: 'guvenlik-garantisi',
    title: '2 Yıl Güvenlik Garantisi',
    description: 'Tüm sistemler 2 yıl boyunca siber tehditlere, veri açıklarına ve sistem kesintilerine karşı tam garanti altındadır.',
    icon: '/icons/guvenlik-shield-3d.svg',
    badge: '2 Yıl Garanti',
  },
  {
    id: 'omur-boyu-bakim',
    title: 'Ömür Boyu Bakım',
    description: 'Yazılımınız yaşadığı sürece kesintisiz teknik destek, optimizasyon ve hata giderme desteği her zaman yanınızda.',
    icon: '/icons/omur-boyu-bakim-3d.svg',
    badge: 'Sürekli Destek',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="neden-biz" className="relative py-28 px-5 max-w-7xl mx-auto overflow-hidden bg-[#f7f0e3]/40 border-t border-[#ecdbbb]/60">
      {/* Warm Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ecdbbb]/25 blur-[150px] rounded-full -z-10" />

      {/* Header (Framer Title Container) */}
      <div className="flex flex-col items-center text-center gap-4 mb-16 sm:mb-20" data-framer-name="Title">
        {/* Section Badge (Consistent with 001, 002, 003) */}
        <div className="inline-flex items-center gap-2.5 bg-[#ecdbbb]/45 border border-[#ecdbbb] px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md shadow-xs">
          <span className="text-[#525252] font-mono font-semibold">002</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
          <span className="text-[#525252] tracking-wider uppercase text-[11px] font-semibold">NEDEN BİZ?</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#525252] max-w-2xl">
          Neden <span className="underline decoration-[#ecdbbb] decoration-4 underline-offset-8">Bizimle</span> Çalışmalısınız?
        </h2>

        <p className="text-[#6c6c6c] text-base md:text-lg max-w-xl leading-relaxed">
          Abonelik ve esnek çalışma modeliyle yazılım ve web tasarımını basit, hızlı ve ölçeklenebilir hale getiriyoruz; kontrol tamamen sizde.
        </p>
      </div>

      {/* Signature Framer Service Card Structure */}
      <div
        className="framer-whwse3 relative rounded-[32px] sm:rounded-[40px] border border-[#ecdbbb] bg-white p-8 sm:p-12 md:p-14 shadow-[0_16px_50px_rgba(82,82,82,0.06),0_1px_3px_rgba(82,82,82,0.02)] backdrop-blur-xl transition-all duration-500 hover:border-[#525252]/30 max-w-6xl mx-auto"
        data-border="true"
        data-framer-name="Service card"
      >
        {/* Card Header (Framer ismb5i: "Verileriniz her zaman güvende.") */}
        <div className="framer-ismb5i mb-12 sm:mb-14 text-center" data-framer-component-type="RichTextContainer">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] border border-[#ecdbbb] px-3.5 py-1 mb-3 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#525252] animate-pulse" />
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#525252]">
              SoftLabs Standartları & Güvencesi
            </span>
          </div>
          <p className="framer-text font-sans text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#525252]">
            <strong className="framer-text">Verileriniz ve İşletmeniz Her Zaman Güvende.</strong>
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#6c6c6c] max-w-2xl mx-auto font-sans leading-relaxed">
            Şeffaf çalışma prensiplerimiz, 2 yıl koşulsuz güvenlik garantimiz ve ömür boyu bakım taahhüdümüzle işinize değer katıyoruz.
          </p>
        </div>

        {/* Items Container (Framer 1laa1nj: Service Data Row/Grid) */}
        <div
          className="framer-1laa1nj grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-6 items-start"
          data-framer-name="Service Data Grid"
        >
          {benefits.map((item) => (
            <div
              key={item.id}
              className="group framer-1epiyyw flex flex-col items-center text-center p-4 sm:p-3 rounded-2xl transition-all duration-300 hover:bg-[#f7f0e3]/60 hover:shadow-xs border border-transparent hover:border-[#ecdbbb]"
              data-framer-name="Service Data"
            >
              {/* Icon Container (Framer Frame 2087331264 + Image: 92x92) */}
              <div
                className="framer-vsum40 flex items-center justify-center mb-5"
                data-framer-name="Frame 2087331264"
              >
                <div
                  className="framer-jy3lse relative w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 drop-shadow-[0_8px_20px_rgba(82,82,82,0.12)]"
                  data-framer-name="Image"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={92}
                    height={92}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title Container (Framer End-to-End Encryption RichText) */}
              <div
                className="framer-e071d6 flex flex-col items-center gap-2.5 w-full"
                data-framer-component-type="RichTextContainer"
              >
                <h4 className="font-sans text-base sm:text-[17px] font-bold text-[#525252] tracking-tight leading-snug min-h-[44px] sm:min-h-[48px] flex items-center justify-center text-center">
                  {item.title}
                </h4>

                {/* Description Text ("açıklama metnini unutma") */}
                <p className="font-sans text-xs sm:text-[13px] text-[#6c6c6c] leading-relaxed max-w-[210px] font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}