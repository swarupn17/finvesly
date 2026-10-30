import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import investment from '../assets/investImg.jpg';
import retirementPhoto from '../assets/retirement.jpg';
import education from '../assets/education.jpg';
import wealth from '../assets/wealth.jpg';
import workshopOne from '../assets/edu1.jpg';
import workshopTwo from '../assets/edu2.JPG';
import workshopThree from '../assets/edu3.jpg';
import workshopFour from '../assets/edu4.jpg';
import ProductUniverse from './ProductUniverse';

const individualServices = [
  'Mutual Funds', 'SIP / SWP / SIF / AIF / PMS', 'Term Insurance', 'Health Insurance', 'Personal Accident Insurance', 'Retirement Planning', 'Child Education Planning', 'Tax Planning', 'Wealth Creation Planning', 'Goal Based Investment', 'GIFT CITY', 'NRI Investments', 'Expert Portfolio Review', 'RBI & Capital Gain Bonds', 'Secondary Market Bonds', 'FDs', 'Financial Assessment', 'Financial Planning', 'Loans',
];

const corporateServices = [
  'Salary Management Workshop', 'SIP & Mutual Fund Awareness', 'Tax Planning Awareness', 'Retirement Planning', 'Goal Based Financial Planning', 'Debt Management', 'Insurance Awareness', 'Financial Freedom Session', 'Emergency Fund Planning', 'Financial Fraud Awareness', 'Financial Planning Workshop',
];

const audiences = {
  individual: {
    eyebrow: 'For individuals & families',
    title: 'Financial support for the life you are building.',
    description: 'Explore financial solutions and planning conversations designed around your goals, responsibilities, and long-term direction.',
    services: individualServices,
    slides: [
      { image: investment, alt: 'Investment planning illustration' },
      { image: retirementPhoto, alt: 'Family enjoying time together' },
      { image: education, alt: 'Education planning illustration' },
      { image: wealth, alt: 'Wealth planning illustration' },
    ],
    cta: 'Discuss your financial goals',
  },
  corporate: {
    eyebrow: 'For corporates & organisations',
    title: 'Financial awareness that supports stronger workplaces.',
    description: 'Create a more financially aware workforce through practical employee wellness programs, workshops, and educational sessions.',
    services: corporateServices,
    slides: [
      { image: workshopThree, alt: 'Large financial awareness session' },
      { image: workshopOne, alt: 'Community financial education workshop' },
      { image: workshopTwo, alt: 'Financial awareness program' },
      { image: workshopFour, alt: 'Financial literacy presentation' },
    ],
    cta: 'Plan a workplace session',
  },
};

function AudienceServicesPage({ audience, onNavigate }) {
  const content = audiences[audience];
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % content.slides.length), 5200);
    return () => window.clearInterval(timer);
  }, [content.slides.length, shouldReduceMotion]);

  const moveSlide = (direction) => setActiveSlide((current) => (current + direction + content.slides.length) % content.slides.length);
  const reveal = shouldReduceMotion ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.16 }, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } };
  const activeBanner = content.slides[activeSlide];

  return (
    <div className={`detail-page audience-page audience-page--${audience}`}>
      <section className="audience-banner" aria-label={`${audience} service banner carousel`}>
        <AnimatePresence initial={false} mode="wait">
          <Motion.figure className="audience-banner-slide" key={activeSlide} initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, x: -24 }} transition={{ duration: shouldReduceMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}>
            <img src={activeBanner.image} alt={activeBanner.alt} />
          </Motion.figure>
        </AnimatePresence>
        <button className="audience-banner-arrow audience-banner-arrow--previous" type="button" onClick={() => moveSlide(-1)} aria-label="Previous banner image"><FaChevronLeft /></button>
        <button className="audience-banner-arrow audience-banner-arrow--next" type="button" onClick={() => moveSlide(1)} aria-label="Next banner image"><FaChevronRight /></button>
        <div className="audience-banner-dots" aria-label="Banner image navigation">{content.slides.map((slide, index) => <button type="button" key={slide.alt} className={index === activeSlide ? 'is-active' : ''} onClick={() => setActiveSlide(index)} aria-label={`Show image ${index + 1}`} aria-current={index === activeSlide ? 'true' : undefined} />)}</div>
      </section>

      <Motion.section className="audience-intro content-wrap" {...reveal}>
        <p className="eyebrow"><span /> {content.eyebrow}</p>
        <div><h1>{content.title}</h1><p>{content.description}</p></div>
      </Motion.section>

      <Motion.section className="audience-services" {...reveal}>
        <div className="content-wrap">
          <div className="audience-services-heading"><div><p className="eyebrow"><span /> Our services</p><h2>{audience === 'individual' ? 'Explore your financial possibilities.' : 'Build better financial habits at work.'}</h2></div><p>{audience === 'individual' ? 'Each topic can be explored in the context of your goals and needs.' : 'Sessions can be shaped around the priorities of your employees and organisation.'}</p></div>
          <div className="audience-service-grid">
            {content.services.map((service, index) => <Motion.article key={service} whileHover={shouldReduceMotion ? undefined : { y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}><span>{String(index + 1).padStart(2, '0')}</span><h3>{service}</h3></Motion.article>)}
          </div>
        </div>
      </Motion.section>

      {audience === 'individual' && <ProductUniverse />}

      <Motion.section className="audience-closing" {...reveal}>
        <div className="content-wrap audience-closing-grid"><div><p className="eyebrow eyebrow--light"><span /> Let&apos;s connect</p><h2>{audience === 'individual' ? 'Bring your financial questions into one clear conversation.' : 'Bring financial awareness to your workplace.'}</h2></div><button className="button button--soft" type="button" onClick={() => onNavigate('contact')}>{content.cta} <FaArrowRight /></button></div>
      </Motion.section>
    </div>
  );
}

export default AudienceServicesPage;
