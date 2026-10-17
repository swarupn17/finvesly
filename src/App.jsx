import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaBars,
  FaChartLine,
  FaCheck,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegCalendarAlt,
  FaShieldAlt,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa';
import './App.css';
import logo from './assets/light.png';
import founder from './assets/swrup.png';
import investment from './assets/investImg.jpg';
import insurance from './assets/insurance.png';
import retirement from './assets/retirement.jpg';
import education from './assets/education.jpg';
import savings from './assets/saving.jpg';
import wealth from './assets/wealth.jpg';

const services = [
  { title: 'Investment planning', text: 'Build a long-term strategy around your goals, time horizon and comfort with risk.', image: investment, tag: 'Build wealth' },
  { title: 'Protection planning', text: 'Put a thoughtful protection layer around the people and goals that matter most.', image: insurance, tag: 'Protect what matters' },
  { title: 'Retirement planning', text: 'Turn your vision for independence into a clear, regularly reviewed financial roadmap.', image: retirement, tag: 'Plan ahead' },
  { title: 'Education planning', text: 'Create room for a child’s future ambitions with disciplined, goal-led investing.', image: education, tag: 'Invest in futures' },
  { title: 'Tax-smart saving', text: 'Explore appropriate saving routes with tax considerations built into the conversation.', image: savings, tag: 'Save with purpose' },
  { title: 'Wealth reviews', text: 'Bring your existing investments together for a more connected view of your money.', image: wealth, tag: 'Stay on course' },
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

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const submitEnquiry = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <div className="top-strip">
        <span>Personal finance, made more considered.</span>
        <a href="tel:+919359049092"><FaPhoneAlt /> +91 93590 49092</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Finvesly Capital home">
          <img src={logo} alt="Finvesly Capital" />
        </a>
        <nav className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Main navigation">
          <button onClick={() => scrollTo('#about')}>Why Finvesly</button>
          <button onClick={() => scrollTo('#services')}>Services</button>
          <button onClick={() => scrollTo('#process')}>Our process</button>
          <button onClick={() => scrollTo('#contact')}>Contact</button>
        </nav>
        <button className="header-cta" onClick={() => scrollTo('#contact')}>Start a conversation <FaArrowRight /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="content-wrap hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow eyebrow--light"><span /> Your financial life, thoughtfully planned</p>
              <h1>More clarity for the life you’re building.</h1>
              <p className="hero-description">Finvesly helps you make confident decisions around saving, investing, protection and the milestones that matter to your family.</p>
              <div className="hero-actions">
                <button className="button button--primary" onClick={() => scrollTo('#contact')}>Plan your next step <FaArrowRight /></button>
                <button className="text-link text-link--light" onClick={() => scrollTo('#services')}>Explore our services <span>↘</span></button>
              </div>
              <div className="hero-note"><FaShieldAlt /> Goal-led guidance. Real conversations. Long-term thinking.</div>
            </div>
            <div className="hero-visual reveal reveal--late" aria-label="Financial planning consultation visual">
              <div className="hero-image-frame">
                <div className="hero-image-glow" />
                <img src={founder} alt="Finvesly Capital founder" />
              </div>
              <div className="hero-card hero-card--top"><span>01</span><strong>Start with your story</strong><small>Priorities before products</small></div>
              <div className="hero-card hero-card--bottom"><FaChartLine /><div><strong>Designed for progress</strong><small>Built around real life</small></div></div>
            </div>
          </div>
          <div className="hero-footer content-wrap"><span>Financial planning for Indian families</span><span className="hero-scroll">Scroll to discover <i /></span></div>
        </section>

        <section className="intro content-wrap" id="about">
          <div className="intro-label"><span>About Finvesly</span><i /></div>
          <div className="intro-copy">
            <h2>Money is personal. Your plan should be too.</h2>
            <div><p>There is no one-size-fits-all route to financial wellbeing. We begin with the things you care about, then bring structure to the decisions that can help you move toward them.</p><button className="text-link" onClick={() => scrollTo('#process')}>See how we work <span>↘</span></button></div>
          </div>
        </section>

        <section className="focus-section" id="services">
          <div className="content-wrap">
            <div className="section-heading">
              <div><p className="eyebrow"><span /> What we can plan for</p><h2>Every goal deserves a good beginning.</h2></div>
              <p>Explore the areas where a structured conversation can bring more direction to your next financial move.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <div className="service-image"><img src={service.image} alt="" /><span>{String(index + 1).padStart(2, '0')}</span></div>
                  <div className="service-card-copy"><p>{service.tag}</p><h3>{service.title}</h3><span>{service.text}</span><button onClick={() => scrollTo('#contact')} aria-label={`Ask about ${service.title}`}>Ask about this <FaArrowRight /></button></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="content-wrap quote-grid">
            <p className="quote-mark">“</p>
            <div><p className="eyebrow eyebrow--light"><span /> The Finvesly approach</p><h2>Good financial decisions are rarely about finding a shortcut. They’re about building habits that last.</h2></div>
            <div className="quote-side"><span>Clear direction</span><span>Regular review</span><span>Patient progress</span></div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="content-wrap">
            <div className="section-heading section-heading--process"><div><p className="eyebrow"><span /> Simple, clear, collaborative</p><h2>How we turn an intention into a plan.</h2></div><p>We keep the process grounded, understandable and connected to the way your life changes over time.</p></div>
            <ol className="process-list">
              <li><span>01</span><div><h3>Listen &amp; understand</h3><p>We talk through your priorities, concerns and the goals that are most meaningful to you.</p></div></li>
              <li><span>02</span><div><h3>Map the opportunity</h3><p>We organise the picture, identify focus areas and discuss a route forward.</p></div></li>
              <li><span>03</span><div><h3>Put the plan in motion</h3><p>With the next steps clear, you can begin with purpose and a practical rhythm.</p></div></li>
              <li><span>04</span><div><h3>Stay in step</h3><p>Life moves. We revisit and refine the plan so it can remain relevant to you.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="founder-section">
          <div className="content-wrap founder-grid">
            <div className="founder-picture"><div className="founder-pattern" /><img src={founder} alt="Founder of Finvesly Capital" /></div>
            <div className="founder-copy"><p className="eyebrow"><span /> A people-first perspective</p><h2>Advice should make your world feel more manageable.</h2><p>Finvesly Capital exists to make financial conversations feel simpler, more honest and more useful for everyday families.</p><div className="founder-signoff"><strong>Finvesly Capital</strong><span>Har Ghar Investor, Kal Hoga Secure!</span></div><button className="text-link" onClick={() => scrollTo('#contact')}>Meet with us <span>↘</span></button></div>
          </div>
        </section>

        <section className="stats-section">
          <div className="content-wrap"><div className="stats-heading"><p className="eyebrow eyebrow--light"><span /> Finvesly at a glance</p><h2>Progress is built one family at a time.</h2></div><div className="stats-grid"><div><strong>₹1.62 Cr.</strong><span>Assets under management*</span></div><div><strong>150+</strong><span>Investors supported*</span></div><div><strong>5+ yrs.</strong><span>Finance-sector experience*</span></div><div><strong>10,000+</strong><span>People financially educated*</span></div></div><small>*Figures carried forward from the previous Finvesly site. Please verify before publishing.</small></div>
        </section>

        <section className="faq-section">
          <div className="content-wrap faq-grid"><div><p className="eyebrow"><span /> Questions, answered</p><h2>A clearer place to start.</h2><p>Still unsure which conversation is right for you? Reach out and we’ll help you find a useful next step.</p><a className="button button--outline" href="https://wa.me/919359049092" target="_blank" rel="noreferrer"><FaWhatsapp /> Talk on WhatsApp</a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={activeFaq === index ? 'faq-item faq-item--active' : 'faq-item'} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{question}</span><FaChevronDown /></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="content-wrap contact-grid"><div className="contact-copy"><p className="eyebrow eyebrow--light"><span /> Make your next move considered</p><h2>Ready to begin with a conversation?</h2><p>Tell us a little about what you’re planning for. We’ll take it from there.</p><a href="tel:+919359049092" className="contact-phone"><FaPhoneAlt /> +91 93590 49092</a><span className="contact-location">Pune, Maharashtra, India</span></div><form className="contact-form" onSubmit={submitEnquiry}><label>Full name<input name="name" required placeholder="Your name" /></label><label>Phone number<input name="phone" required type="tel" placeholder="Your number" /></label><label>What would you like to discuss?<select name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>Investment planning</option><option>Protection planning</option><option>Retirement planning</option><option>Education planning</option><option>Something else</option></select></label><button className="button button--primary" type="submit">Request a callback <FaRegCalendarAlt /></button>{submitted && <p className="form-success"><FaCheck /> Thank you — we’ll be in touch soon.</p>}</form></div>
        </section>
      </main>

      <footer className="site-footer"><div className="content-wrap footer-top"><div><img src={logo} alt="Finvesly Capital" /><p>Thoughtful financial planning for the life you’re building.</p></div><div><span>Explore</span><button onClick={() => scrollTo('#about')}>About Finvesly</button><button onClick={() => scrollTo('#services')}>Services</button><button onClick={() => scrollTo('#process')}>Our process</button></div><div><span>Connect</span><a href="tel:+919359049092">+91 93590 49092</a><a href="mailto:finvesly@gmail.com">finvesly@gmail.com</a><a href="https://wa.me/919359049092" target="_blank" rel="noreferrer">WhatsApp</a></div><div className="socials"><span>Follow</span><div><a href="#home" aria-label="Facebook"><FaFacebookF /></a><a href="#home" aria-label="Instagram"><FaInstagram /></a><a href="#home" aria-label="LinkedIn"><FaLinkedinIn /></a></div></div></div><div className="content-wrap footer-bottom"><span>© {new Date().getFullYear()} Finvesly Capital. All rights reserved.</span><span>Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully.</span></div></footer>

      <a className="whatsapp-float" href="https://wa.me/919359049092" target="_blank" rel="noreferrer" aria-label="Chat with Finvesly on WhatsApp"><FaWhatsapp /></a>
    </div>
  );
}

export default App;
