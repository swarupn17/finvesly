import { motion as Motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import founder from '../assets/optimized/swrup.webp';
import workshopOne from '../assets/optimized/edu1.webp';
import workshopThree from '../assets/optimized/edu3.webp';
import workshopFour from '../assets/optimized/edu4.webp';

const commitments = [
  {
    title: 'For individuals & families',
    text: 'We facilitate access to financial solutions, including mutual fund investments, goal-based financial planning support, retirement planning, insurance solutions, and investment portfolio reviews.',
  },
  {
    title: 'For corporates & organisations',
    text: 'We offer employee financial wellness programs, financial literacy workshops, investment awareness sessions, tax awareness webinars, and retirement planning education to help employees develop better financial habits.',
  },
  {
    title: 'For communities & institutions',
    text: 'We aim to promote financial literacy through educational initiatives for schools, colleges, NGOs, Bachat Gats, and community organisations.',
  },
];

function AboutPage({ onNavigate }) {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="detail-page about-page">
      <Motion.section className="page-hero" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}>
        <div className="content-wrap page-hero-grid">
          <div>
            <p className="eyebrow"><span /> About Finvesly</p>
            <h1>Making financial awareness accessible to every Indian.</h1>
            <p>Finvesly Capital Services LLP is a financial services organisation committed to making financial knowledge simple, accessible, and actionable for individuals, families, corporates, and communities.</p>
          </div>
          <aside className="page-hero-stamp" aria-label="Finvesly philosophy">
            <span>Our philosophy</span>
            <strong>Educate First.<br />Empower Always.<br />Grow Together.</strong>
          </aside>
        </div>
      </Motion.section>

      <Motion.section className="about-story content-wrap" {...reveal}>
        <div className="about-story-copy">
          <p className="eyebrow"><span /> A clear purpose</p>
          <h2>Financial awareness is the foundation of financial well-being.</h2>
          <p>We believe that financial awareness is the foundation of financial well-being. Our mission is to empower people to make informed financial decisions through practical financial education, awareness workshops, and responsible financial solutions.</p>
          <p>We simplify financial concepts, encourage informed decision-making, and promote responsible financial practices through education and appropriate financial solutions.</p>
        </div>
        <div className="about-founder-frame">
          <div className="about-founder-ring" />
          <img src={founder} alt="Finvesly Capital Services LLP representative" width="1000" height="1500" loading="lazy" decoding="async" />
        </div>
      </Motion.section>

      <Motion.section className="about-commitments" {...reveal}>
        <div className="content-wrap">
          <p className="eyebrow"><span /> What we do</p>
          <div className="commitment-grid">
            {commitments.map((commitment, index) => (
              <article key={commitment.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{commitment.title}</h3>
                <p>{commitment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Motion.section>

      <Motion.section className="about-learning content-wrap" {...reveal}>
        <div className="about-learning-heading">
          <div>
            <p className="eyebrow"><span /> Learning in the community</p>
            <h2>Knowledge becomes more powerful when it is shared.</h2>
          </div>
          <p>Beyond financial services, we conduct financial awareness workshops, corporate webinars, employee financial wellness programs, and community education initiatives for schools, corporates, organisations, and Bachat Gats.</p>
        </div>
        <div className="about-learning-gallery">
          <figure><img src={workshopThree} alt="Financial awareness session" loading="lazy" decoding="async" /><figcaption>Financial awareness workshop</figcaption></figure>
          <figure><img src={workshopOne} alt="Community financial education discussion" loading="lazy" decoding="async" /><figcaption>Community education initiative</figcaption></figure>
          <figure><img src={workshopFour} alt="Financial literacy program presentation" loading="lazy" decoding="async" /><figcaption>Financial literacy program</figcaption></figure>
        </div>
      </Motion.section>

      <Motion.section className="about-vision" {...reveal}>
        <div className="content-wrap about-vision-grid">
          <div>
            <p className="eyebrow eyebrow--light"><span /> Viksit Bharat 2047</p>
            <h2>A financially aware, confident, and empowered India.</h2>
          </div>
          <div>
            <p><strong>Our Vision</strong><br />To contribute towards a financially aware, confident, and empowered India by making financial education accessible to more people.</p>
            <p><strong>Our Mission</strong><br />To simplify financial concepts, encourage informed decision-making, and promote responsible financial practices through education and appropriate financial solutions.</p>
            <p>Aligned with the vision of Viksit Bharat 2047, we aspire to create a lasting positive impact - one individual, one family, and one community at a time.</p>
            <button className="button button--soft" type="button" onClick={() => onNavigate('contact')}>Start a conversation <FaArrowRight /></button>
          </div>
        </div>
      </Motion.section>

      <Motion.section className="trust-line content-wrap" {...reveal}>
        <FaCheck aria-hidden="true" />
        <p><strong>Finvesly Capital Services LLP</strong><span>AMFI Registered Mutual Fund Distributor | ARN: 266874</span></p>
      </Motion.section>
    </div>
  );
}

export default AboutPage;
