'use client';

import React, { useEffect, useRef } from 'react';
import LogoMark from './LogoMark';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Handled: browser autoplay policy
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden px-5 pt-36 pb-10 bg-[#b9b9b9]"
    >
      {/* 6-Second Looping Background Video (Full Screen Hero Background) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover object-center"
          src="https://framerusercontent.com/assets/b3Bk2z34loWAeMvpX7fNvAf275A.mp4"
        />

        {/* Ambient Top Vignette for Navbar and Headline Contrast */}
        <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-black/45 via-black/15 to-transparent pointer-events-none" />

        {/* Smooth Anchor Fade to Pure Video Gray #b9b9b9 at the Bottom Edge */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#b9b9b9] pointer-events-none" />
      </div>

      {/* Ambient Center Backlight to give 3D model depth & maximum text clarity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] max-w-[90vw] h-[420px] bg-black/35 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Central Content (Proportionately Spaced and Lowered) */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center my-auto animate-rise pt-8">
        {/* Eyebrow Badge (SoftLabs LogoMark + SoftLabs Text) */}
        <div
          className="inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-white/25 bg-black/60 px-5 sm:px-6 py-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl mb-8 transition-all duration-300 hover:scale-105 hover:bg-black/75 hover:border-white/40 ring-1 ring-white/10"
          data-framer-name="Eye Brow Hero"
        >
          {/* SoftLabs LogoMark */}
          <LogoMark className="h-6 w-6 sm:h-7 sm:w-7 text-white shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />

          {/* SoftLabs Text */}
          <span className="text-[15px] sm:text-base font-bold tracking-wide text-white antialiased">
            SoftLabs
          </span>

          {/* Micro Subtle Champagne Accent Dot */}
          <span className="h-1.5 w-1.5 rounded-full bg-[#ecdbbb] shadow-[0_0_6px_#ecdbbb]" />
        </div>

        {/* Multi-Color Iridescent Holographic Headline (Luminous Luxury Pearl, Champagne & Diamond White) */}
        <h1 className="font-display max-w-5xl text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, #eeddfc 0%, #ffffff 18%, #fbf0dc 36%, #ffffff 52%, #fae2e8 68%, #dcf0fb 84%, #ffffff 100%)',
            }}
          >
            Modern İşletmeler İçin
            <br className="hidden sm:inline" />{' '}
            Yazılım Çözümleri
          </span>
        </h1>

        {/* Subtitle with High Contrast & Readability */}
        <p className="mt-7 max-w-2xl text-base sm:text-lg text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-relaxed font-normal tracking-wide">
          Manuel işleri ortadan kaldıran, operasyonel maliyetleri düşüren ve iş performansınızı katlayan modern yazılımlar ve akıllı sistemler kuruyoruz.
        </p>

        {/* Dual CTAs (Crisp, High-End Glassmorphism & Metallic Borders) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Button 1: "Demo Al →" with Radiant Champagne-Pearl Border & Deep Obsidian Body (Opens Demo Modal) */}
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { sector: null } }));
              }
            }}
            className="group relative inline-flex items-center justify-center rounded-full p-[2px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_35px_rgba(236,219,187,0.25),0_12px_40px_rgba(0,0,0,0.6)] cursor-pointer"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #ecdbbb 0%, #ffffff 30%, #f4d0db 55%, #c4b5fd 80%, #ffffff 100%)',
            }}
          >
            <div className="flex h-[58px] sm:h-[64px] items-center gap-4 rounded-full bg-black/95 group-hover:bg-black px-8 sm:px-9 text-base sm:text-[17px] font-semibold text-white backdrop-blur-xl">
              <span>Demo Al</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-sm text-white transition-transform group-hover:translate-x-1">
                →
              </div>
            </div>
          </button>

          {/* Button 2: WhatsApp Icon + "Bize Ulaşın" (Sleek Obsidian Glass Finish) */}
          <a
            href={`whatsapp://send?phone=905011366815&text=${encodeURIComponent(
              'Merhaba! 👋\n\nİşletmemiz için özel yazılım ve otomasyon çözümleriniz hakkında bilgi ve demo almak istiyoruz. 🚀💻\n\nDetayları birlikte görüşebilir miyiz? 🤝✨'
            )}`}
            onClick={(e) => {
              e.preventDefault();
              const phone = '905011366815';
              const text = encodeURIComponent(
                'Merhaba! 👋\n\nİşletmemiz için özel yazılım ve otomasyon çözümleriniz hakkında bilgi ve demo almak istiyoruz. 🚀💻\n\nDetayları birlikte görüşebilir miyiz? 🤝✨'
              );
              const appUrl = `whatsapp://send?phone=${phone}&text=${text}`;
              const webUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${text}`;

              // Doğrudan yüklü WhatsApp uygulamasında (Masaüstü veya Mobil) sohbeti aç
              window.location.href = appUrl;

              // Eğer kullanıcıda uygulama yoksa doğrudan WhatsApp Web sohbet ekranına yönlendir
              const start = Date.now();
              setTimeout(() => {
                if (!document.hidden && Date.now() - start < 2200) {
                  window.open(webUrl, '_blank');
                }
              }, 1000);
            }}
            className="group inline-flex h-[58px] sm:h-[64px] items-center gap-3.5 rounded-full bg-black/55 hover:bg-black/70 text-white border border-white/25 hover:border-white/40 px-6 sm:px-7 text-base sm:text-[17px] font-semibold shadow-[0_10px_35px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-1 ring-white/10"
          >
            {/* WhatsApp Icon Inside Rounded Emoji-Style Badge */}
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#25D366] text-white ring-2 ring-white/40 shadow-[0_0_14px_rgba(37,211,102,0.6)] transition-transform duration-300 group-hover:scale-110">
              <svg className="h-4.5 w-4.5 sm:h-5 sm:w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 01-5.83 2.42c-1.47 0-2.91-.4-4.17-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 01-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6-.1.49-.3 1.47-1.2 1.68-1.76.21-.56.21-1.04.15-1.16-.06-.13-.23-.2-.48-.32z" />
              </svg>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="tracking-tight">Bize Ulaşın</span>
            </div>
          </a>
        </div>
      </div>

      {/* Keşfedin Scroll Indicator with Crisp Visibility */}
      <a
        href="#hakkimizda"
        className="relative z-10 flex flex-col items-center gap-2 text-[11px] tracking-[0.3em] text-white/90 hover:text-white uppercase transition-all duration-300 pb-8 sm:pb-10 pt-4 group cursor-pointer drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      >
        <span className="font-mono font-semibold tracking-[0.3em] text-white/90 group-hover:text-white">
          KEŞFEDİN
        </span>
        <span className="h-7 w-[1.5px] bg-white/70 group-hover:h-9 group-hover:bg-white transition-all duration-300 animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
      </a>
    </section>
  );
}
