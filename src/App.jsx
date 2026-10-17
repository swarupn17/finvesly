import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import './App.css';
import darkLogo from './assets/dark.png';
import lightLogo from './assets/light.png';
import founder from './assets/swrup.png';
import investment from './assets/investImg.jpg';
import insurance from './assets/insurance.png';
import retirementPhoto from './assets/retirement.jpg';
import retirementPlan from './assets/retire.png';
import education from './assets/education.jpg';
import savings from './assets/saving.jpg';
import wealth from './assets/wealth.jpg';
import marriage from './assets/marriage.jpg';
import impactIcon from './assets/icon.png';
import workshopOne from './assets/edu1.jpg';
import workshopThree from './assets/edu3.jpg';
import workshopFour from './assets/edu4.jpg';

const services = [
  { title: 'Investment planning', text: 'Build a long-term strategy around your goals, time horizon and comfort with risk.', image: investment, tag: 'Build wealth' },
  { title: 'Protection planning', text: 'Put a thoughtful protection layer around the people and goals that matter most.', image: insurance, tag: 'Protect what matters' },
  { title: 'Retirement planning', text: 'Turn your vision for independence into a clear, regularly reviewed financial roadmap.', image: retirementPlan, tag: 'Plan ahead' },
  { title: 'Education planning', text: 'Create room for a child’s future ambitions with disciplined, goal-led investing.', image: education, tag: 'Invest in futures' },
  { title: 'Tax-smart saving', text: 'Explore appropriate saving routes with tax considerations built into the conversation.', image: savings, tag: 'Save with purpose' },
  { title: 'Wealth reviews', text: 'Bring your existing investments together for a more connected view of your money.', image: wealth, tag: 'Stay on course' },
];

const heroSlides = [
  {
    eyebrow: 'Your financial life, thoughtfully planned',
    title: 'More clarity for the life you’re building.',
    description: 'Finvesly helps you make confident decisions around saving, investing, protection and the milestones that matter to your family.',
    image: founder,
    alt: 'Founder of Finvesly Capital',
    supportingImage: investment,
    imageStyle: 'founder',
    step: '01',
    cardTitle: 'Start with your story',
    cardText: 'Priorities before products',
    progressTitle: 'Designed for progress',
    progressText: 'Built around real life',
  },
  {
    eyebrow: 'A considered future for every family',
    title: 'Make space for the people and moments you value.',
    description: 'Bring your family goals, retirement plans and everyday financial decisions into one calm, practical direction.',
    image: retirementPhoto,
    alt: 'A family enjoying time together',
    supportingImage: marriage,
    imageStyle: 'photo',
    step: '02',
    cardTitle: 'Plan around real life',
    cardText: 'Goals that feel like yours',
    progressTitle: 'Prepared for change',
    progressText: 'Reviewed as life moves',
  },
  {
    eyebrow: 'Invest with patient purpose',
    title: 'Small, steady decisions can shape a stronger tomorrow.',
    description: 'Create an investment rhythm that respects your comfort with risk, your timeline and the future you want to build.',
    image: wealth,
    alt: 'A saving and investment growth illustration',
    supportingImage: education,
    imageStyle: 'photo',
    step: '03',
    cardTitle: 'Keep the long view',
    cardText: 'Progress over pressure',
    progressTitle: 'A plan with purpose',
    progressText: 'Clarity at every step',
  },
];

const faqs = [
  ['Who is Finvesly for?', 'Finvesly is built for individuals and families who want a more intentional relationship with their money, whether they are starting a SIP or reviewing an established portfolio.'],
  ['What happens in the first conversation?', 'We start with the life you are planning for: your priorities, responsibilities, timeline and questions. That context helps shape the next steps.'],
  ['Do you only help with investments?', 'No. The approach considers the wider picture: goals, savings habits, protection needs, investments and regular reviews.'],
  ['How do I get started?', 'Use the enquiry form, call us, or send a WhatsApp message. We will coordinate a suitable time for a first discussion.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [activeHero, setActiveHero] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [servicesPerView, setServicesPerView] = useState(() => (window.innerWidth <= 680 ? 1 : window.innerWidth <= 900 ? 2 : 3));
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);
      setServicesPerView(window.innerWidth <= 680 ? 1 : window.innerWidth <= 900 ? 2 : 3);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const timer = window.setInterval(() => setActiveHero((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submitEnquiry = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  const heroSlide = heroSlides[activeHero];
  const maxServiceIndex = services.length - servicesPerView;
  const currentServiceIndex = Math.min(activeService, maxServiceIndex);

  const moveHero = (direction) => {
    setActiveHero((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const moveService = (direction) => {
    setActiveService(Math.max(0, Math.min(services.length - servicesPerView, currentServiceIndex + direction)));
  };

  const revealSection = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  };
  const carouselTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <span>Personal finance, made more considered.</span>
        <a href="tel:+919359049092"><FaPhoneAlt /> +91 93590 49092</a>
      </div>

        <Motion.header className="site-header" initial={shouldReduceMotion ? false : { opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <a className="brand" href="#home" aria-label="Finvesly Capital home">
            <span className="brand-wordmark"><span>Finvesly</span><b>Capital</b></span>
            <small>Har Ghar Investor, Kal Hoga Secure!</small>
          </a>
        <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
          <button onClick={() => scrollTo('#about')}>Why Finvesly</button>
          <button onClick={() => scrollTo('#services')}>Services</button>
          <button onClick={() => scrollTo('#impact')}>Our impact</button>
          <button onClick={() => scrollTo('#process')}>Our process</button>
          <button onClick={() => scrollTo('#contact')}>Contact</button>
        </nav>
        <button className="header-cta" onClick={() => scrollTo('#contact')}>Start a conversation <FaArrowRight /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </Motion.header>

      <main>
        <section className="hero" id="home" aria-label="Finvesly introduction">
          <AnimatePresence initial={false} mode="wait">
            <Motion.div className="hero-slide" key={heroSlide.title} initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, x: -24 }} transition={carouselTransition}>
              <div className="content-wrap hero-grid">
                <Motion.div className="hero-copy" initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...carouselTransition, delay: shouldReduceMotion ? 0 : 0.08 }}>
                  <p className="eyebrow"><span /> {heroSlide.eyebrow}</p>
                  <h1>{heroSlide.title}</h1>
                  <p className="hero-description">{heroSlide.description}</p>
                  <div className="hero-actions">
                    <button className="button button--primary" onClick={() => scrollTo('#contact')}>Start a conversation <FaArrowRight /></button>
                    <button className="text-link" onClick={() => scrollTo('#services')}>Explore our services <span>↘</span></button>
                  </div>
                  <div className="hero-note"><FaShieldAlt /> Goal-led guidance. Real conversations. Long-term thinking.</div>
                </Motion.div>
                <Motion.div className="hero-showcase" aria-label="Financial planning illustration" initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...carouselTransition, delay: shouldReduceMotion ? 0 : 0.16 }}>
                  <div className={`hero-image-main hero-image-main--${heroSlide.imageStyle}`}><Motion.img src={heroSlide.image} alt={heroSlide.alt} initial={shouldReduceMotion ? false : { scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }} /></div>
                  <Motion.div className="hero-image-support" initial={shouldReduceMotion ? false : { opacity: 0, rotate: 5, y: 18 }} animate={{ opacity: 1, rotate: 0, y: 0 }} transition={{ ...carouselTransition, delay: shouldReduceMotion ? 0 : 0.3 }}><img src={heroSlide.supportingImage} alt="" /></Motion.div>
                  <div className="hero-caption"><span>{heroSlide.step}</span><div><strong>{heroSlide.cardTitle}</strong><small>{heroSlide.cardText}</small></div></div>
                </Motion.div>
              </div>
            </Motion.div>
          </AnimatePresence>
          <button className="hero-carousel-arrow hero-carousel-arrow--previous" type="button" onClick={() => moveHero(-1)} aria-label="Previous hero slide"><FaChevronLeft /></button>
          <button className="hero-carousel-arrow hero-carousel-arrow--next" type="button" onClick={() => moveHero(1)} aria-label="Next hero slide"><FaChevronRight /></button>
          <div className="hero-carousel-pagination" aria-label="Hero slide navigation">{heroSlides.map((slide, index) => <button type="button" className={index === activeHero ? 'is-active' : ''} onClick={() => setActiveHero(index)} aria-label={`Show message ${index + 1}`} aria-current={index === activeHero ? 'true' : undefined} key={slide.title} />)}</div>
        </section>

        <Motion.section className="intro content-wrap" id="about" {...revealSection}>
          <div className="intro-label"><span>About Finvesly</span><i /></div>
          <div className="intro-copy">
            <h2>Money is personal. Your plan should be too.</h2>
            <div><p>There is no one-size-fits-all route to financial wellbeing. We begin with the things you care about, then bring structure to the decisions that can help you move toward them.</p><button className="text-link" onClick={() => scrollTo('#process')}>See how we work <span>↘</span></button></div>
          </div>
        </Motion.section>

        <Motion.section className="impact-section" id="impact" {...revealSection}>
          <div className="content-wrap">
            <div className="section-heading impact-heading">
              <div><p className="eyebrow"><span /> Financial literacy in action</p><h2>Trust is earned long before a decision is made.</h2></div>
              <p>We believe every meaningful financial journey begins with understanding. These are moments from financial-awareness conversations and learning sessions in the community.</p>
            </div>
            <div className="impact-layout">
              <div className="workshop-gallery">
                <figure className="workshop-photo workshop-photo--lead"><img src={workshopThree} alt="A large financial-awareness session" /><figcaption>Investor education session</figcaption></figure>
                <figure className="workshop-photo"><img src={workshopOne} alt="A financial-awareness discussion with a community group" /><figcaption>Community conversation</figcaption></figure>
                <figure className="workshop-photo"><img src={workshopFour} alt="An audience attending a financial-planning presentation" /><figcaption>Learning together</figcaption></figure>
              </div>
              <aside className="impact-aside">
                <img className="brand-stamp" src={lightLogo} alt="Finvesly Capital" />
                <p className="quote-label">A principle worth keeping</p>
                <blockquote>“Diligence is the mother of good luck.”<cite>Benjamin Franklin · <em>Poor Richard’s Almanack</em></cite></blockquote>
                <p>From large awareness sessions to a one-to-one conversation, the objective stays the same: make money matters easier to understand and act on.</p>
              </aside>
            </div>
          </div>
        </Motion.section>

        <Motion.section className="focus-section" id="services" {...revealSection}>
          <div className="content-wrap">
            <div className="section-heading section-heading--services">
              <div><p className="eyebrow"><span /> What we can plan for</p><h2>Every goal deserves a good beginning.</h2></div>
              <div className="services-heading-side"><p>Explore the areas where a structured conversation can bring more direction to your next financial move.</p><div className="service-slider-controls"><button type="button" onClick={() => moveService(-1)} aria-label="Previous services" disabled={currentServiceIndex === 0}><FaChevronLeft /></button><button type="button" onClick={() => moveService(1)} aria-label="Next services" disabled={currentServiceIndex === maxServiceIndex}><FaChevronRight /></button></div></div>
            </div>
            <div className="service-slider" aria-roledescription="carousel" aria-label="Finvesly services">
              <Motion.div className="service-track" animate={{ x: `${-currentServiceIndex * (100 / services.length)}%` }} transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 118, damping: 25, mass: 0.9 }}>
              {services.map((service, index) => (
                <div className="service-track-item" key={service.title}>
                <Motion.article className="service-card service-slider-card" whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: '0 20px 34px rgba(36, 65, 47, 0.12)' }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                  <div className="service-image"><img src={service.image} alt="" /><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="service-card-copy"><p>{service.tag}</p><h3>{service.title}</h3><span>{service.text}</span><button onClick={() => scrollTo('#contact')} aria-label={`Ask about ${service.title}`}>Ask about this <FaArrowRight /></button></div>
                </Motion.article>
                </div>
              ))}
              </Motion.div>
              <div className="service-slider-footer"><div className="slider-dots" aria-label="Select a service">{Array.from({ length: maxServiceIndex + 1 }, (_, index) => <button type="button" className={index === currentServiceIndex ? 'is-active' : ''} onClick={() => setActiveService(index)} aria-label={`Show services ${index + 1} to ${Math.min(index + servicesPerView, services.length)}`} aria-current={index === currentServiceIndex ? 'true' : undefined} key={index} />)}</div><span>{String(currentServiceIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}</span></div>
            </div>
          </div>
        </Motion.section>

        <Motion.section className="quote-section" {...revealSection}>
          <div className="content-wrap quote-grid">
            <p className="quote-mark">“</p>
            <div><p className="eyebrow eyebrow--light"><span /> A timeless reminder</p><h2>Beware of little expenses; a small leak will sink a great ship.</h2><p className="quote-attribution">Benjamin Franklin · <em>Poor Richard’s Almanack</em></p></div>
            <div className="quote-side"><span>Plan with care</span><span>Review regularly</span><span>Build patiently</span></div>
          </div>
        </Motion.section>

        <Motion.section className="life-goals-section" {...revealSection}>
          <div className="content-wrap">
            <div className="life-goals-heading"><div><p className="eyebrow"><span /> The life behind the numbers</p><h2>Make room for the moments you want to protect.</h2></div><p>A sound plan is not only about markets. It makes space for independence, family milestones and the everyday habits that support a more secure tomorrow.</p></div>
            <div className="life-goals-grid">
              <article className="life-goal-card life-goal-card--wide"><img src={retirementPhoto} alt="A family enjoying time together in retirement" /><div><span>Retirement readiness</span><h3>Plan for the years that are yours.</h3></div></article>
              <article className="life-goal-card"><img src={marriage} alt="A couple exchanging wedding rings" /><div><span>Family milestones</span><h3>Prepare for life’s big celebrations.</h3></div></article>
              <article className="life-goal-card life-goal-card--icon"><img src={impactIcon} alt="A hand supporting financial growth" /><div><span>Everyday progress</span><h3>Small steps can build a stronger future.</h3></div></article>
            </div>
          </div>
        </Motion.section>

        <Motion.section className="process-section" id="process" {...revealSection}>
          <div className="content-wrap">
            <div className="section-heading section-heading--process"><div><p className="eyebrow"><span /> Simple, clear, collaborative</p><h2>How we turn an intention into a plan.</h2></div><p>We keep the process grounded, understandable and connected to the way your life changes over time.</p></div>
            <ol className="process-list">
              <li><span>01</span><div><h3>Listen &amp; understand</h3><p>We talk through your priorities, concerns and the goals that are most meaningful to you.</p></div></li>
              <li><span>02</span><div><h3>Map the opportunity</h3><p>We organise the picture, identify focus areas and discuss a route forward.</p></div></li>
              <li><span>03</span><div><h3>Put the plan in motion</h3><p>With the next steps clear, you can begin with purpose and a practical rhythm.</p></div></li>
              <li><span>04</span><div><h3>Stay in step</h3><p>Life moves. We revisit and refine the plan so it can remain relevant to you.</p></div></li>
            </ol>
          </div>
        </Motion.section>

        <Motion.section className="founder-section" {...revealSection}>
          <div className="content-wrap founder-grid">
            <div className="founder-picture"><div className="founder-pattern" /><img src={founder} alt="Founder of Finvesly Capital" /></div>
            <div className="founder-copy"><p className="eyebrow"><span /> A people-first perspective</p><h2>Advice should make your world feel more manageable.</h2><p>Finvesly Capital exists to make financial conversations feel simpler, more honest and more useful for everyday families.</p><div className="founder-signoff"><strong>Finvesly Capital</strong><span>Har Ghar Investor, Kal Hoga Secure!</span></div><button className="text-link" onClick={() => scrollTo('#contact')}>Meet with us <span>↘</span></button></div>
          </div>
        </Motion.section>

        <Motion.section className="stats-section" {...revealSection}>
          <div className="content-wrap"><div className="stats-heading"><p className="eyebrow eyebrow--light"><span /> Finvesly at a glance</p><h2>Progress is built one family at a time.</h2></div><div className="stats-grid"><div><strong>₹1.62 Cr.</strong><span>Assets under management*</span></div><div><strong>150+</strong><span>Investors supported*</span></div><div><strong>5+ yrs.</strong><span>Finance-sector experience*</span></div><div><strong>10,000+</strong><span>People financially educated*</span></div></div><small>*Figures carried forward from the previous Finvesly site. Please verify before publishing.</small></div>
        </Motion.section>

        <Motion.section className="faq-section" {...revealSection}>
          <div className="content-wrap faq-grid"><div><p className="eyebrow"><span /> Questions, answered</p><h2>A clearer place to start.</h2><p>Still unsure which conversation is right for you? Reach out and we’ll help you find a useful next step.</p><a className="button button--outline" href="https://wa.me/919359049092" target="_blank" rel="noreferrer"><FaWhatsapp /> Talk on WhatsApp</a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={activeFaq === index ? 'faq-item faq-item--active' : 'faq-item'} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{question}</span><FaChevronDown /></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div></div>
        </Motion.section>

        <Motion.section className="contact-section" id="contact" {...revealSection}>
          <div className="content-wrap contact-grid"><div className="contact-copy"><p className="eyebrow eyebrow--light"><span /> Make your next move considered</p><h2>Ready to begin with a conversation?</h2><p>Tell us a little about what you’re planning for. We’ll take it from there.</p><a href="tel:+919359049092" className="contact-phone"><FaPhoneAlt /> +91 93590 49092</a><span className="contact-location">Pune, Maharashtra, India</span></div><form className="contact-form" onSubmit={submitEnquiry}><label>Full name<input name="name" required placeholder="Your name" /></label><label>Phone number<input name="phone" required type="tel" placeholder="Your number" /></label><label>What would you like to discuss?<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>Investment planning</option><option>Protection planning</option><option>Retirement planning</option><option>Education planning</option><option>Something else</option></select></label><button className="button button--primary" type="submit">Request a callback <FaRegCalendarAlt /></button>{submitted && <p className="form-success"><FaCheck /> Thank you — we’ll be in touch soon.</p>}</form></div>
        </Motion.section>
      </main>

      <Motion.footer className="site-footer" {...revealSection}><div className="content-wrap footer-top"><div><img src={darkLogo} alt="Finvesly Capital" /><p>Thoughtful financial planning for the life you’re building.</p></div><div><span>Explore</span><button onClick={() => scrollTo('#about')}>About Finvesly</button><button onClick={() => scrollTo('#services')}>Services</button><button onClick={() => scrollTo('#impact')}>Our impact</button><button onClick={() => scrollTo('#process')}>Our process</button></div><div><span>Connect</span><a href="tel:+919359049092">+91 93590 49092</a><a href="https://wa.me/919359049092" target="_blank" rel="noreferrer">WhatsApp</a></div><div className="socials"><span>Follow</span><div><a href="#home" aria-label="Facebook"><FaFacebookF /></a><a href="#home" aria-label="Instagram"><FaInstagram /></a><a href="#home" aria-label="LinkedIn"><FaLinkedinIn /></a></div></div></div><div className="content-wrap footer-bottom"><span>© {new Date().getFullYear()} Finvesly Capital. All rights reserved.</span><span>Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully.</span></div></Motion.footer>

      <a className="whatsapp-float" href="https://wa.me/919359049092" target="_blank" rel="noreferrer" aria-label="Chat with Finvesly on WhatsApp"><FaWhatsapp /></a>
    </div>
  );
}

export default App;
