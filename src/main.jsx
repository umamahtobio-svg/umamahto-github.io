import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, FlaskConical, MapPin, Menu, Microscope, MoveUpRight, Waves } from 'lucide-react';
import './styles.css';

const awards = [
  ['2025', 'DST–INSPIRE Faculty Fellowship', 'Department of Science & Technology, Government of India'],
  ['2024', 'Excellence in Doctoral Research Award', 'Indian Institute of Technology Roorkee'],
  ['2023', 'SERB Overseas Visiting Doctoral Fellowship', '12-month research stay, Purdue University'],
  ['2020', "Prime Minister’s Research Fellowship", 'Awarded for doctoral research'],
];
const roles = [
  ['2025 — now', 'DST–INSPIRE Faculty', 'Indian Institute of Science', 'Bengaluru, India'],
  ['2024 — 2025', 'Research Scientist', 'Indian Institute of Technology Madras', 'Chennai, India'],
  ['2019 — 2019', 'Junior Research Fellow', 'International Centre for Genetic Engineering and Biotechnology', 'New Delhi, India'],
];
function SectionTitle({ n, children }) { return <div className="section-title"><span>{n}</span><h2>{children}</h2></div> }
function App() {
 return <>
  <header className="topbar"><a className="wordmark" href="#top">AB<span>.</span></a><nav><a href="#about">About</a><a href="#research">Research</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="mailto:ankita@example.com">Let’s connect <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label="Open menu"><Menu/></button></header>
  <main id="top">
   <section className="hero wrap" id="about">
    <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> ACADEMIC PROFILE <i>·</i> BENGALURU, INDIA</div><h1>Researching the<br/><em>living world.</em></h1><p className="hero-intro">I’m <strong>Dr. Ankita Bhatt</strong>, a microbiologist and DST–INSPIRE Faculty at the Indian Institute of Science. I study how microbial communities can help us build a more sustainable future.</p><div className="hero-actions"><a className="button-dark" href="#research">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#contact">Get in touch <ArrowRight size={15}/></a></div><div className="hero-meta"><span><MapPin size={15}/> Bengaluru, India</span><span><span className="meta-sep">/</span> Open to collaboration</span></div></div>
    <div className="hero-visual"><img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1050&q=85" alt="Microscopic view of a colorful living cell"/><div className="image-label"><span>FIELD NOTES — 01</span><span>MICROBIAL ECOLOGY</span></div><div className="visual-stamp"><Microscope size={21}/><span>curiosity<br/>in practice</span></div></div>
    <div className="hero-index"><span>01 / 04</span><span className="index-line"/><span>SCROLL TO EXPLORE</span></div>
   </section>
   <section className="focus-band"><div className="wrap focus-inner"><span className="band-label">AREAS OF FOCUS</span><div><Waves/><span>Environmental<br/>microbiology</span></div><div><FlaskConical/><span>Wastewater<br/>biotechnology</span></div><div><Microscope/><span>Microalgae &<br/>bioremediation</span></div><div><BookOpen/><span>Life cycle<br/>assessment</span></div></div></section>
   <section className="research wrap" id="research"><SectionTitle n="01">A little about<br/><em>what I do.</em></SectionTitle><div className="research-content"><p className="lead">The smallest organisms can help answer some of our biggest questions.</p><p>My work sits at the intersection of microbiology, environmental engineering, and sustainability. I’m interested in turning complex biological processes into practical solutions for cleaner water and a healthier planet.</p><p>From understanding microbial communities to evaluating the impact of emerging technologies, my research is guided by one question: how can we work with nature to make a meaningful difference?</p><a className="under-link" href="mailto:ankita@example.com">Read my research statement <ArrowUpRight size={15}/></a></div></section>
   <section className="experience" id="experience"><div className="wrap experience-grid"><div><SectionTitle n="02">The path<br/><em>so far.</em></SectionTitle><p className="section-note">A few places, people, and ideas that have shaped my work.</p><a className="button-outline" href="mailto:ankita@example.com?subject=CV%20request">Request full CV <ArrowUpRight size={15}/></a></div><div className="timeline">{roles.map((r,i)=><article className="role" key={r[1]}><span className="role-dot"/><div className="role-date">{r[0]}</div><div><h3>{r[1]}</h3><p className="role-org">{r[2]}</p><p className="role-loc">{r[3]}</p></div></article>)}<div className="education"><span className="mini-label">EDUCATION</span><article><span className="edu-year">2019 — 2024</span><div><h3>Ph.D. in Environmental Science</h3><p className="role-org">Indian Institute of Technology Roorkee</p></div></article><article><span className="edu-year">2014 — 2019</span><div><h3>Integrated M.Sc. in Microbiology</h3><p className="role-org">Central University of Rajasthan</p></div></article></div></div></div></section>
   <section className="recognition wrap"><div className="recognition-head"><SectionTitle n="03">A few milestones.</SectionTitle><span className="mini-label">RECOGNITION & FELLOWSHIPS</span></div><div className="award-list">{awards.map(a=><article className="award" key={a[1]}><span className="award-year">{a[0]}</span><h3>{a[1]}</h3><span className="award-org">{a[2]}</span><MoveUpRight className="award-arrow" size={17}/></article>)}</div></section>
   <section className="quote-section"><div className="wrap quote-inner"><span className="quote-mark">“</span><blockquote>Good science begins with a better question—and grows through the people willing to ask it together.</blockquote><span className="quote-caption">A NOTE ON HOW I WORK</span></div><span className="quote-orbit orbit-one"/><span className="quote-orbit orbit-two"/></section>
   <section className="contact wrap" id="contact"><div><span className="eyebrow">HAVE A QUESTION OR AN IDEA?</span><h2>Let’s make<br/><em>something matter.</em></h2></div><div className="contact-side"><p>I’m always glad to hear from fellow researchers, prospective students, and people curious about the work.</p><a className="button-dark" href="mailto:ankita@example.com">Start a conversation <ArrowUpRight size={16}/></a><div className="contact-detail"><span>BASED AT</span><strong>Indian Institute of Science<br/>Bengaluru, India</strong></div></div></section>
  </main><footer id="contact"><div className="wrap footer-inner"><a className="wordmark" href="#top">AB<span>.</span></a><span>© 2025 DR. ANKITA BHATT</span><span>MADE FOR CURIOSITY <i>✳</i></span><a href="#top">BACK TO TOP ↑</a></div></footer>
 </>
}

createRoot(document.getElementById('root')).render(<App/>);
