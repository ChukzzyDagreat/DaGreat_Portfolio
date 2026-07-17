import { useState, useEffect } from 'react';
import me from './assets/me.png';
import meInCar from './assets/me-in-car.png';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // ── THEME TOGGLE ──
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // ── MOBILE NAV TOGGLE ──
  const openMobileNav = () => {
    setMobileNavOpen(true);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  // ── SCROLL REVEAL ──
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    
    reveals.forEach(el => observer.observe(el));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
    };
  }, []);

  // ── RESUME DOWNLOAD ──
  const downloadResume = () => {
    const content = `DAGREAT — Web Developer Resume
================================
Location: Delta, Nigeria
Email: ochukoakporue@email.com
GitHub: github.com/ChukzzyDagreat
LinkedIn: linkedin.com/in/ochuko-akporue

SKILLS
------
Frontend: HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS
Backend: Node.js, REST APIs, Java
Database: MongoDB, MySQL
Tools: Git, Linux, Figma

PROJECTS
--------
• Student CGPA Calculator — HTML, Tailwind, JavaScript, LocalStorage
• Laptop Store Landing Page — HTML, CSS, Vanilla JS
• Student Info Manager — Java, OOP, CLI
• Royal Chosen International Ministries (in progress) — NextJS, Tailwind, API, PostgreSQL
• Portfolio — HTML, CSS, Vanilla JS

EDUCATION
---------
B.Sc. Computer Science — Delta State University, Abraka, Delta (In progress)

EXPERIENCE
----------
Laptop Seller (Self-employed) — 2025–Present
  Sourcing, pricing, and selling laptops in Delta and most especially University students of Delta State University, Abraka (Delsu).

CONTACT
-------
Email: ochukoakporue@email.com
Tel: +234 9031789469
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DAGREAT_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* ── NAV ── */}
      <div 
        className="navBg" 
        id="navBg" 
        style={{ display: mobileNavOpen ? 'flex' : 'none' }}
        onClick={closeMobileNav}
      ></div>
      
      <div 
        className="mobileNav" 
        id="mobileLinks"
        style={{ display: mobileNavOpen ? 'block' : 'none' }}
      >
        <div className="wrap">
          <ul className="mobile-links" onClick={closeMobileNav}>
            <a href="#skills"><li>Skills</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
      </div>

      <nav>
        <div className="wrap">
          <div className="nav-inner">
            <div className="logo">DaGreat</div>
            <ul className="nav-links" id="navLinks">
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-right">
              <button 
                className="theme-btn" 
                id="themeToggle" 
                title="Toggle theme" 
                aria-label="Toggle light/dark mode"
                onClick={toggleTheme}
              >
                <i className={theme === 'dark' ? 'ti ti-sun' : 'ti ti-moon'} id="themeIcon"></i>
              </button>
              <a href="#contact" className="nav-cta">Hire me</a>
              <button 
                className="menuBtn" 
                title="Toggle menu" 
                aria-label="Toggle mobile menu"
                onClick={openMobileNav}
              >
                <span id="openNav">&equiv;</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="wrap">
        <div className="bgImage"><img src={me} alt="my picture" /></div>
        <div className="hero">
          <div>
            <div className="eyebrow">Available for freelance &amp; contracts</div>
            <h1>I grow businesses, promote brands and drive crazy traffic.<br /><small>By building <br />fast, clean &amp; <span className="a2">real</span></small><span className="a1">websites</span></h1>
            <p className="sub">
              Web developer based in <strong>Delta, Nigeria</strong>. I turn ideas into polished digital products — from landing pages to full-stack applications.
            </p>
            <div className="btns">
              <a href="#projects" className="btn-p"><i className="ti ti-eye"></i> View my work</a>
              <a href="#contact" className="btn-g"><i className="ti ti-send"></i> Get in touch</a>
              <button className="btn-resume" onClick={downloadResume}><i className="ti ti-download"></i> Download CV</button>
            </div>
          </div>

          <div className="code-card">
            <div className="card-dots">
              <div className="dot" style={{ background: '#FF5F57' }}></div>
              <div className="dot" style={{ background: '#FEBC2E' }}></div>
              <div className="dot" style={{ background: '#28C840' }}></div>
              <span className="card-file">portfolio.js</span>
            </div>
            <pre>
              <code>
                <span className="kw">const</span> developer = {'{\n'}
                {'  '}name: <span className="str">&quot;DAGREAT&quot;</span>,{'\n'}
                {'  '}location: <span className="str">&quot;Delta, NG 🇳🇬&quot;</span>,{'\n'}
                {'  '}role: <span className="str">&quot;Full-Stack Dev&quot;</span>,{'\n'}
                {'  '}stack: [{'\n'}
                {'    '}<span className="str">&quot;React&quot;</span>,{'\n'}
                {'    '}<span className="str">&quot;Next.js&quot;</span>,{'\n'}
                {'    '}<span className="str">&quot;Node.js&quot;</span>,{'\n'}
                {'    '}<span className="str">&quot;Tailwind CSS&quot;</span>,{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="fn">build</span>: (idea) <span className="kw">=&gt;</span> {'{\n'}
                {'    '}<span className="cm">// turns ideas → products</span>{'\n'}
                {'    '}<span className="kw">return</span> <span className="str">&quot;something real&quot;</span>;{'\n'}
                {'  }'}{'}\n'}
                {'};'}
              </code>
            </pre>
            <div className="status">
              <div className="pulse"></div>
              Open to new opportunities
            </div>
          </div>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div className="wrap">
        <section id="skills">
          <p className="sec-label reveal">What I work with</p>
          <p className="sec-title reveal">Skills &amp; technologies</p>
          <div className="skills-grid">
            <div className="sk reveal reveal-delay-1">
              <div className="sk-icon"><i className="ti ti-layout" style={{ color: 'var(--accent)' }}></i></div>
              <div className="sk-name">Frontend</div>
              <div className="tags">
                <span className="tag">HTML5</span><span className="tag">CSS3</span><span className="tag">JavaScript</span>
                <span className="tag">React</span><span className="tag">Next.js</span><span className="tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="sk reveal reveal-delay-2">
              <div className="sk-icon"><i className="ti ti-server" style={{ color: 'var(--accent2)' }}></i></div>
              <div className="sk-name">Backend</div>
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">REST APIs</span><span className="tag">Java</span>
              </div>
            </div>
            <div className="sk reveal reveal-delay-3">
              <div className="sk-icon"><i className="ti ti-database" style={{ color: 'var(--code)' }}></i></div>
              <div className="sk-name">Database &amp; tools</div>
              <div className="tags">
                <span className="tag">MongoDB</span><span className="tag">PostgreSQL</span>
                <span className="tag">Git</span><span className="tag">Linux</span>
              </div>
            </div>
            <div className="sk reveal reveal-delay-4">
              <div className="sk-icon"><i className="ti ti-brush" style={{ color: '#D4537E' }}></i></div>
              <div className="sk-name">Design &amp; other</div>
              <div className="tags">
                <span className="tag">Figma</span><span className="tag">Responsive</span>
                <span className="tag">UI/UX</span><span className="tag">SEO</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── PROJECTS ── */}
      <div className="wrap">
        <section id="projects">
          <p className="sec-label reveal">What I've built</p>
          <p className="sec-title reveal">Projects</p>
          <div className="proj-grid">

            <div className="proj ft reveal reveal-delay-1">
              <span className="badge b-ft">✦ Featured</span>
              <div className="proj-title">Student CGPA Calculator</div>
              <div className="proj-desc">A web tool for 100-level Nigerian university students to calculate and track their GPA across courses and semesters. Clean UI, fast, no sign-up needed.</div>
              <div className="tags" style={{ marginBottom: '16px' }}>
                <span className="tag">HTML</span><span className="tag">Tailwind</span><span className="tag">JavaScript</span><span className="tag">LocalStorage</span>
              </div>
              <div className="proj-links">
                <a href="https://chukzzydagreat.github.io/CGPA_Calculator/" className="pl"><i className="ti ti-external-link"></i> Live demo</a>
                <a href="https://github.com/chukzzydagreat/CGPA_Calculator" className="pl dim"><i className="ti ti-brand-github"></i> Source</a>
              </div>
            </div>

            <div className="proj reveal reveal-delay-2">
              <span className="badge b-wip">⧖ In progress</span>
              <div className="proj-title">Laptop Store Landing Page</div>
              <div className="proj-desc">A conversion-focused landing page for a student-targeted laptop reselling business in Delta. Drives WhatsApp inquiries via punchy, direct copy.</div>
              <div className="tags" style={{ marginBottom: '16px' }}>
                <span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">Vanilla JS</span>
              </div>
              <div className="proj-links">
                <a href="https://chukzzydagreat.github.io/DaGreat_Gadgets/" target="_blank" rel="noopener noreferrer" className="pl"><i className="ti ti-external-link"></i> Live demo</a>
                <a href="https://github.com/chukzzydagreat/DaGreat_Gadgets" className="pl dim"><i className="ti ti-brand-github"></i> Source</a>
              </div>
            </div>

            <div className="proj reveal reveal-delay-3">
              <span className="badge b-live">● Live</span>
              <div className="proj-title">Student Info Manager</div>
              <div className="proj-desc">A console-based Java application for managing and querying student records. Built with OOP principles as part of CS coursework. Available in both CLI and traditional UI.</div>
              <div className="tags" style={{ marginBottom: '16px' }}>
                <span className="tag">JavaScript</span><span className="tag">OOP</span><span className="tag">CLI</span>
              </div>
              <div className="proj-links">
                CLI<a href="https://chukzzydagreat.github.io/student_Info_Manager2/" target="_blank" rel="noopener noreferrer" className="pl"><i className="ti ti-external-link"></i> View </a>
                <a href="https://github.com/chukzzydagreat/Student_Info_Manager2" className="pl dim"><i className="ti ti-brand-github"></i> Source</a>
                UI<a href="https://chukzzydagreat.github.io/student_info_manager/" target="_blank" rel="noopener noreferrer" className="pl"><i className="ti ti-external-link"></i> View </a>
                <a href="https://github.com/chukzzydagreat/Student_info_manager" className="pl dim"><i className="ti ti-brand-github"></i> Source</a>
              </div>
            </div>

            <div className="proj ft reveal reveal-delay-4">
              <span className="badge b-wip">⧖ In progress</span>
              <div className="proj-title">Royal Chosen International Ministries</div>
              <div className="proj-desc">A fully structured nextJS based church website for proper documentation of church activities. What it does: stream live programs, view past events, pay offerings, tithes & other voluntary donations etc.</div>
              <div className="tags" style={{ marginBottom: '16px' }}>
                <span className="tag">NextJS</span><span className="tag">Tailwind</span><span className="tag">API</span><span className="tag">PostgreSQL</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/ChukzzyDagreat/RCIM_website.git" className="pl dim"><i className="ti ti-brand-github"></i> Source</a>
              </div>
            </div>

            <div className="proj ft reveal reveal-delay-5">
              <span className="badge b-wip">⧖ In progress</span>
              <div className="proj-title">Exclusive Cakes</div>
              <div className="proj-desc">Fully responsive personal developer portfolio. Designed from scratch — dark theme, code aesthetic, built to represent real work and real skills.</div>
              <div className="tags" style={{ marginBottom: '16px' }}>
                <span className="tag">NextJS</span><span className="tag">Tailwind</span><span className="tag">Vanilla JS</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/chukzzydagreat/This_Portfolio" className="pl dim"><i className="ti ti-brand-github"></i> Source</a>
              </div>
            </div>

            <div className="proj reveal reveal-delay-5">
              <span className="badge b-ft">✦ Featured</span>
              <div className="proj-title">This Portfolio</div>
              <div className="proj-desc">Fully responsive personal developer portfolio. Designed from scratch — dark theme, code aesthetic, built to represent real work and real skills.</div>
              <div className="tags" style={{ marginBottom: '16px' }}>
                <span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">Vanilla JS</span>
              </div>
              <div className="proj-links">
                <a href="https://github.com/chukzzydagreat/This_Portfolio" className="pl dim"><i className="ti ti-brand-github"></i> Source</a>
                <a href="#" className="pl"><i className="ti ti-external-link"></i>You are here</a>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* ── ABOUT ── */}
      <div className="wrap">
        <div className="bgImage bgImage2"><img src={meInCar} alt="my picture" /></div>
        <section id="about">
          <p className="sec-label reveal">Who I am</p>
          <p className="sec-title reveal">About me</p>
          <div className="about-grid">
            <div className="about-body reveal">
              <p>
                I'm <strong>Akporue Ochuko Great (DaGreat)</strong> — a Computer Science student and self-taught web developer
                based in <strong>Delta, Nigeria</strong>. I started writing code out of genuine curiosity
                and haven't stopped since.
              </p>
              <p>
                Beyond the screen, I run a <strong>laptop selling business</strong> targeting university
                students mostly and also the general public — which sharpened my instincts for understanding users, communicating value clearly,
                and building things people actually need.
              </p>
              <p>
                I'm drawn to the intersection of <strong>clean engineering and real-world impact</strong>.
                Every project I take on is built to solve something real — not just to look good on a screen.
              </p>
              <p className="hi">
                Currently open to freelance projects, internships, and interesting problems.
              </p>

              <div className="btn-grid">
                <button className="btn-resume" onClick={downloadResume}>
                  <i className="ti ti-download"></i> Download my CV
                </button>
                <button className="btn-resume btn2">
                  <a href="./images/me.png" target="_parent">View my photo</a>
                </button>
              </div>
            </div>
            <div className="stat-col">
              <div className="stat reveal reveal-delay-1">
                <div className="stat-n">4+</div>
                <div className="stat-l">Years writing code</div>
              </div>
              <div className="stat reveal reveal-delay-2">
                <div className="stat-n g">10+</div>
                <div className="stat-l">Projects shipped</div>
              </div>
              <div className="stat reveal reveal-delay-3">
                <div className="stat-n y">5+</div>
                <div className="stat-l">Client served</div>
              </div>
              <div className="stat reveal reveal-delay-4">
                <div className="stat-n ">NG</div>
                <div className="stat-l">Based in Delta 🇳🇬</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── CONTACT ── */}
      <div className="wrap">
        <section id="contact">
          <div className="contact-box reveal">
            <div className="ct">
              <div className="ct-title">Let's build something together.</div>
              <div className="ct-sub">
                Whether you need a website, a web app, or just want to talk tech — I'm a message away. Fast response. Serious work.
              </div>
              <div className="ct-btns">
                <a href="mailto:ochukoakporue@email.com?subject=Web%20Development%20Opportunity&body=Hi%20DAGREAT%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20web%20development%20project.%0A%0AHere%27s%20a%20brief%20description%20of%20what%20I%20need%3A%0A%0A%5BDescribe%20your%20project%20here%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C%0A%5BYour%20name%5D" className="btn-p" style={{ display: 'inline-flex' }}>
                  <i className="ti ti-mail"></i> Send me an email
                </a>
                <button className="btn-resume" onClick={downloadResume}>
                  <i className="ti ti-download"></i> Download CV
                </button>
              </div>
            </div>
            <div className="ct ct-links">
              <a href="mailto:ochukoakporue@email.com?subject=Web%20Development%20Opportunity&body=Hi%20DAGREAT%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you%20for%20a%20web%20development%20project.%0A%0AHere%27s%20a%20brief%20description%20of%20what%20I%20need%3A%0A%0A%5BDescribe%20your%20project%20here%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C%0A%5BYour%20name%5D" className="cl">
                <i className="ti ti-mail cl-icon"></i>
                <div><div className="cl-lbl">Email</div><div className="cl-val">ochukoakporue@email.com</div></div>
              </a>
              <a href="https://github.com/ChukzzyDagreat" className="cl" target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-github cl-icon"></i>
                <div><div className="cl-lbl">GitHub</div><div className="cl-val">https://github.com/ChukzzyDagreat</div></div>
              </a>
              <a href="https://www.linkedin.com/in/ochuko-akporue-7ab342380" className="cl" target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-linkedin cl-icon"></i>
                <div><div className="cl-lbl">LinkedIn</div><div className="cl-val">linkedin.com/in/ochuko-akporue</div></div>
              </a>
              <a href="https://wa.me/2349031789469?text=Hi%20DAGREAT%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20like%20to%20hire%20you%20as%20a%20web%20developer.%20Can%20we%20talk%3F" className="cl" target="_blank" rel="noopener noreferrer">
                <i className="ti ti-brand-whatsapp cl-icon" style={{ color: 'var(--accent2)' }}></i>
                <div><div className="cl-lbl">WhatsApp</div><div className="cl-val">+2349031789469</div></div>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ── FOOTER ── */}
      <div className="wrap">
        <footer>
          <span className="fl">DaGreat</span>
          <span>Designed &amp; built in Delta, Nigeria — 2026</span>
          <span style={{ display: 'flex', gap: '14px' }}>
            <a href="https://github.com/ChukzzyDagreat" style={{ color: 'var(--muted)', fontSize: '18px' }} target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-github"></i></a>
            <a href="https://www.linkedin.com/in/ochuko-akporue-7ab342380" style={{ color: 'var(--muted)', fontSize: '18px' }} target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-linkedin"></i></a>
            <a href="https://twitter.com/DaGreat_83" style={{ color: 'var(--muted)', fontSize: '18px' }} target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-x"></i></a>
          </span>
        </footer>
      </div>
    </>
  );
}

export default App;