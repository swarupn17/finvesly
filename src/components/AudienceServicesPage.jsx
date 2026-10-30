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
  { title: 'Mutual Funds', description: 'Explore diversified, professionally managed investment options aligned with your horizon and risk comfort.' },
  { title: 'SIP / SWP / SIF / AIF / PMS', description: 'Understand systematic investing or withdrawals and specialist routes available to eligible investors.' },
  { title: 'Term Insurance', description: 'Discuss pure life-cover options designed to protect the people who depend on you.' },
  { title: 'Health Insurance', description: 'Review health-cover choices that can help prepare for eligible medical expenses.' },
  { title: 'Personal Accident Insurance', description: 'Consider cover for accidental injury, disability and related contingencies, subject to policy terms.' },
  { title: 'Retirement Planning', description: 'Map the income, savings and investment choices that can support a more independent retirement.' },
  { title: 'Child Education Planning', description: 'Create a disciplined route towards future education expenses and important family milestones.' },
  { title: 'Tax Planning', description: 'Explore tax-aware investment and protection options in line with applicable rules.' },
  { title: 'Wealth Creation Planning', description: 'Build a long-term approach across goals, time horizons and appropriate asset allocation.' },
  { title: 'Goal Based Investment', description: 'Link your money decisions to a clear purpose, timeline and regular progress review.' },
  { title: 'GIFT CITY', description: 'Explore eligible IFSC-based international investment pathways and their applicable conditions.' },
  { title: 'NRI Investments', description: 'Understand investment routes and practical considerations for eligible non-resident investors.' },
  { title: 'Expert Portfolio Review', description: 'Bring existing holdings into one view to discuss diversification, risk and goal alignment.' },
  { title: 'RBI & Capital Gain Bonds', description: 'Review government-backed and tax-linked bond avenues where eligible and appropriate.' },
  { title: 'Secondary Market Bonds', description: 'Explore listed debt opportunities with attention to credit, price and liquidity considerations.' },
  { title: 'FDs', description: 'Compare fixed-deposit options for defined tenures, liquidity needs and stated returns.' },
  { title: 'Financial Assessment', description: 'Create a clear snapshot of cash flow, protection, assets, liabilities and priorities.' },
  { title: 'Financial Planning', description: 'Bring goals, responsibilities and time horizons together in one structured financial roadmap.' },
  { title: 'Loans', description: 'Explore relevant borrowing routes with a focus on affordability, repayment and purpose.' },
];

const corporateServices = [
  { title: 'Salary Management Workshop', description: 'Help employees build practical habits around income, budgeting, saving and responsible monthly decisions.' },
  { title: 'SIP & Mutual Fund Awareness', description: 'Introduce long-term investing concepts, SIP discipline and mutual fund awareness in clear everyday language.' },
  { title: 'Tax Planning Awareness', description: 'Explain the role of tax-aware financial decisions and commonly discussed saving avenues under applicable rules.' },
  { title: 'Retirement Planning', description: 'Start meaningful conversations about future income needs, retirement readiness and long-term planning habits.' },
  { title: 'Goal Based Financial Planning', description: 'Show employees how to connect financial actions with life goals, priorities and realistic timelines.' },
  { title: 'Debt Management', description: 'Encourage healthier borrowing habits through practical discussions on repayments, affordability and debt awareness.' },
  { title: 'Insurance Awareness', description: 'Build understanding of life, health and personal-risk protection so employees can assess their needs thoughtfully.' },
  { title: 'Financial Freedom Session', description: 'Create an inspiring, practical introduction to financial wellbeing, discipline and informed decision-making.' },
  { title: 'Emergency Fund Planning', description: 'Help employees understand how a dedicated reserve can support them through unexpected life events.' },
  { title: 'Financial Fraud Awareness', description: 'Share practical awareness around common financial scams, cyber safety and safer everyday financial behaviour.' },
  { title: 'Financial Planning Workshop', description: 'Bring core financial concepts together in an engaging session shaped around employee wellbeing.' },
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
            {content.services.map((service, index) => {
              const serviceTitle = typeof service === 'string' ? service : service.title;
              const serviceDescription = typeof service === 'string' ? undefined : service.description;

              return <Motion.article className={serviceDescription ? 'audience-service-card audience-service-card--detailed' : 'audience-service-card'} key={serviceTitle} whileHover={shouldReduceMotion ? undefined : { y: -5 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}><span>{String(index + 1).padStart(2, '0')}</span><h3>{serviceTitle}</h3>{serviceDescription && <p>{serviceDescription}</p>}</Motion.article>;
            })}
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
