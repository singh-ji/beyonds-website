"use client";

import { FormEvent, useState } from "react";

const needs = ["Money", "Safety", "Health", "Digital life", "Government schemes", "Family", "Personal decisions", "Career growth"];
const outcomes = [
  ["01", "More confident", "Better equipped to make decisions and handle everyday situations."],
  ["02", "More capable", "Practical knowledge and capabilities that extend beyond the immediate role."],
  ["03", "More empowered", "Better informed about finances, safety, rights, opportunities and the future."],
];
const steps = [
  ["01", "Connect", "Give your frontline workforce access to BeyondShift through your organisation."],
  ["02", "Learn", "Workers access short, practical lessons designed around their everyday needs."],
  ["03", "Engage", "Businesses communicate with and listen to their frontline workforce."],
  ["04", "Grow", "Learning and engagement build knowledge, confidence and capabilities over time."],
];
const benefits = ["Stronger workforce engagement", "Continuous employee learning", "Greater employee wellbeing", "Better financial and digital awareness", "A stronger management–frontline connection", "Greater value for frontline employees"];
const categories = [
  ["Everyday", "Life Skills", "Practical knowledge to navigate everyday life with greater confidence."],
  ["Money", "Financial Literacy", "A better understanding of money, savings, spending and financial decisions."],
  ["Awareness", "Safety & Security", "Habits and awareness that help workers stay safer at work and beyond."],
  ["Access", "Government Schemes & Benefits", "Important government benefits and schemes made easier to understand and access."],
  ["Wellbeing", "Health & Wellbeing", "Awareness and everyday practices that support healthier choices."],
  ["Online", "Digital Awareness", "The confidence and knowledge to navigate an increasingly digital world safely."],
  ["Future", "Career & Personal Growth", "Mindsets and capabilities that create opportunities for the future."],
];
const capabilities = [
  ["Notice Board", "Communicate directly.", "A direct channel for important updates, announcements and messages to frontline workers."],
  ["Workforce Pulse", "Listen continuously.", "Short surveys that reveal engagement, sentiment, concerns and emerging needs over time."],
  ["Workforce Alignment", "Keep everyone together.", "A common view across businesses, labour partners and frontline workers for smoother coordination."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");
    try {
      const form = event.currentTarget;
      const response = await fetch("https://formsubmit.co/ajax/medhaviwork29@gmail.com", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="BeyondShift home">Beyond<span>Shift</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#what-we-do">What We Do</a><a href="#for-businesses">For Businesses</a><a href="#platform">Our Platform</a><a href="#about">About</a>
          </nav>
          <a className="button button-small nav-cta" href="#contact">Talk to us <Arrow /></a>
          <button className={`menu-button ${menuOpen ? "open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{[["What We Do", "#what-we-do"], ["For Businesses", "#for-businesses"], ["Our Platform", "#platform"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="shell hero-content">
          <p className="eyebrow light">Continuous learning and growth for frontline workers</p>
          <h1>Helping frontline workers <em>learn, grow</em> and build a better life.</h1>
          <div className="hero-bottom">
            <div className="hero-copy"><p>BeyondShift is a continuous learning and growth platform for frontline workers — helping them build the knowledge, confidence and capabilities they need for life, work and everything beyond.</p><div className="button-row"><a className="button" href="#contact">Talk to us <Arrow /></a><a className="text-link light-link" href="#what-we-do">See how it works <span aria-hidden="true">↓</span></a></div></div>
            <p className="hero-note">For businesses, this means a more confident, capable and empowered frontline workforce.</p>
          </div>
        </div>
        <div className="ticker" aria-label="BeyondShift values"><div className="ticker-track"><span>Learn for life</span><i>✦</i><span>Grow with confidence</span><i>✦</i><span>Build better possibilities</span><i>✦</i><span aria-hidden="true">Learn for life</span><i aria-hidden="true">✦</i><span aria-hidden="true">Grow with confidence</span><i aria-hidden="true">✦</i><span aria-hidden="true">Build better possibilities</span><i aria-hidden="true">✦</i></div></div>
      </section>

      <section className="section need-section" id="what-we-do">
        <div className="shell">
          <div className="section-intro"><div><p className="eyebrow">What we do</p><h2>A worker&apos;s life is bigger than their job.</h2></div><p className="intro-copy">Job training matters. But navigating life takes a broader set of knowledge, habits and skills — the kind that too often remains out of reach.</p></div>
          <div className="need-layout">
            <div className="need-visual" aria-hidden="true"><div className="sun"><span>Life</span></div><p>Knowledge that moves with them — on shift, off shift, and into the future.</p></div>
            <div className="need-content"><p className="small-label">The need</p><h3>Useful knowledge, made easier to reach.</h3><p>Frontline workers are trained to do their jobs. But there is so much more they need to navigate every day.</p><div className="tag-cloud">{needs.map((need, index) => <span key={need}><b>{String(index + 1).padStart(2, "0")}</b>{need}</span>)}</div><p className="fine-copy">Much of this knowledge is difficult to access, unavailable in a relevant format, or simply never taught. BeyondShift bridges that gap.</p></div>
          </div>
          <div className="solution-band"><p className="small-label">Our solution</p><h3>Learning for life.<br /><em>Growth for the future.</em></h3><div><p>BeyondShift brings practical, relevant and accessible learning to frontline workers — covering the knowledge and life skills that help them make better decisions, stay safer, become more confident and move forward in life.</p><p>We go beyond job-specific training to support continuous learning and personal growth.</p></div></div>
        </div>
      </section>

      <section className="section dark-section" id="for-businesses">
        <div className="shell">
          <div className="section-intro dark-intro"><div><p className="eyebrow light">For businesses</p><h2>A stronger workforce starts with a more <em>empowered</em> workforce.</h2></div><p className="intro-copy">Your frontline workforce is your business in motion. BeyondShift helps you invest in their learning, confidence and connection.</p></div>
          <div className="outcome-grid">{outcomes.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <div className="steps-wrap"><div className="steps-heading"><p className="eyebrow light">How it works</p><h3>Small lessons.<br />Lasting progress.</h3></div><div className="steps-list">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h4>{title}</h4><p>{copy}</p></div></article>)}</div></div>
          <div className="benefit-panel"><div><p className="small-label light">Business benefits</p><h3>When people grow,<br /><em>businesses do too.</em></h3><a className="button" href="#contact">Partner with BeyondShift <Arrow /></a></div><ul>{benefits.map((benefit) => <li key={benefit}><span>✓</span>{benefit}</li>)}</ul></div>
        </div>
      </section>

      <section className="section platform-section" id="platform">
        <div className="shell">
          <div className="section-intro"><div><p className="eyebrow">Our platform</p><h2>Practical knowledge. <em>Made for real life.</em></h2></div><div className="platform-stat"><strong>320+</strong><span>lessons across 16 learning modules — and growing.</span></div></div>
          <div className="category-grid">{categories.map(([tag, title, copy], index) => <article key={title}><span className="cat-index">{String(index + 1).padStart(2, "0")}</span><p className="small-label">{tag}</p><h3>{title}</h3><p>{copy}</p></article>)}<article className="more-card"><span aria-hidden="true">+</span><h3>More learning areas</h3><p>New content is created and refreshed continuously.</p></article></div>
          <div className="refresh-card"><div className="refresh-ring" aria-hidden="true"><span>↻</span></div><div><p className="eyebrow">Always relevant</p><h3>Workers don&apos;t just learn more. They keep learning <em>what matters.</em></h3></div><p>Government schemes emerge. Digital risks evolve. Financial realities change. New opportunities and challenges appear. That&apos;s why we continuously create, update and refresh our content.</p></div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="shell">
          <div className="section-intro"><div><p className="eyebrow light">Workforce capabilities</p><h2>More than learning. A better-connected workforce.</h2></div><p className="intro-copy">Simple ways to communicate with, listen to and stay connected with the people who keep your business moving.</p></div>
          <div className="capability-grid">{capabilities.map(([tag, title, copy], index) => <article key={tag}><div className="cap-icon" aria-hidden="true">{["↗", "◉", "↔"][index]}</div><p className="small-label light">{tag}</p><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell">
          <p className="eyebrow">About BeyondShift</p>
          <div className="belief"><p className="belief-mark" aria-hidden="true">“</p><h2>Because work is only <em>one part</em> of life.</h2></div>
          <div className="about-grid"><div className="vm-card"><span>01 / Vision</span><p>To enable every worker to continuously learn, grow and build a better life.</p></div><div className="vm-card"><span>02 / Mission</span><p>To help businesses build a confident, capable and empowered frontline workforce.</p></div><div className="about-copy"><p>Every worker has ambitions, responsibilities, challenges and dreams that extend far beyond their job. BeyondShift exists to make useful knowledge accessible throughout that journey.</p><p>We are building a platform that helps frontline workers continuously learn, make better decisions and create better possibilities for themselves and their families.</p></div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div className="contact-copy"><p className="eyebrow light">Let&apos;s talk</p><h2>Let&apos;s build a better workforce, <em>together.</em></h2><p>If you&apos;re looking to provide meaningful, continuous learning to your frontline workforce, we&apos;d love to hear from you.</p><a href="mailto:medhaviwork29@gmail.com">medhaviwork29@gmail.com <Arrow /></a></div>
          <form className="contact-form" onSubmit={submitForm}>
            <input type="hidden" name="_subject" value="New BeyondShift lead" /><input type="hidden" name="_captcha" value="false" />
            <div className="field-row"><label><span>Name *</span><input name="name" type="text" placeholder="Your name" required autoComplete="name" /></label><label><span>Company *</span><input name="company" type="text" placeholder="Company name" required autoComplete="organization" /></label></div>
            <div className="field-row"><label><span>Work email *</span><input name="email" type="email" placeholder="you@company.com" required autoComplete="email" /></label><label><span>Phone</span><input name="phone" type="tel" placeholder="Phone number" autoComplete="tel" /></label></div>
            <label><span>Message</span><textarea name="message" placeholder="Tell us about your frontline workforce and what you’re looking for" rows={4} /></label>
            <div className="form-footer"><button className="button" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending…" : "Send enquiry"} <Arrow /></button><p className={`form-status ${formStatus}`} aria-live="polite">{formStatus === "success" ? "Thanks — we’ll be in touch soon." : formStatus === "error" ? "Something went wrong. Please email us directly." : "We’ll only use your details to respond to your enquiry."}</p></div>
          </form>
        </div>
      </section>

      <footer><div className="shell footer-top"><a className="brand footer-brand" href="#top">Beyond<span>Shift</span></a><p>Learning for life.<br /><em>Growth for the future.</em></p><a className="back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} BeyondShift. All rights reserved.</span><span>Built for people who keep businesses moving.</span></div></footer>
    </main>
  );
}
