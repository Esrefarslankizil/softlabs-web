import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import LiquidGlassPricing from '@/components/LiquidGlassPricing';

export const metadata: Metadata = {
  title: 'Fiyatlandırma & Yatırım Planları — SoftLabs',
  description:
    'Yerel ve büyüyen işletmeler için şeffaf, esnek ve modern yazılım paketleri. Liquid Glass fiyatlandırma mimarisiyle gizli maliyetlere son.',
};

const FAQS = [
  {
    q: 'Hosting, sunucu ve alan adı maliyetleri pakete dahil mi?',
    a: 'Evet. Tüm paketlerimizde yüksek hızlı bulut barındırma, küresel CDN dağıtımı, 256-bit SSL güvenlik sertifikası ve DDoS koruması fiyata dahildir. Ekstra bir sunucu masrafı ödemezsiniz.',
  },
  {
    q: 'Sistemlerin kurulumu ve yayına alınması ne kadar sürer?',
    a: 'Dijital Vitrin projeleri 7-10 iş günü içinde, QR Menü ve QR Turnike gibi operasyonel sistemler 10-14 iş günü içinde personelinize teslim edilir. Kurulum esnasında menü ve ürün girişleriniz ekibimizce yapılır.',
  },
  {
    q: 'Yemeksepeti, Trendyol veya Getir gibi komisyon ödüyor muyum?',
    a: 'Kesinlikle hayır! SoftLabs sistemlerinde cirodan veya sipariş başına komisyon kesintisi %0’dır. Tüm ödemeler doğrudan sizin Iyzico veya banka sanal POS hesabınıza aktarılır.',
  },
  {
    q: 'Mevcut POS cihazım veya adisyon programımla entegre çalışır mı?',
    a: 'Evet. Başta Adisyo olmak üzere popüler restoran POS sistemleriyle, spor salonlarında turnike geçiş röleleriyle ve güzellik merkezlerinde SMS altyapılarıyla 1:1 tam entegre çalışıyoruz.',
  },
  {
    q: 'Daha sonra paket yükseltme veya özel özellik ekleme yapabilir miyim?',
    a: 'Elbette. İşletmeniz büyüdükçe dilediğiniz an tek tıkla üst pakete geçebilir, çok şubeli yönetim veya özel entegrasyon modülleri ekletebilirsiniz.',
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-28 pb-16 bg-gradient-to-b from-white via-[#faf8f4] to-white relative overflow-hidden">
        {/* Core Liquid Glass Pricing Component */}
        <LiquidGlassPricing />

        {/* FAQ Accordion Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#9e7a38] px-3 py-1 rounded-full bg-[#ecdbbb]/30 border border-[#ecdbbb]/60">
              Merak Edilenler
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-zinc-950 mt-3">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Fiyatlandırma, sözleşme ve teknik kurulum süreçleriyle ilgili en çok sorulan konular.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl bg-white/80 border border-zinc-200/80 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-200 hover:border-[#ecdbbb]"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-semibold text-sm sm:text-base text-zinc-900 select-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 group-open:rotate-180 group-open:bg-[#ecdbbb] transition-transform duration-200 text-xs font-bold text-zinc-700 group-open:text-zinc-950">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          {/* Need a Custom Enterprise Consultation Box */}
          <div className="mt-14 p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#ecdbbb]">
                Özel Proje & Fabrika / ERP
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold mt-1 text-white">
                Farklı bir sektör veya çok şubeli bir operasyonunuz mu var?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 max-w-xl">
                Hazır paketler yerine işletmenizin mevcut iş akışına özel sıfırdan mimari geliştiriyoruz.
              </p>
            </div>
            <a
              href="https://wa.me/905011366815?text=Merhaba%20SoftLabs,%20işletmeme%20özel%20yazılım%20mimarisi%20ve%20kurumsal%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#ecdbbb] hover:bg-white text-zinc-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
            >
              Doğrudan Mühendisle Konuşun 💬
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <DemoModal />
    </>
  );
}
