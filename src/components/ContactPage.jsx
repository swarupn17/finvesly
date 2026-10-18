import { motion as Motion, useReducedMotion } from 'framer-motion';
import { FaCheck, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';

function ContactPage({ onSubmit, submitted }) {
  const shouldReduceMotion = useReducedMotion();
  const reveal = shouldReduceMotion ? {} : {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="detail-page contact-page">
      <Motion.section className="page-hero page-hero--contact" initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: shouldReduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}>
        <div className="content-wrap page-hero-grid">
          <div>
            <p className="eyebrow"><span /> Contact us</p>
            <h1>Your financial journey starts here.</h1>
            <p>Whether you&apos;re looking for investment solutions, financial guidance, or financial awareness programs for your organisation, we&apos;re here to help.</p>
          </div>
          <aside className="page-hero-stamp">
            <span>Finvesly Capital Services LLP</span>
            <strong>Educate First.<br />Empower Always.<br />Grow Together.</strong>
          </aside>
        </div>
      </Motion.section>

      <Motion.section className="contact-page-main content-wrap" {...reveal}>
        <div className="contact-details-card">
          <p className="eyebrow"><span /> Get in touch</p>
          <h2>A thoughtful first conversation can make the next step clearer.</h2>
          <a href="mailto:finvesly@gmail.com"><FaEnvelope />finvesly@gmail.com</a>
          <a href="tel:+919130151120"><FaPhoneAlt />+91 9130151120</a>
          <a href="http://www.finvesly.com/" target="_blank" rel="noreferrer">www.finvesly.com</a>
          <address><FaMapMarkerAlt /><span><strong>Registered Corporate Office</strong>205, Shri Padmalaxmi,<br />Jijai Nagar, Kothrud,<br />Pune - 411038, Maharashtra, India.</span></address>
        </div>
        <form className="contact-form contact-form--page" onSubmit={onSubmit}>
          <div className="form-heading"><p className="eyebrow"><span /> Send an enquiry</p><p>Tell us what you would like to discuss.</p></div>
          <label>Full name<input name="name" required placeholder="Your name" /></label>
          <label>Phone number<input name="phone" required type="tel" placeholder="Your number" /></label>
          <label>Email address<input name="email" required type="email" placeholder="you@example.com" /></label>
          <label>What would you like to discuss?<select name="interest" defaultValue="" required><option value="" disabled>Select an area</option><option>Investment solutions</option><option>Financial guidance</option><option>Financial awareness program</option><option>Something else</option></select></label>
          <label className="form-message">Your message<textarea name="message" rows="4" placeholder="Share a little about how we can help" /></label>
          <button className="button button--primary" type="submit">Request a callback <FaRegCalendarAlt /></button>
          {submitted && <p className="form-success"><FaCheck /> Thank you - we&apos;ll be in touch soon.</p>}
        </form>
      </Motion.section>

      <Motion.section className="contact-registration" {...reveal}>
        <div className="content-wrap"><FaCheck aria-hidden="true" /><div><strong>Finvesly Capital Services LLP</strong><span>AMFI Registered Mutual Fund Distributor | ARN: 266874</span></div><p>Contributing towards Viksit Bharat 2047.</p></div>
      </Motion.section>
    </div>
  );
}

export default ContactPage;
