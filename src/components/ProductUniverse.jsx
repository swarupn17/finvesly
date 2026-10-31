import { useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import mutualFundHouses from '../assets/brochure-mutual-fund-houses.png';
import pmsAif from '../assets/brochure-pms-aif.png';
import bonds from '../assets/brochure-bonds.png';
import sif from '../assets/brochure-sif.png';
import giftCity from '../assets/brochure-gift-city.png';

const extraPathways = [
  'RBI and Capital Gain Bonds',
  'Secondary Market Bonds',
  'ETFs and listed equity',
  'IPOs and Sovereign Gold Bonds',
  'Loans, including term, consumer, partner and loan-against-securities routes',
];

const productGroups = [
  { id: 'mutual-funds', label: 'Mutual funds', title: 'Mutual fund houses', description: 'Browse the mutual fund house universe referenced in the supplied brochure.', image: mutualFundHouses, alt: 'Mutual fund house logos from the supplied product brochure' },
  { id: 'sif', label: 'SIF', title: 'Specialized Investment Funds', description: 'Specialized Investment Fund providers referenced in the supplied brochure. These strategies are intended for eligible investors.', image: sif, alt: 'Specialized Investment Fund provider logos from the supplied product brochure' },
  { id: 'pms-aif', label: 'PMS & AIF', title: 'PMS and AIF product universe', description: 'Portfolio Management Services and Alternative Investment Fund providers referenced in the supplied brochure for eligible investors.', image: pmsAif, alt: 'PMS and AIF provider logos from the supplied product brochure' },
  { id: 'gift-city', label: 'GIFT City', title: 'GIFT City product universe', description: 'Eligible IFSC-based investment routes and providers referenced in the supplied brochure.', image: giftCity, alt: 'GIFT City product provider logos from the supplied product brochure' },
  { id: 'bonds', label: 'Bonds', title: 'Debt-market product universe', description: 'RBI, Capital Gain Bond, and secondary-market bond issuers referenced in the supplied brochure.', image: bonds, alt: 'Bond issuer logos from the supplied product brochure' },
  { id: 'more-pathways', label: 'More pathways', title: 'Other product pathways', description: 'The brochure also lists these categories, which can be discussed where relevant, available, and suitable.', items: extraPathways },
];

function ProductUniverse() {
  const shouldReduceMotion = useReducedMotion();
  const [activeProductId, setActiveProductId] = useState(productGroups[0].id);
  const activeProduct = productGroups.find((group) => group.id === activeProductId) ?? productGroups[0];

  return (
    <section className="product-universe content-wrap">
      <div className="product-universe-heading">
        <div><p className="eyebrow"><span /> Product universe</p><h2>Broader pathways, considered responsibly.</h2></div>
        <p>Select a product category to view its complete reference panel. Each pathway is explored only where relevant, available, and suitable to the investor or borrower.</p>
      </div>
      <div className="product-selector" role="tablist" aria-label="Product universe categories">
        {productGroups.map((group) => (
          <button key={group.id} type="button" role="tab" id={`product-tab-${group.id}`} aria-selected={activeProduct.id === group.id} aria-controls={`product-panel-${group.id}`} className={activeProduct.id === group.id ? 'is-active' : ''} onClick={() => setActiveProductId(group.id)}>{group.label}</button>
        ))}
      </div>
      <AnimatePresence initial={false} mode="wait">
        <Motion.article className="product-showcase" key={activeProduct.id} id={`product-panel-${activeProduct.id}`} role="tabpanel" aria-labelledby={`product-tab-${activeProduct.id}`} initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: shouldReduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}>
          <header><span>{String(productGroups.findIndex((group) => group.id === activeProduct.id) + 1).padStart(2, '0')}</span><div><h3>{activeProduct.title}</h3><p>{activeProduct.description}</p></div></header>
          {activeProduct.image ? <figure className="product-showcase-image"><img src={activeProduct.image} alt={activeProduct.alt} width="1200" height="750" loading="lazy" decoding="async" /><figcaption>Reference panel from the supplied product brochure</figcaption></figure> : <ul className="product-pathway-list">{activeProduct.items.map((pathway) => <li key={pathway}>{pathway}</li>)}</ul>}
        </Motion.article>
      </AnimatePresence>
      <p className="product-disclosure">Logos and product categories are reproduced from the supplied NJ Wealth product brochure for reference only. They do not indicate endorsement, a recommendation, or an exclusive association. Product availability, terms, eligibility, and suitability can change.</p>
    </section>
  );
}

export default ProductUniverse;
