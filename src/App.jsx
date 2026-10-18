import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import './App.css';
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
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

const services = [
  { title: 'Mutual fund investments', text: 'SIP, lump sum, STP and SWP solutions shaped around your goals.', image: investment, tag: 'Build wealth' },
  { title: 'Insurance solutions', text: 'Life, health, motor and general insurance for the protection that matters.', image: insurance, tag: 'Protect what matters' },
  { title: 'Retirement & income planning', text: 'Retirement corpus building and structured withdrawal strategies.', image: retirementPlan, tag: 'Plan ahead' },
  { title: 'Goal-based planning', text: "Wealth creation, children’s education, marriage and other financial goals.", image: education, tag: 'Invest in futures' },
  { title: 'Tax-efficient solutions', text: 'Tax-aware investment options aligned with financial objectives.', image: savings, tag: 'Save with purpose' },
  { title: 'Portfolio review & allocation', text: 'Portfolio analysis, diversification and risk assessment for a clearer view.', image: wealth, tag: 'Stay on course' },
];

const heroSlides = [
  {
    eyebrow: 'Financial awareness, made actionable',
    title: 'A financially stronger India begins with awareness.',
    description: 'Finvesly Capital Services LLP helps individuals, families, employees and communities make more informed financial decisions through practical education and responsible solutions.',
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
    eyebrow: 'Educate first. Empower always.',
    title: 'Small, steady decisions can shape a stronger tomorrow.',
    description: 'Explore financial solutions with goal-led conversations, responsible investing, and long-term thinking at their core.',
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
  ['Who is Finvesly for?', 'Finvesly supports individuals, families, employees, corporates, schools, colleges, NGOs and Bachat Gats through financial solutions and financial-awareness initiatives.'],
  ['What happens in the first conversation?', 'We begin with your goals, responsibilities, timeline and questions. That context helps us identify an appropriate next step.'],
  ['Do you only help with investments?', 'No. Services also include goal-based financial planning support, retirement planning assistance, insurance solutions, portfolio reviews and financial education programs.'],
  ['How do I get started?', 'Use the enquiry form, email us, or call us to coordinate a suitable first discussion.'],
];

const pageNames = new Set(['home', 'about', 'services', 'contact']);

const getPageFromHash = () => {
  const page = window.location.hash.replace(/^#\/?/, '');
  return pageNames.has(page) ? page : 'home';
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [activePage, setActivePage] = useState(getPageFromHash);
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
    const updatePage = () => {
      setActivePage(getPageFromHash());
      setMenuOpen(false);
      setSubmitted(false);
      window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    };
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const timer = window.setInterval(() => setActiveHero((current) => (current + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const navigateTo = (page) => {
    setMenuOpen(false);
    setSubmitted(false);
    if (activePage === page) {
      window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
      return;
    }
    window.location.hash = page;
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
        <span>Empowering financial awareness. Building a financially stronger India.</span>
        <a href="tel:+919130151120"><FaPhoneAlt /> +91 9130151120</a>
      </div>

        <Motion.header className="site-header" initial={shouldReduceMotion ? false : { opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <a className="brand" href="#home" aria-label="Finvesly Capital Services LLP home" onClick={(event) => { event.preventDefault(); navigateTo('home'); }}>
            <span className="brand-wordmark"><span>Finvesly</span><b>Capital</b></span>
            <small>Har Ghar Investor, Kal Hoga Secure!</small>
          </a>
        <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
          <button className={activePage === 'home' ? 'is-current' : ''} onClick={() => navigateTo('home')}>Home</button>
          <button className={activePage === 'about' ? 'is-current' : ''} onClick={() => navigateTo('about')}>About us</button>
          <button className={activePage === 'services' ? 'is-current' : ''} onClick={() => navigateTo('services')}>Services</button>
          <button className={activePage === 'contact' ? 'is-current' : ''} onClick={() => navigateTo('contact')}>Contact</button>
        </nav>
        <button className="header-cta" onClick={() => navigateTo('contact')}>Start a conversation <FaArrowRight /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </Motion.header>

      <main id="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <Motion.div key={activePage} initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: shouldReduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}>
          {activePage === 'home' && <>
        <section className="hero" id="home" aria-label="Finvesly introduction">
          <AnimatePresence initial={false} mode="wait">
            <Motion.div className="hero-slide" key={heroSlide.title} initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, x: -24 }} transition={carouselTransition}>
              <div className="content-wrap hero-grid">
                <Motion.div className="hero-copy" initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...carouselTransition, delay: shouldReduceMotion ? 0 : 0.08 }}>
                  <p className="eyebrow"><span /> {heroSlide.eyebrow}</p>
                  <h1>{heroSlide.title}</h1>
                  <p className="hero-description">{heroSlide.description}</p>
                  <div className="hero-actions">
                    <button className="button button--primary" onClick={() => navigateTo('contact')}>Start a conversation <FaArrowRight /></button>
                    <button className="text-link" onClick={() => navigateTo('services')}>Explore our services <span>↘</span></button>
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
            <div><p>We make financial knowledge simple, accessible, and actionable for every Indian - then connect that awareness to practical, responsible financial solutions.</p><button className="text-link" onClick={() => navigateTo('about')}>About Finvesly <span>↘</span></button></div>
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
              <div className="services-heading-side"><p>Explore the areas where a structured conversation can bring more direction to your next financial move.</p></div>
            </div>
            <div className="service-slider" aria-roledescription="carousel" aria-label="Finvesly services">
              <button className="service-slider-edge service-slider-edge--previous" type="button" onClick={() => moveService(-1)} aria-label="Previous services" disabled={currentServiceIndex === 0}><FaChevronLeft /></button>
              <Motion.div className="service-track" animate={{ x: `${-currentServiceIndex * (100 / services.length)}%` }} transition={shouldReduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 118, damping: 25, mass: 0.9 }}>
              {services.map((service, index) => (
                <div className="service-track-item" key={service.title}>
                <Motion.article className="service-card service-slider-card" whileHover={shouldReduceMotion ? undefined : { y: -6, boxShadow: '0 20px 34px rgba(36, 65, 47, 0.12)' }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
                  <div className="service-image"><img src={service.image} alt="" /><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="service-card-copy"><p>{service.tag}</p><h3>{service.title}</h3><span>{service.text}</span><button onClick={() => navigateTo('contact')} aria-label={`Ask about ${service.title}`}>Ask about this <FaArrowRight /></button></div>
                </Motion.article>
                </div>
              ))}
              </Motion.div>
              <button className="service-slider-edge service-slider-edge--next" type="button" onClick={() => moveService(1)} aria-label="Next services" disabled={currentServiceIndex === maxServiceIndex}><FaChevronRight /></button>
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
            <div className="founder-copy"><p className="eyebrow"><span /> A people-first perspective</p><h2>Advice should make your world feel more manageable.</h2><p>Finvesly Capital Services LLP exists to make financial conversations simpler, more honest and more useful for individuals, families and communities.</p><div className="founder-signoff"><strong>Finvesly Capital Services LLP</strong><span>Har Ghar Investor, Kal Hoga Secure!</span></div><button className="text-link" onClick={() => navigateTo('contact')}>Meet with us <span>↘</span></button></div>
          </div>
        </Motion.section>

        <Motion.section className="faq-section" {...revealSection}>
          <div className="content-wrap faq-grid"><div><p className="eyebrow"><span /> Questions, answered</p><h2>A clearer place to start.</h2><p>Still unsure which conversation is right for you? Reach out and we’ll help you find a useful next step.</p><a className="button button--outline" href="https://wa.me/919130151120" target="_blank" rel="noreferrer"><FaWhatsapp /> Talk on WhatsApp</a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={activeFaq === index ? 'faq-item faq-item--active' : 'faq-item'} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{question}</span><FaChevronDown /></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div></div>
        </Motion.section>

        <Motion.section className="contact-section" id="contact" {...revealSection}>
          <div className="content-wrap contact-grid"><div className="contact-copy"><p className="eyebrow eyebrow--light"><span /> Make your next move considered</p><h2>Your financial journey starts here.</h2><p>Whether you&apos;re looking for investment solutions, financial guidance, or financial awareness programs for your organisation, we&apos;re here to help.</p><a href="tel:+919130151120" className="contact-phone"><FaPhoneAlt /> +91 9130151120</a><span className="contact-location">205, Shri Padmalaxmi, Jijai Nagar, Kothrud, Pune - 411038, Maharashtra, India.</span></div><form className="contact-form" onSubmit={submitEnquiry}><label>Full name<input name="name" required placeholder="Your name" /></label><label>Phone number<input name="phone" required type="tel" placeholder="Your number" /></label><label>What would you like to discuss?<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>Investment solutions</option><option>Financial guidance</option><option>Financial awareness program</option><option>Something else</option></select></label><button className="button button--primary" type="submit">Request a callback <FaRegCalendarAlt /></button>{submitted && <p className="form-success"><FaCheck /> Thank you - we&apos;ll be in touch soon.</p>}</form></div>
        </Motion.section>
          </>}
          {activePage === 'about' && <AboutPage onNavigate={navigateTo} />}
          {activePage === 'services' && <ServicesPage onNavigate={navigateTo} />}
          {activePage === 'contact' && <ContactPage onSubmit={submitEnquiry} submitted={submitted} />}
          </Motion.div>
        </AnimatePresence>
      </main>

      <Motion.footer className="site-footer" {...revealSection}><div className="content-wrap footer-top"><div><div className="footer-wordmark"><span>Finvesly</span><b>Capital</b></div><p>Empowering financial awareness. Building a financially stronger India.</p></div><div><span>Explore</span><button onClick={() => navigateTo('home')}>Home</button><button onClick={() => navigateTo('about')}>About us</button><button onClick={() => navigateTo('services')}>Services</button><button onClick={() => navigateTo('contact')}>Contact us</button></div><div><span>Connect</span><a href="mailto:finvesly@gmail.com">finvesly@gmail.com</a><a href="tel:+919130151120">+91 9130151120</a><a href="http://www.finvesly.com/" target="_blank" rel="noreferrer">www.finvesly.com</a></div><div className="footer-registration"><span>Registration</span><p>AMFI Registered Mutual Fund Distributor</p><p>ARN: 266874</p></div></div><div className="content-wrap footer-bottom"><span>© {new Date().getFullYear()} Finvesly Capital Services LLP. All rights reserved.</span><span>Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully.</span></div></Motion.footer>

      <a className="whatsapp-float" href="https://wa.me/919130151120" target="_blank" rel="noreferrer" aria-label="Chat with Finvesly on WhatsApp"><FaWhatsapp /></a>
    </div>
  );
}

export default App;
