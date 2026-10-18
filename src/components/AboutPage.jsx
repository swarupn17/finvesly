import { motion as Motion, useReducedMotion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import founder from '../assets/swrup.png';
import workshopOne from '../assets/edu1.jpg';
import workshopThree from '../assets/edu3.jpg';
import workshopFour from '../assets/edu4.jpg';

const commitments = [
  {
    title: 'Financial awareness',
    text: 'We make financial knowledge simple, accessible, and actionable for every Indian.',
  },
  {
    title: 'Responsible solutions',
    text: 'Practical education and responsible financial solutions help people make informed decisions.',
  },
  {
    title: 'Stronger communities',
    text: 'Individuals, families, employees, and communities can all take a more confident next step.',
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
            <h1>Empowering financial awareness. Building a financially stronger India.</h1>
            <p>Finvesly Capital Services LLP is a financial services and financial literacy organisation committed to making financial knowledge simple, accessible, and actionable for every Indian.</p>
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
          <h2>Financial freedom begins with financial awareness.</h2>
          <p>We believe financial freedom begins with financial awareness. Our mission is to empower individuals, families, employees, and communities to make informed financial decisions through practical education and responsible financial solutions.</p>
          <p>We offer mutual fund distribution, goal-based financial planning support, insurance solutions, retirement planning assistance, and portfolio reviews, helping individuals work towards their long-term financial goals.</p>
        </div>
        <div className="about-founder-frame">
          <div className="about-founder-ring" />
          <img src={founder} alt="Finvesly Capital Services LLP representative" />
        </div>
      </Motion.section>

      <Motion.section className="about-commitments" {...reveal}>
        <div className="content-wrap">
          <p className="eyebrow"><span /> What guides us</p>
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
          <figure><img src={workshopThree} alt="Financial awareness session" /><figcaption>Financial awareness workshop</figcaption></figure>
          <figure><img src={workshopOne} alt="Community financial education discussion" /><figcaption>Community education initiative</figcaption></figure>
          <figure><img src={workshopFour} alt="Financial literacy program presentation" /><figcaption>Financial literacy program</figcaption></figure>
        </div>
      </Motion.section>

      <Motion.section className="about-vision" {...reveal}>
        <div className="content-wrap about-vision-grid">
          <div>
            <p className="eyebrow eyebrow--light"><span /> Viksit Bharat 2047</p>
            <h2>One individual, one family, and one community at a time.</h2>
          </div>
          <div>
            <p>Aligned with the vision of Viksit Bharat 2047, we aim to build a financially aware, confident, and empowered India - one individual, one family, and one community at a time.</p>
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
