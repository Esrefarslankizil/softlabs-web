import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import LiquidGlassPricing from '@/components/LiquidGlassPricing';

export const metadata: Metadata = {
  title: 'Liquid Glass Fiyatlandırma — SoftLabs',
  description:
    'E-Ticaret ve Restoran işletmeleri için modern Liquid Glass fiyatlandırma paketleri.',
};

const CODEX_LIQUID_GLASS_CSS = `
:root {
  --ink: #15171c;
  --muted: rgba(21, 23, 28, 0.66);
}

.liquid-glass-stage {
  position: relative;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 120px 40px 60px;
  background: #c9cce3 url("https://framerusercontent.com/images/h0zrMyLXtnq5bLksJWSECqCfA.jpg?scale-down-to=2048&width=2400&height=1608") center/cover fixed no-repeat;
  color: #15171c;
}

.liquid-glass-stage:before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(249, 250, 255, 0.2), rgba(236, 230, 247, 0.12));
}

.pricing {
  position: relative;
  z-index: 1;
  width: min(1120px, 100%);
}

.billing-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.billing {
  position: relative;
  display: inline-flex;
  width: 324px;
  max-width: 100%;
  padding: 4px;
  gap: 2px;
  border: 1px solid rgba(255, 255, 255, 0.66);
  border-radius: 999px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.33), rgba(255, 255, 255, 0.08) 48%, rgba(255, 255, 255, 0.2));
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.75), inset 0 -1px 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.1), 0 12px 28px -18px rgba(0, 0, 0, 0.36);
  -webkit-backdrop-filter: blur(18px) saturate(1.35);
  backdrop-filter: blur(18px) saturate(1.35);
}

.billing:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(46% 120%, rgba(255, 255, 255, 0.24), transparent 70%);
}

.billing-option {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(21, 23, 28, 0.62);
  font: inherit;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.25s, transform 0.25s;
}

.billing-option[aria-checked="true"] {
  color: var(--ink);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.91), rgba(255, 255, 255, 0.64));
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.95), 0 1px 4px rgba(24, 29, 46, 0.18);
}

.billing-option:active {
  transform: scale(0.98);
}

.billing-option:focus-visible {
  outline: 2px solid #5676b4;
  outline-offset: 2px;
}

.save {
  display: inline-flex;
  height: 20px;
  align-items: center;
  padding: 0 7px;
  border-radius: 999px;
  background: rgba(21, 23, 28, 0.55);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.billing-option[aria-checked="true"] .save {
  background: #47546b;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}

.card {
  position: relative;
  min-height: 428px;
  overflow: hidden;
  padding: 27px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  border-radius: 28px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.17), rgba(255, 255, 255, 0.045) 46%, rgba(255, 255, 255, 0.11));
  box-shadow: inset 0 1.5px 1px rgba(255, 255, 255, 0.82), inset 0 -1px 1px rgba(255, 255, 255, 0.27), inset 1.5px 0 1px rgba(255, 255, 255, 0.38), inset -1px 0 1px rgba(255, 255, 255, 0.18), 0 1px 2px rgba(0, 0, 0, 0.06), 0 12px 26px -18px rgba(0, 0, 0, 0.22), 0 36px 64px -40px rgba(0, 0, 0, 0.26);
  -webkit-backdrop-filter: blur(24px) saturate(1.35);
  backdrop-filter: blur(24px) saturate(1.35);
  display: flex;
  flex-direction: column;
}

.card:before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.035) 43%, rgba(255, 255, 255, 0.12));
  opacity: 0.8;
}

.card > * {
  position: relative;
  z-index: 1;
}

.card.pro {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.78);
  background: linear-gradient(150deg, rgba(34, 36, 46, 0.65), rgba(18, 20, 27, 0.78) 52%, rgba(28, 30, 40, 0.69));
  box-shadow: inset 0 1.5px 1px rgba(255, 255, 255, 0.5), inset 0 -1px 1px rgba(255, 255, 255, 0.14), inset 1.5px 0 1px rgba(255, 255, 255, 0.23), inset -1px 0 1px rgba(255, 255, 255, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08), 0 16px 30px -20px rgba(0, 0, 0, 0.28), 0 44px 76px -44px rgba(0, 0, 0, 0.32);
}

.card.pro:before {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 42%, rgba(255, 255, 255, 0.055));
}

.card-head {
  display: flex;
  min-height: 24px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.card-head h2 {
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: -0.025em;
}

.description {
  margin: 0;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 22px;
}

.pro .description {
  color: rgba(255, 255, 255, 0.72);
}

.popular {
  padding: 5px 11px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
}

.price {
  display: flex;
  height: 61px;
  align-items: baseline;
  gap: 8px;
  margin: 20px 0 18px;
  font-variant-numeric: tabular-nums lining-nums;
}

.amount {
  display: inline-flex;
  align-items: baseline;
  font-size: 44px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -0.045em;
}

.currency {
  align-self: flex-start;
  margin: 4px 3px 0 0;
  font-size: 22px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0;
}

.period {
  color: rgba(21, 23, 28, 0.65);
  font-size: 13px;
  line-height: 20px;
}

.pro .period {
  color: rgba(255, 255, 255, 0.7);
}

.cta {
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 999px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.23), rgba(255, 255, 255, 0.07) 46%, rgba(255, 255, 255, 0.18));
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.74), inset 0 -1px 1px rgba(255, 255, 255, 0.22), 0 4px 12px rgba(0, 0, 0, 0.08);
  color: var(--ink);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
  cursor: pointer;
}

.cta:hover {
  transform: translateY(-1px);
  background-color: rgba(255, 255, 255, 0.2);
}

.pro .cta {
  border-color: rgba(255, 255, 255, 0.72);
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.17) 46%, rgba(255, 255, 255, 0.29));
  color: #fff;
  font-weight: 600;
}

.rule {
  height: 1px;
  margin-bottom: 20px;
  background: rgba(21, 23, 28, 0.12);
}

.pro .rule {
  background: rgba(255, 255, 255, 0.16);
}

.features {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.features li {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  font-size: 13.5px;
  line-height: 1.4;
}

.check {
  width: 15px;
  flex: 0 0 15px;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
}

.pro .features {
  font-weight: 500;
}

@media (max-width: 900px) {
  .liquid-glass-stage {
    padding: 100px 24px 60px;
  }
  .cards {
    grid-template-columns: 1fr;
    max-width: 540px;
    margin-inline: auto;
  }
  .card {
    min-height: 0;
    padding: 27px;
  }
  .description {
    white-space: normal;
  }
  .billing-wrap {
    margin-bottom: 26px;
  }
}

@media (max-width: 520px) {
  .liquid-glass-stage {
    align-items: flex-start;
    padding: 90px 16px 40px;
  }
  .billing {
    width: 100%;
    max-width: 324px;
  }
  .cards {
    gap: 14px;
  }
  .card {
    padding: 24px;
    border-radius: 24px;
  }
  .price {
    margin-top: 18px;
    margin-bottom: 17px;
  }
}
`;

export default function PricingPage() {
  return (
    <>
      <Nav />
      <style dangerouslySetInnerHTML={{ __html: CODEX_LIQUID_GLASS_CSS }} />
      <main className="liquid-glass-stage">
        <LiquidGlassPricing />
      </main>
      <Footer />
      <DemoModal />
    </>
  );
}
