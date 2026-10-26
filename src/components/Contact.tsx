"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(
      `Ad: ${name}\nFirma: ${company}\nE-posta: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:hello@softlabs.com?subject=${encodeURIComponent("SoftLabs görüşme talebi")}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="iletisim" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32 bg-white border-t border-[#ecdbbb]/50">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ecdbbb]/20 blur-[150px] rounded-full -z-10" />

      <div className="grid gap-14 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#ecdbbb]/45 border border-[#ecdbbb] px-3.5 py-1 text-xs font-semibold text-[#525252] tracking-wider uppercase mb-6 shadow-xs">
            <span className="font-mono text-[#525252]">008</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#525252]/70" />
            <span>İLETİŞİME GEÇİN</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#525252] leading-tight">
            İşletmenizi dijitalde <br />
            <span className="underline decoration-[#ecdbbb] decoration-4 underline-offset-8">birlikte büyütelim.</span>
          </h2>

          <p className="mt-6 max-w-md text-[#6c6c6c] leading-relaxed text-base sm:text-lg">
            Kısa bir mesaj yeterli. İhtiyacınızı ve çözmek istediğiniz operasyonel darboğazı anlatın; 24 saat içinde ücretsiz keşif ve çözüm önerisiyle dönelim.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4 text-sm text-[#525252]">
              <div className="w-9 h-9 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shadow-xs">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.18 8.18 0 01-5.83 2.42c-1.47 0-2.91-.4-4.17-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 01-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6-.1.49-.3 1.47-1.2 1.68-1.76.21-.56.21-1.04.15-1.16-.06-.13-.23-.2-.48-.32z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#858585] font-medium">WhatsApp İletişim Hattı</div>
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

                    window.location.href = appUrl;

                    const start = Date.now();
                    setTimeout(() => {
                      if (!document.hidden && Date.now() - start < 2200) {
                        window.open(webUrl, '_blank');
                      }
                    }, 1000);
                  }}
                  className="font-semibold text-[#525252] hover:text-[#25D366] transition inline-flex items-center gap-2 cursor-pointer"
                >
                  0501 136 68 15
                  <span className="text-[10px] bg-[#25D366]/15 text-[#128C7E] px-2 py-0.5 rounded-full font-bold">Çevrimiçi & Aktif</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#525252]">
              <div className="w-9 h-9 rounded-full bg-[#f7f0e3] border border-[#ecdbbb] flex items-center justify-center text-[#525252] font-mono shadow-2xs">
                ✉
              </div>
              <div>
                <div className="text-xs text-[#858585] font-medium">E-Posta</div>
                <a href="mailto:hello@softlabs.com" className="font-semibold text-[#525252] hover:text-[#6c6c6c] transition">
                  hello@softlabs.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#525252]">
              <div className="w-9 h-9 rounded-full bg-[#f7f0e3] border border-[#ecdbbb] flex items-center justify-center text-[#525252] font-mono shadow-2xs">
                ⚡
              </div>
              <div>
                <div className="text-xs text-[#858585] font-medium">Ortalama Yanıt Süresi</div>
                <div className="font-semibold text-[#525252]">Aynı gün içinde dönüş</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Card in Warm Palette */}
        <div className="rounded-3xl border border-[#ecdbbb] bg-[#f7f0e3]/45 p-8 md:p-10 shadow-[0_16px_45px_rgba(82,82,82,0.06)]">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-[#525252] text-white flex items-center justify-center text-2xl mb-4 font-bold shadow-xs">
                ✓
              </div>
              <h3 className="text-xl font-bold text-[#525252]">Talebiniz Alındı</h3>
              <p className="mt-2 text-sm text-[#6c6c6c] max-w-xs">
                E-posta istemciniz açıldı. Gönderdikten sonra ekibimiz 24 saat içinde sizinle iletişime geçecektir.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-1.5">
                <label className="text-xs font-semibold text-[#525252]">Adınız & Soyadınız</label>
                <input
                  name="name"
                  required
                  placeholder="Ahmet Yılmaz"
                  className="rounded-2xl border border-[#ecdbbb] bg-white px-4 py-3 text-sm text-[#525252] placeholder-[#858585] outline-none transition focus:border-[#525252] focus:ring-1 focus:ring-[#ecdbbb] shadow-2xs"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-semibold text-[#525252]">Firma Adınız</label>
                <input
                  name="company"
                  placeholder="Yılmaz Lojistik / Kafe"
                  className="rounded-2xl border border-[#ecdbbb] bg-white px-4 py-3 text-sm text-[#525252] placeholder-[#858585] outline-none transition focus:border-[#525252] focus:ring-1 focus:ring-[#ecdbbb] shadow-2xs"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-semibold text-[#525252]">E-Posta Adresiniz</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="ahmet@firma.com"
                  className="rounded-2xl border border-[#ecdbbb] bg-white px-4 py-3 text-sm text-[#525252] placeholder-[#858585] outline-none transition focus:border-[#525252] focus:ring-1 focus:ring-[#ecdbbb] shadow-2xs"
                />
              </div>

              <div className="grid gap-1.5">
                <label className="text-xs font-semibold text-[#525252]">Projeniz ya da İhtiyacınız</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Nasıl bir yazılıma ihtiyacınız var? Hangi operasyonel süreçleri hızlandırmak istiyorsunuz?"
                  className="resize-none rounded-2xl border border-[#ecdbbb] bg-white px-4 py-3 text-sm text-[#525252] placeholder-[#858585] outline-none transition focus:border-[#525252] focus:ring-1 focus:ring-[#ecdbbb] shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#525252] text-white py-3.5 text-sm font-semibold shadow-[0_6px_24px_rgba(82,82,82,0.25)] transition-all hover:bg-[#6c6c6c] hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Görüşme Talebi Gönder</span>
                <span className="font-bold text-white/70">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
