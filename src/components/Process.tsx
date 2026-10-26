'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Bidirectional Scroll & Touch Tracking:
  // Dynamically activates the step currently in focus / reading zone (both scrolling down and scrolling up).
  // "kullanıcı hangisine geçtiyse o renklensin, yukarı çıkıyorsa solsun normal gri renge dolsun"
  useEffect(() => {
    let ticking = false;

    const calculateActiveStep = () => {
      if (typeof window === 'undefined') return;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const readingLine = vh * 0.45; // 45% of screen height (natural eye focus level)

      let bestIdx = -1;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        // Check if card is visible in the viewport reading zone
        if (rect.bottom > 60 && rect.top < vh - 60) {
          const cardCenter = rect.top + rect.height / 2;
          const dist = Math.abs(cardCenter - readingLine);
          if (dist < minDistance) {
            minDistance = dist;
            bestIdx = idx;
          }
        }
      });

      if (bestIdx !== -1) {
        setActiveStep(bestIdx);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateActiveStep();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation
    calculateActiveStep();

    // Event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('orientationchange', handleScroll, { passive: true });

    // IntersectionObserver for native mobile viewport responsiveness
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              calculateActiveStep();
            }
          });
        },
        {
          rootMargin: '-10% 0px -20% 0px',
          threshold: [0.1, 0.3, 0.6],
        }
      );

      cardRefs.current.forEach((card) => {
        if (card) observer?.observe(card);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('orientationchange', handleScroll);
      observer?.disconnect();
    };
  }, []);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Keşif ve Denetim',
      description: 'İş akışlarınızı, darboğazlarınızı ve gelirlerinizi analiz ediyoruz.',
      icon: (
        // Icon 01: Solid circle with satellite dot (exact match to media_1792685373166.png)
        <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-current" viewBox="0 0 32 32">
          <circle cx="11.5" cy="16" r="7.5" />
          <circle cx="23" cy="20.5" r="3" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Otomasyon Planı',
      description: 'Performans göstergeleriyle uyumlu, detaylı bir otomasyon mimarisi tasarlıyoruz.',
      icon: (
        // Icon 02: Viewfinder frame with 4 corners and center square (exact match to media_1792685373166.png)
        <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-none stroke-current" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 32 32">
          <path d="M7 12V9a2 2 0 0 1 2-2h3" />
          <path d="M20 7h3a2 2 0 0 1 2 2v3" />
          <path d="M7 20v3a2 2 0 0 0 2 2h3" />
          <path d="M20 25h3a2 2 0 0 0 2-2v-3" />
          <rect x="12" y="12" width="8" height="8" rx="1.5" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Yapı ve Entegrasyon',
      description: 'Mühendislerimiz yapay zeka sistemlerini uyguluyor ve mevcut araçlarınızla entegre ediyor.',
      icon: (
        // Icon 03: Solid filled 6-toothed gear with round center hole (exact match to media_1792685373166.png)
        <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-1.5-13a1.5 1.5 0 0 1 3 0l.2 1.2c.5.2 1 .5 1.5.8l1.1-.6a1.5 1.5 0 0 1 2.1.8l1.1 1.9a1.5 1.5 0 0 1-.5 2.1l-1 .7c.2.5.3 1 .4 1.6l1.2.2a1.5 1.5 0 0 1 1.4 1.5v2.2a1.5 1.5 0 0 1-1.4 1.5l-1.2.2c-.1.6-.2 1.1-.4 1.6l1 .7a1.5 1.5 0 0 1 .5 2.1l-1.1 1.9a1.5 1.5 0 0 1-2.1.8l-1.1-.6c-.5.3-1 .6-1.5.8l-.2 1.2a1.5 1.5 0 0 1-3 0l-.2-1.2c-.5-.2-1-.5-1.5-.8l-1.1.6a1.5 1.5 0 0 1-2.1-.8l-1.1-1.9a1.5 1.5 0 0 1 .5-2.1l1-.7c-.2-.5-.3-1-.4-1.6l-1.2-.2a1.5 1.5 0 0 1-1.4-1.5v-2.2a1.5 1.5 0 0 1 1.4-1.5l1.2-.2c.1-.6.2-1.1.4-1.6l-1-.7a1.5 1.5 0 0 1-.5-2.1l1.1-1.9a1.5 1.5 0 0 1 2.1-.8l1.1.6c.5-.3 1-.6 1.5-.8l.2-1.2z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Test ve Optimizasyon',
      description: 'Performans testi, veri doğrulama, yinelemeli iyileştirme ve optimizasyon.',
      icon: (
        // Icon 04: Concentric spiral target aperture (exact match to media_1792685373166.png)
        <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-none stroke-current" strokeWidth="2.8" strokeLinecap="round" viewBox="0 0 32 32">
          <path d="M16 4.5a11.5 11.5 0 1 0 11.5 11.5" />
          <path d="M16 10.5a5.5 5.5 0 1 0 5.5 5.5" />
          <circle cx="16" cy="16" r="2.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Dağıtım ve Ölçeklendirme',
      description: 'Sistemleri başlatın, izleyin ve sürekli olarak optimize edin.',
      icon: (
        // Icon 05: Solid filled diagonal rocket with window (exact match to media_1792685373166.png)
        <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-current" viewBox="0 0 24 24">
          <path d="M13.13 2.05C11.5 2.25 9.5 3.5 8.1 5c-2.3 2.3-3.6 5.5-4 7.8L2.4 14.5a1 1 0 0 0 .3 1.4l2 1.4.3 2.3a1 1 0 0 0 1.2 1l2.4-.4 1.7 1.7a1 1 0 0 0 1.4-.2l1.7-1.7c2.3-.4 5.5-1.7 7.8-4 1.5-1.4 2.75-3.4 2.95-5 .2-1.7-.8-3.4-2.1-4.7-1.3-1.3-3-2.3-4.7-2.15zM15.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="surec" className="relative py-28 px-5 max-w-7xl mx-auto overflow-hidden bg-[#f7f0e3]/40 border-t border-[#ecdbbb]/60">
      {/* Background Subtle Ambient Lighting */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ecdbbb]/20 blur-[160px] rounded-full -z-10" />

      {/* Header (Framer 1:1 Match) */}
      <div className="flex flex-col items-center text-center gap-4 mb-20">
        <div className="inline-flex items-center gap-2.5 bg-[#ecdbbb]/45 border border-[#ecdbbb] px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md shadow-xs">
          <span className="text-[#525252] font-mono font-semibold">004</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
          <span className="text-[#525252] tracking-wider uppercase text-[11px] font-bold">İŞLEM</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#525252] max-w-3xl leading-tight">
          Nasıl Çalışıyoruz?
        </h2>

        <p className="text-[#6c6c6c] text-base md:text-lg max-w-2xl leading-relaxed">
          Karmaşık iş akışlarını verimli ve stratejik bir şekilde ölçeklenebilir yapay zeka destekli sistemlere dönüştürmek için tasarlanmış, kanıtlanmış bir süreç.
        </p>
      </div>

      {/* Process Zigzag Flow Container */}
      <div className="relative max-w-5xl mx-auto flex flex-col gap-6">
        {/* Continuous Center Connector Ray Line (Visible on Desktop) */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-[2px] bg-[#ecdbbb]/70 hidden md:block z-0 overflow-hidden">
          {/* Dynamic Colored Glowing Ray that follows scroll progression */}
          <div
            className="w-full bg-gradient-to-b from-[#ecdbbb] via-[#858585] to-[#525252] transition-all duration-500 ease-out shadow-[0_0_12px_rgba(236,219,187,0.7)]"
            style={{
              height:
                activeStep >= 0
                  ? `${Math.min(100, ((activeStep + 0.5) / steps.length) * 100)}%`
                  : '0%',
            }}
          />
        </div>

        {steps.map((step, idx) => {
          const isEven = idx % 2 === 1; // 02 and 04 are even (0-indexed 1 and 3)
          const isCurrent = idx === activeStep;

          return (
            <div
              key={step.number}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={() => setActiveStep(idx)}
              onTouchStart={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              className={`group relative w-full rounded-[36px] sm:rounded-[48px] p-6 sm:p-8 md:p-10 transition-all duration-500 cursor-pointer border select-none ${
                isCurrent
                  ? 'bg-white border-[#525252]/40 shadow-[0_16px_40px_rgba(82,82,82,0.09)] ring-1 ring-[#ecdbbb]'
                  : 'bg-[#f7f0e3]/45 hover:bg-[#f7f0e3]/80 border-[#ecdbbb]/70 shadow-xs'
              }`}
            >
              {/* Desktop 3-Column Alternating Layout */}
              <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] items-center gap-4 relative z-10">
                {/* COLUMN 1: LEFT */}
                <div className={`flex items-center ${isEven ? 'justify-end text-right' : 'justify-start text-left'}`}>
                  {isEven ? (
                    // Even Step: Title + Description on Left (Right-Aligned)
                    <div className="max-w-md pr-2">
                      <h3
                        className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                          isCurrent ? 'text-[#525252]' : 'text-[#6c6c6c]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                        isCurrent ? 'text-[#6c6c6c] font-medium' : 'text-[#858585] font-normal'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  ) : (
                    // Odd Step: Icon Squircle + Number Pill on Left
                    <div className="flex items-center gap-4">
                      {/* Icon Squircle Badge */}
                      <div
                        className={`w-20 h-20 sm:w-22 sm:h-22 rounded-[28px] flex items-center justify-center transition-all duration-500 ${
                          isCurrent
                            ? 'bg-[#525252] text-white shadow-[inset_0_0_12px_rgba(236,219,187,0.4),0_12px_30px_rgba(82,82,82,0.22)] scale-105'
                            : 'bg-[#ecdbbb]/45 text-[#525252] border border-[#ecdbbb]'
                        }`}
                      >
                        {step.icon}
                      </div>

                      {/* Number Pill */}
                      <div className={`flex h-10 px-3.5 items-center justify-center rounded-xl border transition-all duration-300 font-mono font-bold text-sm ${
                        isCurrent
                          ? 'bg-[#f7f0e3] border-[#525252]/30 text-[#525252] shadow-xs'
                          : 'bg-white/80 border-[#ecdbbb] text-[#6c6c6c]'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                  )}
                </div>

                {/* COLUMN 2: CENTER NODE (Directly over the vertical line) */}
                <div className="flex items-center justify-center relative">
                  {isCurrent ? (
                    // Active Iridescent Holographic Node
                    <div
                      className="w-9 h-9 rounded-xl p-[2px] shadow-[0_0_16px_rgba(236,219,187,0.7)] transition-all duration-300 scale-105"
                      style={{
                        backgroundImage:
                          'linear-gradient(270deg, #ecdbbb 0%, #ffffff 35%, #858585 70%, #525252 100%)',
                      }}
                    >
                      <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#525252]" />
                      </div>
                    </div>
                  ) : (
                    // Inactive Square Node
                    <div className="w-7 h-7 rounded-lg border-2 border-[#ecdbbb] bg-white shadow-2xs flex items-center justify-center transition-all duration-300 group-hover:border-[#858585]">
                      <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
                    </div>
                  )}
                </div>

                {/* COLUMN 3: RIGHT */}
                <div className={`flex items-center ${isEven ? 'justify-start text-left' : 'justify-start text-left'}`}>
                  {isEven ? (
                    // Even Step: Icon Squircle + Number Pill on Right
                    <div className="flex items-center gap-4 pl-2">
                      {/* Icon Squircle Badge */}
                      <div
                        className={`w-20 h-20 sm:w-22 sm:h-22 rounded-[28px] flex items-center justify-center transition-all duration-500 ${
                          isCurrent
                            ? 'bg-[#525252] text-white shadow-[inset_0_0_12px_rgba(236,219,187,0.4),0_12px_30px_rgba(82,82,82,0.22)] scale-105'
                            : 'bg-[#ecdbbb]/45 text-[#525252] border border-[#ecdbbb]'
                        }`}
                      >
                        {step.icon}
                      </div>

                      {/* Number Pill */}
                      <div className={`flex h-10 px-3.5 items-center justify-center rounded-xl border transition-all duration-300 font-mono font-bold text-sm ${
                        isCurrent
                          ? 'bg-[#f7f0e3] border-[#525252]/30 text-[#525252] shadow-xs'
                          : 'bg-white/80 border-[#ecdbbb] text-[#6c6c6c]'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                  ) : (
                    // Odd Step: Title + Description on Right
                    <div className="max-w-md pl-2">
                      <h3
                        className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                          isCurrent ? 'text-[#525252]' : 'text-[#6c6c6c]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                        isCurrent ? 'text-[#6c6c6c] font-medium' : 'text-[#858585] font-normal'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Layout (< md) */}
              <div className="flex md:hidden flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isCurrent
                          ? 'bg-[#525252] text-white shadow-md scale-105'
                          : 'bg-[#ecdbbb]/45 text-[#525252] border border-[#ecdbbb]'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className={`flex h-8 px-2.5 items-center justify-center rounded-lg border font-mono font-bold text-xs transition-colors duration-300 ${
                      isCurrent
                        ? 'bg-[#f7f0e3] border-[#525252]/30 text-[#525252] shadow-2xs'
                        : 'bg-white/80 border-[#ecdbbb] text-[#6c6c6c]'
                    }`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Node on Mobile */}
                  {isCurrent ? (
                    <div
                      className="w-7 h-7 rounded-lg p-[1.5px] transition-all duration-300 shadow-[0_0_12px_rgba(236,219,187,0.7)] scale-105"
                      style={{
                        backgroundImage:
                          'linear-gradient(270deg, #ecdbbb 0%, #ffffff 35%, #858585 70%, #525252 100%)',
                      }}
                    >
                      <div className="w-full h-full rounded-[6px] bg-white flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#525252]" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-md border-2 border-[#ecdbbb] bg-white" />
                  )}
                </div>

                <div>
                  <h3
                    className={`font-display text-lg font-bold tracking-tight transition-colors duration-300 ${
                      isCurrent ? 'text-[#525252]' : 'text-[#6c6c6c]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className={`mt-1 text-xs sm:text-sm leading-relaxed transition-colors duration-300 ${
                    isCurrent ? 'text-[#6c6c6c]' : 'text-[#858585]'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
