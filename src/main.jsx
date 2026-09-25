import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, BookOpen, Dna, FlaskConical, MapPin, Menu, Microscope, MoveUpRight, Waves } from 'lucide-react';
import './styles.css';

const roles = [
  ['May 2024 — May 2025', 'DBT Postdoctoral Research Associate-I', 'CSIR-Centre for Cellular and Molecular Biology', 'Hyderabad, India'],
  ['Jul 2017 — Oct 2023', 'Doctoral Researcher, Life Science', 'National Institute of Technology Rourkela', 'Rourkela, Odisha, India'],
];

const education = [
  ['2017 — 2023', 'Ph.D. in Life Science', 'National Institute of Technology Rourkela', 'Biofilm modulation and catabolic gene expression in marine bacteria for PAH biodegradation'],
  ['2015 — 2017', 'M.Sc. in Biotechnology', 'Central University of South Bihar', 'Plant biotechnology and genetic polymorphism in Trapa natans'],
  ['2011 — 2014', 'B.Sc. in Biotechnology', 'Ranchi University', 'Biotechnology, chemistry, and zoology'],
];

const publications = [
  ['2025', 'Exogenous acyl homoserine lactones modulate biofilm formation in Pseudomonas aeruginosa PFL-P1 and enhance phenanthrene degradation', 'Journal of Chemical Technology & Biotechnology', 'https://doi.org/10.1002/jctb.70023'],
  ['2024', 'Electroactive biofilm communities in microbial fuel cells for synergistic wastewater treatment and bioelectricity generation', 'Critical Reviews in Biotechnology', 'https://doi.org/10.1080/07388551.2024.2372070'],
  ['2022', 'Bacterial biofilm and extracellular polymeric substances in the treatment of environmental pollutants', 'Journal of Cleaner Production', 'https://doi.org/10.1016/j.jclepro.2022.134759'],
  ['2022', 'Bacterial biofilm and extracellular polymeric substances in moving bed biofilm reactors for wastewater treatment', 'Bioresource Technology', 'https://doi.org/10.1016/j.biortech.2021.126476'],
  ['2021', 'Unraveling regulatory networks in bacterial biofilm formation and relevance to environmental remediation', 'Critical Reviews in Biochemistry and Molecular Biology', 'https://doi.org/10.1080/10409238.2021.2015747'],
  ['2021', 'Microscopic techniques to evaluate biofilm formation by a marine bacterium on different substrata', 'Microscopy Research and Technique', 'https://doi.org/10.1002/jemt.23799'],
  ['2020', 'Whole genome characterization and phenanthrene catabolic pathway of marine bacterium PFL-P1', 'Ecotoxicology and Environmental Safety', 'https://doi.org/10.1016/j.ecoenv.2020.111087'],
  ['2018', 'DNA polymorphism analysis of Indian germplasms of Trapa natans using RAPD molecular markers', 'Biocatalysis and Agricultural Biotechnology', 'https://doi.org/10.1016/j.bcab.2018.06.001'],
];

const skills = ['Biofilm biology', 'Environmental microbiology', 'Bioremediation', 'RNA vaccine development', 'Fungal pathogenesis', 'Molecular biology', 'Cell culture', 'Confocal & electron microscopy', 'Microbial genomics', 'HPLC & GC-MS'];
function SectionTitle({ n, children }) { return <div className="section-title"><span>{n}</span><h2>{children}</h2></div> }

function App() {
  return <>
    <header className="topbar"><a className="wordmark" href="#top">UM<span>.</span></a><nav><a href="#about">About</a><a href="#research">Research</a><a href="#experience">Experience</a><a href="#publications">Publications</a></nav><a className="nav-cta" href="mailto:umamahto.lsc@gmail.com">Contact <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label="Menu"><Menu/></button></header>
    <main id="top">
      <section className="hero wrap" id="about">
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> BIOLOGIST <i>·</i> RESEARCHER</div><h1>Science for a<br/><em>living planet.</em></h1><p className="hero-intro">I’m <strong>Kumari Uma Mahto</strong>, a biotechnologist working across microbial biofilms, environmental bioremediation, RNA vaccine research, and fungal pathogenesis.</p><div className="hero-actions"><a className="button-dark" href="#research">Explore my research <ArrowDownRight size={17}/></a><a className="text-link" href="/Uma_Mahto.pdf" target="_blank" rel="noreferrer">View CV <ArrowUpRight size={15}/></a></div><div className="hero-meta"><span><MapPin size={15}/> India</span><a href="https://scholar.google.com/citations?user=o5g3hfkAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={12}/></a><a href="https://www.linkedin.com/in/uma-mahto-phd-028730144/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12}/></a></div></div>
        <div className="hero-visual"><div className="science-art" role="img" aria-label="Abstract illustration of a microbial biofilm and cellular forms"><span className="cell cell-a"/><span className="cell cell-b"/><span className="cell cell-c"/><span className="cell cell-d"/><span className="art-ring ring-a"/><span className="art-ring ring-b"/><span className="art-caption">MICROBIAL WORLDS<br/>RESEARCH NOTES — 01</span><Dna className="art-dna"/></div><div className="image-label"><span>MICROBIAL ECOLOGY</span><span>MOLECULAR BIOLOGY</span></div><div className="visual-stamp"><Microscope size={21}/><span>curiosity<br/>in practice</span></div></div>
        <div className="hero-index"><span>01 / 04</span><span className="index-line"/><span>SCROLL TO EXPLORE</span></div>
      </section>
      <section className="focus-band"><div className="wrap focus-inner"><span className="band-label">RESEARCH AREAS</span><div><Waves/><span>Biofilms &<br/>bioremediation</span></div><div><FlaskConical/><span>Environmental<br/>biotechnology</span></div><div><Dna/><span>RNA &<br/>molecular biology</span></div><div><Microscope/><span>Fungal<br/>pathogenesis</span></div></div></section>
      <section className="research wrap" id="research"><SectionTitle n="01">Research across<br/><em>connected worlds.</em></SectionTitle><div className="research-content"><p className="lead">I study how microbes interact with their environments, and how that knowledge can support health and sustainability.</p><p>My doctoral work at NIT Rourkela explored biofilm-forming marine bacteria and their ability to degrade polycyclic aromatic hydrocarbons. I investigated how extracellular polymeric substances, quorum sensing, and biofilm growth affect pollutant breakdown.</p><p>At CSIR-CCMB, I broadened my work to mRNA vaccine development against Japanese encephalitis virus and the roles of amino acid homeostasis and glycolysis in Candida albicans morphogenesis and virulence.</p><a className="under-link" href="https://scholar.google.com/citations?user=o5g3hfkAAAAJ&hl=en" target="_blank" rel="noreferrer">Browse my research profile <ArrowUpRight size={15}/></a></div></section>
      <section className="experience" id="experience"><div className="wrap experience-grid"><div><SectionTitle n="02">Training &<br/><em>experience.</em></SectionTitle><p className="section-note">Research experience spanning environmental microbiology, biotechnology, and infection biology.</p><a className="button-outline" href="/Uma_Mahto.pdf" target="_blank" rel="noreferrer">Download full CV <ArrowDownRight size={15}/></a></div><div className="timeline">{roles.map(r=><article className="role" key={r[1]}><span className="role-dot"/><div className="role-date">{r[0]}</div><div><h3>{r[1]}</h3><p className="role-org">{r[2]}</p><p className="role-loc">{r[3]}</p></div></article>)}<div className="education"><span className="mini-label">EDUCATION</span>{education.map(e=><article key={e[1]}><span className="edu-year">{e[0]}</span><div><h3>{e[1]}</h3><p className="role-org">{e[2]}</p><p className="role-loc">{e[3]}</p></div></article>)}</div></div></div></section>
      <section className="recognition wrap" id="publications"><div className="recognition-head"><SectionTitle n="03">Selected publications.</SectionTitle><span className="mini-label">PEER-REVIEWED RESEARCH</span></div><div className="award-list">{publications.map(p=><a className="award" href={p[3]} key={p[1]} target="_blank" rel="noreferrer"><span className="award-year">{p[0]}</span><h3>{p[1]}</h3><span className="award-org">{p[2]}</span><MoveUpRight className="award-arrow" size={17}/></a>)}</div><div className="patent-note"><span className="mini-label">PATENT · 2025</span><p>Development of bacterial biofilm on low-cost substratum for degradation of phenanthrene. Indian Patent No. 567617.</p></div></section>
      <section className="quote-section"><div className="wrap quote-inner"><span className="quote-mark">“</span><blockquote>Curiosity becomes useful when careful observation meets a real-world question.</blockquote><span className="quote-caption">RESEARCH THEMES: MICROBES · MECHANISMS · APPLICATIONS</span></div><span className="quote-orbit orbit-one"/><span className="quote-orbit orbit-two"/></section>
      <section className="contact wrap" id="contact"><div><span className="eyebrow">LET’S CONNECT</span><h2>Open to ideas<br/><em>and collaboration.</em></h2></div><div className="contact-side"><p>For research conversations, collaborations, and academic enquiries, please get in touch.</p><a className="button-dark" href="mailto:umamahto.lsc@gmail.com">Email Uma <ArrowUpRight size={16}/></a><div className="contact-detail"><span>PROFILES</span><strong><a href="https://scholar.google.com/citations?user=o5g3hfkAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a><br/><a href="https://www.linkedin.com/in/uma-mahto-phd-028730144/" target="_blank" rel="noreferrer">LinkedIn</a></strong></div><a className="download-inline" href="/Uma_Mahto.pdf" target="_blank" rel="noreferrer">View or download CV <ArrowDownRight size={14}/></a></div></section>
    </main><footer><div className="wrap footer-inner"><a className="wordmark" href="#top">UM<span>.</span></a><span>© {new Date().getFullYear()} KUMARI UMA MAHTO</span><span>RESEARCH · BIOTECHNOLOGY</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App/>);
