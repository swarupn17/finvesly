import { useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import mutualFundHouses from '../assets/brochure-mutual-fund-houses.png';
import pmsAif from '../assets/brochure-pms-aif.png';
import bonds from '../assets/brochure-bonds.png';
import sif from '../assets/brochure-sif.png';
import giftCity from '../assets/brochure-gift-city.png';

const personalServices = [
  ['Mutual Fund Investments', 'SIP, lump sum, STP and SWP solutions.'],
  ['Specialized Investment Funds (SIF)', 'Advanced mutual fund investment strategies for eligible investors.'],
  ['Portfolio Management Services (PMS)', 'Professionally managed investment portfolios for eligible high-net-worth investors.'],
  ['Alternative Investment Funds (AIF)', 'Access to eligible alternative investment opportunities across applicable fund categories.'],
  ['GIFT City Investment Solutions', 'Exploring international investment opportunities through eligible IFSC-based investment products.'],
  ['Goal-Based Financial Planning', "Wealth creation, children's education, marriage and other financial goals."],
  ['Retirement & Income Planning', 'Retirement corpus building and structured withdrawal strategies.'],
  ['Insurance Solutions', 'Life, health, motor and general insurance.'],
  ['Portfolio Review & Asset Allocation', 'Investment portfolio analysis, diversification and risk assessment.'],
  ['Tax-Efficient Investment Solutions', 'Tax-aware investment options aligned with financial objectives.'],
];

const organisationServices = [
  'Corporate Financial Awareness Workshops',
  'Employee Financial Wellness Programs',
  'Investment & Retirement Planning Webinars',
  'Financial Literacy Programs for Schools & Colleges',
  'Financial Education for NGOs & Bachat Gats',
  'Financial Fraud & Cyber Safety Awareness',
  'Customized Financial Education & Engagement Programs',
];

const extraPathways = [
  'RBI and capital gain bonds',
  'Secondary market bonds',
  'ETFs and listed equity',
  'IPOs and Sovereign Gold Bonds',
  'Loans, including term, consumer, partner and loan-against-securities routes',
];

const productGroups = [
  {
    id: 'mutual-funds',
    label: 'Mutual funds',
    title: 'Mutual fund houses',
    description: 'Browse the mutual fund house universe referenced in the supplied brochure.',
    image: mutualFundHouses,
    alt: 'Mutual fund house logos from the supplied product brochure',
  },
  {
    id: 'sif',
    label: 'SIF',
    title: 'Specialized Investment Funds',
    description: 'Specialized Investment Fund providers referenced in the supplied brochure. These strategies are intended for eligible investors.',
    image: sif,
    alt: 'Specialized Investment Fund provider logos from the supplied product brochure',
  },
  {
    id: 'pms-aif',
    label: 'PMS & AIF',
    title: 'PMS and AIF product universe',
    description: 'Portfolio Management Services and Alternative Investment Fund providers referenced in the supplied brochure for eligible investors.',
    image: pmsAif,
    alt: 'PMS and AIF provider logos from the supplied product brochure',
  },
  {
    id: 'gift-city',
    label: 'GIFT City',
    title: 'GIFT City product universe',
    description: 'Eligible IFSC-based investment routes and providers referenced in the supplied brochure.',
    image: giftCity,
    alt: 'GIFT City product provider logos from the supplied product brochure',
  },
  {
    id: 'bonds',
    label: 'Bonds',
    title: 'Debt-market product universe',
    description: 'RBI, capital gain bond, and secondary-market bond issuers referenced in the supplied brochure.',
    image: bonds,
    alt: 'Bond issuer logos from the supplied product brochure',
  },
  {
    id: 'more-pathways',
    label: 'More pathways',
    title: 'Other product pathways',
    description: 'The brochure also lists these categories, which can be discussed where relevant, available, and suitable.',
    items: extraPathways,
  },
];

function ServicesPage({ onNavigate }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeProductId, setActiveProductId] = useState(productGroups[0].id);
  const activeProduct = productGroups.find((group) => group.id === activeProductId) ?? productGroups[0];
  const reveal = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.13 },
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="detail-page services-page">
      <Motion.section className="page-hero page-hero--services" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}>
        <div className="content-wrap page-hero-grid">
          <div>
            <p className="eyebrow"><span /> Our services</p>
            <h1>Empowering financial awareness. Enabling smarter financial decisions.</h1>
            <p>Explore practical financial education and responsible financial solutions for individuals, families, corporates, and communities.</p>
          </div>
          <aside className="page-hero-stamp page-hero-stamp--services">
            <span>Finvesly Capital Services LLP</span>
            <strong>Educate First.<br />Empower Always.<br />Grow Together.</strong>
          </aside>
        </div>
      </Motion.section>

      <Motion.section className="service-detail-section content-wrap" {...reveal}>
        <div className="service-detail-heading">
          <div><p className="eyebrow"><span /> For individuals &amp; families</p><h2>Structure around the goals that matter to you.</h2></div>
          <p>Each conversation begins with your circumstances, objectives, timeline, and comfort with risk.</p>
        </div>
        <div className="detailed-service-grid">
          {personalServices.map(([title, text], index) => (
            <Motion.article key={title} whileHover={shouldReduceMotion ? undefined : { y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Motion.article>
          ))}
        </div>
      </Motion.section>

      <Motion.section className="organisation-services" {...reveal}>
        <div className="content-wrap organisation-grid">
          <div>
            <p className="eyebrow eyebrow--light"><span /> For corporates &amp; organisations</p>
            <h2>More confident decisions start with better financial awareness.</h2>
            <p>We create learning experiences for workplaces, schools, colleges, NGOs, and Bachat Gats.</p>
          </div>
          <ul>
            {organisationServices.map((service) => <li key={service}><FaCheck aria-hidden="true" />{service}</li>)}
          </ul>
        </div>
      </Motion.section>

      <Motion.section className="product-universe content-wrap" {...reveal}>
        <div className="product-universe-heading">
          <div><p className="eyebrow"><span /> Product universe</p><h2>Broader pathways, considered responsibly.</h2></div>
          <p>Select a product category to view its complete reference panel. Each pathway is explored only where relevant, available, and suitable to the investor or borrower.</p>
        </div>
        <div className="product-selector" role="tablist" aria-label="Product universe categories">
          {productGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`product-tab-${group.id}`}
              aria-selected={activeProduct.id === group.id}
              aria-controls={`product-panel-${group.id}`}
              className={activeProduct.id === group.id ? 'is-active' : ''}
              onClick={() => setActiveProductId(group.id)}
            >
              {group.label}
            </button>
          ))}
        </div>
        <AnimatePresence initial={false} mode="wait">
          <Motion.article
            className="product-showcase"
            key={activeProduct.id}
            id={`product-panel-${activeProduct.id}`}
            role="tabpanel"
            aria-labelledby={`product-tab-${activeProduct.id}`}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <header>
              <span>{String(productGroups.findIndex((group) => group.id === activeProduct.id) + 1).padStart(2, '0')}</span>
              <div><h3>{activeProduct.title}</h3><p>{activeProduct.description}</p></div>
            </header>
            {activeProduct.image ? (
              <figure className="product-showcase-image"><img src={activeProduct.image} alt={activeProduct.alt} /><figcaption>Reference panel from the supplied product brochure</figcaption></figure>
            ) : (
              <ul className="product-pathway-list">{activeProduct.items.map((pathway) => <li key={pathway}>{pathway}</li>)}</ul>
            )}
          </Motion.article>
        </AnimatePresence>
        <p className="product-disclosure">Logos and product categories are reproduced from the supplied NJ Wealth product brochure for reference only. They do not indicate endorsement, a recommendation, or an exclusive association. Product availability, terms, eligibility, and suitability can change.</p>
      </Motion.section>

      <Motion.section className="services-closing" {...reveal}>
        <div className="content-wrap services-closing-grid">
          <div><p className="eyebrow eyebrow--light"><span /> Our philosophy</p><h2>Educate First. Empower Always. Grow Together.</h2></div>
          <div><p>Making financial knowledge accessible and empowering individuals, families and organisations towards a financially stronger India.</p><button className="button button--soft" type="button" onClick={() => onNavigate('contact')}>Discuss your needs <FaArrowRight /></button></div>
        </div>
      </Motion.section>
    </div>
  );
}

export default ServicesPage;
