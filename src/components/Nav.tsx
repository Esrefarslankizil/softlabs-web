'use client';

import React, { useState, useEffect } from 'react';
import LogoMark from './LogoMark';

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="fixed top-9 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-auto">
      {/* Top Navbar Bar (Closed State) */}
      <nav
        className="flex items-center gap-2.5 sm:gap-3"
        data-framer-name="Navbar"
      >
        {/* Left Circular Logo Button (Framer Translucent Gray with SoftLabs Logo) */}
        <div className="framer-7of3dw-container">
          <a
            href="./"
            className="flex h-12 w-12 sm:h-[50px] sm:w-[50px] items-center justify-center rounded-full border border-white/20 bg-black/50 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl ring-1 ring-white/10 transition-all duration-300 hover:scale-105 hover:bg-black/65 hover:border-white/35"
            data-framer-name="Variant 1"
            aria-label="Ana Sayfa"
          >
            <LogoMark className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-110" />
          </a>
        </div>

        {/* Right Nav Action Pill */}
        <div
          className="flex h-12 sm:h-[50px] items-center gap-2 sm:gap-2.5 rounded-full border border-white/20 bg-black/50 p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl ring-1 ring-white/10"
          data-framer-name="Nav Action"
        >
          {/* Menu Toggle Button with Exact Crisp Parallel '=' Lines */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="group flex items-center gap-2.5 rounded-full px-3.5 sm:px-4 py-2 text-white transition-colors hover:bg-white/10 cursor-pointer select-none"
            data-framer-name="Close"
            aria-expanded={open}
            aria-label={open ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {/* 2 Crisp Straight Lines (Pixel-Perfect Match to User Reference) */}
            <div className="relative flex h-[13px] w-[18px] flex-col justify-between py-[0.5px]">
              <span
                className={`block h-[1.8px] w-[18px] rounded-[0.5px] bg-white shadow-xs transition-all duration-300 ease-out origin-center ${
                  open ? 'translate-y-[5.6px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[1.8px] w-[18px] rounded-[0.5px] bg-white shadow-xs transition-all duration-300 ease-out origin-center ${
                  open ? '-translate-y-[5.6px] -rotate-45' : ''
                }`}
              />
            </div>

            <span className="text-[14px] sm:text-[15px] font-medium tracking-normal text-white antialiased">
              {open ? 'Kapat' : 'Menü'}
            </span>
          </button>

          {/* CTA Pill Button (Demo Al - Opens Demo Modal) */}
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('open-demo-modal', { detail: { sector: null } }));
              }
            }}
            className="flex h-full items-center justify-center rounded-full border border-white/90 bg-white hover:bg-zinc-100 px-4 sm:px-5 py-2 text-xs sm:text-[13px] font-semibold text-zinc-950 shadow-[0_2px_12px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 active:scale-95 antialiased cursor-pointer"
            data-framer-name="Variant 1"
          >
            <span>Demo Al</span>
          </button>
        </div>
      </nav>

      {/* Expandable Nav Menu Dropdown (Open State) */}
      {open && (
        <div
          className="mt-3 w-[320px] sm:w-[360px] rounded-[36px] sm:rounded-[44px] border border-white/15 bg-black/60 p-3.5 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-[30px] transition-all duration-300 animate-rise"
          data-framer-name="Nav Menu"
        >
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {/* Row 1: Ana Sayfa | Başarı Hikayeleri */}
            <div className="flex items-center gap-2" data-framer-name="Row">
              <a
                href="#hero"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full py-2.5 sm:py-3 px-4 text-center text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.02] tracking-wide"
                data-framer-name="Variant 1"
              >
                Ana Sayfa
              </a>
              <a
                href="#calismalar"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full py-2.5 sm:py-3 px-4 text-center text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.02] tracking-wide"
                data-framer-name="Variant 1"
              >
                Başarı Hikayeleri
              </a>
            </div>

            {/* Row 2: Hizmetlerimiz | İletişim */}
            <div className="flex items-center gap-2" data-framer-name="Row">
              <a
                href="#hizmetler"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full py-2.5 sm:py-3 px-4 text-center text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.02] tracking-wide"
                data-framer-name="Variant 1"
              >
                Hizmetlerimiz
              </a>
              <a
                href="#iletisim"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full py-2.5 sm:py-3 px-4 text-center text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.02] tracking-wide"
                data-framer-name="Variant 1"
              >
                İletişim
              </a>
            </div>

            {/* Row 3: Çalışma Süreci | Entegrasyonlar */}
            <div className="flex items-center gap-2" data-framer-name="Row">
              <a
                href="#surec"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full py-2.5 sm:py-3 px-4 text-center text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.02] tracking-wide"
                data-framer-name="Variant 1"
              >
                Çalışma Süreci
              </a>
              <a
                href="#entegrasyonlar"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full py-2.5 sm:py-3 px-4 text-center text-xs sm:text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.02] tracking-wide"
                data-framer-name="Variant 1"
              >
                Entegrasyonlar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
