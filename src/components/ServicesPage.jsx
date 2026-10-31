import { motion as Motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import individualImage from '../assets/optimized/investImg.webp';
import corporateImage from '../assets/optimized/edu3.webp';

const audienceCards = [
  {
    id: 'individual',
    eyebrow: 'For individuals & families',
    title: 'A clearer path for your personal financial goals.',
    description: 'Explore investment, protection, planning, review, and lending conversations built around the life you are building.',
    image: individualImage,
    action: 'Explore individual services',
  },
  {
    id: 'corporate',
    eyebrow: 'For corporates & organisations',
    title: 'More financial awareness at every level of work.',
    description: 'Create practical financial wellness and literacy experiences for employees, teams, and communities.',
    image: corporateImage,
    action: 'Explore corporate services',
  },
];

function ServicesPage({ onNavigate }) {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="detail-page services-page">
      <Motion.section className="page-hero page-hero--services" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}>
        <div className="content-wrap page-hero-grid">
          <div><p className="eyebrow"><span /> Our services</p><h1>Financial awareness and solutions for every next step.</h1><p>Choose the path that reflects who you are planning for: yourself and your family, or the people in your organisation.</p></div>
          <aside className="page-hero-stamp page-hero-stamp--services"><span>Finvesly Capital Services LLP</span><strong>Educate First.<br />Empower Always.<br />Grow Together.</strong></aside>
        </div>
      </Motion.section>

      <Motion.section className="service-audience-chooser content-wrap" {...reveal}>
        <div className="service-audience-heading"><p className="eyebrow"><span /> Choose your focus</p><h2>Two meaningful ways to begin.</h2></div>
        <div className="service-audience-grid">
          {audienceCards.map((card) => (
            <Motion.article key={card.id} whileHover={shouldReduceMotion ? undefined : { y: -6 }} transition={{ type: 'spring', stiffness: 250, damping: 24 }}>
              <img src={card.image} alt="" loading="lazy" decoding="async" />
              <div><p>{card.eyebrow}</p><h3>{card.title}</h3><span>{card.description}</span><button type="button" onClick={() => onNavigate(card.id)}>{card.action} <FaArrowRight /></button></div>
            </Motion.article>
          ))}
        </div>
      </Motion.section>

      <Motion.section className="services-closing" {...reveal}>
        <div className="content-wrap services-closing-grid"><div><p className="eyebrow eyebrow--light"><span /> Our philosophy</p><h2>Educate First. Empower Always. Grow Together.</h2></div><div><p>Making financial knowledge accessible and empowering individuals, families and organisations towards a financially stronger India.</p><button className="button button--soft" type="button" onClick={() => onNavigate('contact')}>Start a conversation <FaArrowRight /></button></div></div>
      </Motion.section>
    </div>
  );
}

export default ServicesPage;
