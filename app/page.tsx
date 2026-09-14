"use client";

import { FormEvent, useState } from "react";

const categories = [
  ["01", "Safety & Security", "Habits and awareness that help workers stay safer at work and beyond."],
  ["02", "Government Schemes & Benefits", "Important government benefits and schemes made easier to understand and access."],
  ["03", "Life Skills", "Practical knowledge to navigate everyday life with greater confidence."],
  ["04", "Financial Literacy", "A better understanding of money, savings, spending and financial decisions."],
  ["05", "Health & Wellbeing", "Awareness and everyday practices that support healthier choices."],
  ["06", "Digital Awareness", "The confidence and knowledge to navigate an increasingly digital world safely."],
  ["07", "Career & Personal Growth", "Mindsets and capabilities that create opportunities for the future."],
];

const capabilities = [
  ["01", "Notice Board", "Communicate directly.", "A direct channel for important updates, announcements and messages to frontline workers."],
  ["02", "Workforce Pulse", "Listen continuously.", "Short surveys that reveal engagement, sentiment, concerns and emerging needs over time."],
  ["03", "Workforce Alignment", "Keep everyone together.", "A common view across businesses, labour partners and frontline workers for smoother coordination."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const form = event.currentTarget;
      const response = await fetch("https://formsubmit.co/ajax/medhaviwork29@gmail.com", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  const navigation = [
    ["About Us", "#about"],
    ["The Need", "#need"],
    ["Our Platform", "#platform"],
    ["For Businesses", "#for-businesses"],
    ["Contact", "#contact"],
  ];

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="BeyondShift home">
            <img className="site-logo" src="/beyondshift-logo.png" alt="" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.slice(0, 4).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="button button-small nav-cta" href="#contact">Talk to us <Arrow /></a>
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
        )}
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="shell hero-content">
          <p className="eyebrow light">Continuous learning and growth for frontline workers</p>
          <h1>Helping frontline workers <em>learn, grow</em> and build a better life.</h1>
          <div className="hero-bottom">
            <p>BeyondShift is a continuous learning and growth platform for frontline workers, using engaging micro-dramas to help them build the knowledge, confidence and capabilities they need for life, work and everything beyond.</p>
            <a className="button" href="#contact">Talk to us <Arrow /></a>
          </div>
        </div>
        <div className="hero-rule" aria-hidden="true"><span>Learn</span><i>Grow</i><span>Beyond</span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell">
          <p className="eyebrow">About us</p>
          <div className="about-heading">
            <h2>Learning for life.<br /><em>Growth for the future.</em></h2>
            <p>BeyondShift exists to make useful, practical knowledge accessible to the people who keep businesses moving.</p>
          </div>
          <div className="vision-grid">
            <article><span>01 / Vision</span><p>To enable every worker to continuously learn, grow and build a better life.</p></article>
            <article><span>02 / Mission</span><p>To help businesses build a confident, capable and empowered frontline workforce.</p></article>
          </div>
        </div>
      </section>

      <section className="section need-section" id="need">
        <div className="shell need-grid">
          <div>
            <p className="eyebrow">The need</p>
            <h2>A worker&apos;s life is bigger than their job.</h2>
          </div>
          <div className="need-copy">
            <p>Job training matters. But navigating life takes a broader set of knowledge, habits and skills.</p>
            <p>Much of this knowledge is difficult to access, unavailable in a relevant format, or simply never taught. BeyondShift bridges that gap.</p>
          </div>
        </div>
        <div className="shell solution-panel">
          <p className="eyebrow light">Our solution</p>
          <h3>Practical knowledge,<br /><em>made engaging.</em></h3>
          <p>BeyondShift brings practical, relevant, accessible, and micro-sized bits to frontline workers beyond job-specific training.</p>
          <div className="solution-mark" aria-hidden="true"><span>Micro</span><i>Drama</i></div>
        </div>
      </section>

      <section className="section platform-section" id="platform">
        <div className="shell">
          <div className="section-intro">
            <div><p className="eyebrow">Our platform</p><h2>Practical knowledge. <em>Made for real life.</em></h2></div>
            <div className="platform-stat"><strong>320+</strong><span>micro-sized bits across 16 learning modules — and growing.</span></div>
          </div>
          <div className="category-grid">
            {categories.map(([number, title, copy]) => (
              <article key={title}><span className="card-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
            <article className="more-card"><span className="plus" aria-hidden="true">+</span><h3>More learning areas</h3><p>New content is created and refreshed continuously.</p></article>
          </div>
          <div className="refresh-card">
            <p className="eyebrow">Always relevant</p>
            <h3>Workers don&apos;t just learn more. They keep learning <em>what matters.</em></h3>
            <p>Government schemes emerge. Digital risks evolve. Financial realities change. New opportunities and challenges appear. That&apos;s why we continuously create, update and refresh our content.</p>
          </div>
        </div>
      </section>

      <section className="section business-section" id="for-businesses">
        <div className="shell">
          <div className="section-intro business-intro">
            <div><p className="eyebrow light">For businesses</p><h2>A more confident, capable, and <em>empowered</em> workforce.</h2></div>
            <div><h3>Beyond learning, a better-connected workforce.</h3><p>Simple ways to communicate with, listen to and stay connected with the people who keep your business moving.</p></div>
          </div>
          <div className="capability-grid">
            {capabilities.map(([number, label, title, copy]) => (
              <article key={label}><span className="cap-number">{number}</span><p className="cap-label">{label}</p><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">Contact us</p>
            <h2>Let&apos;s build a better workforce, <em>together.</em></h2>
            <p>If you&apos;re looking to provide meaningful, continuous learning to your frontline workforce, we&apos;d love to hear from you.</p>
            <a href="mailto:medhaviwork29@gmail.com">medhaviwork29@gmail.com <Arrow /></a>
            <div className="legal-details">
              <strong>Beyond Shift | Triad Spark Innovation Private Limited</strong>
              <span>CIN: U62011KA2024PTC183889</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <input type="hidden" name="_subject" value="New BeyondShift lead" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="field-row">
              <label><span>Name *</span><input name="name" type="text" placeholder="Your name" required autoComplete="name" /></label>
              <label><span>Company *</span><input name="company" type="text" placeholder="Company name" required autoComplete="organization" /></label>
            </div>
            <div className="field-row">
              <label><span>Work email *</span><input name="email" type="email" placeholder="you@company.com" required autoComplete="email" /></label>
              <label><span>Phone</span><input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" /></label>
            </div>
            <label><span>Message</span><textarea name="message" placeholder="Tell us about your frontline workforce and what you’re looking for" rows={4} /></label>
            <div className="form-footer">
              <button className="button" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending…" : "Send enquiry"} <Arrow /></button>
              <p className={`form-status ${formStatus}`} aria-live="polite">{formStatus === "success" ? "Thanks — we’ll be in touch soon." : formStatus === "error" ? "Something went wrong. Please email us directly." : "We’ll only use your details to respond to your enquiry."}</p>
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="shell footer-top"><a className="footer-logo-frame" href="#top" aria-label="BeyondShift home"><img className="site-logo footer-logo" src="/beyondshift-logo.png" alt="" /></a><p>Learning for life.<br /><em>Growth for the future.</em></p><a className="back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} BeyondShift. All rights reserved.</span><span>Triad Spark Innovation Private Limited · CIN U62011KA2024PTC183889</span></div>
      </footer>
    </main>
  );
}
