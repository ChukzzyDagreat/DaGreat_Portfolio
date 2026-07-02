/* ── THEME TOGGLE ── */
const html = document.documentElement;
const btn = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');
const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);
 
function setTheme(t){
  html.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  icon.className = t === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
}
btn.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
 
/* ── SCROLL REVEAL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));
 
/* ── RESUME DOWNLOAD ── */
function downloadResume(){
  // Generates a simple placeholder resume as a text file.
  // Replace this with a real PDF link: window.open('resume.pdf', '_blank');
  const content = `DÄGRÊÄT — Web Developer Resume
================================
Location: Lagos, Nigeria
Email: your@email.com
GitHub: github.com/dagreat
LinkedIn: linkedin.com/in/dagreat
 
SKILLS
------
Frontend: HTML5, CSS3, JavaScript, React, Tailwind CSS
Backend: Node.js, Express, REST APIs, Java
Database: MongoDB, MySQL
Tools: Git, Linux (Zorin OS), Figma
 
PROJECTS
--------
• Student CGPA Calculator — React, Tailwind, LocalStorage
• Laptop Store Landing Page — HTML, CSS, Vanilla JS
• Student Info Manager — Java, OOP, CLI
• Portfolio — HTML, CSS, Vanilla JS
 
EDUCATION
---------
B.Sc. Computer Science — [Your University], Lagos (In progress)
 
EXPERIENCE
----------
Laptop Reseller (Self-employed) — 2023–Present
  Sourcing, pricing, and selling laptops to university students in Lagos.
 
CONTACT
-------
ochukoakporue@email.com | +234 9031789469
`;
  const blob = new Blob([content], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'DAGREAT_Resume.txt';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}