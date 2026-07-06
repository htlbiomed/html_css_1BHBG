// Mobile menu toggle
const burger = document.getElementById('burger');
const links = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  links.classList.toggle('open');
});
// Close mobile menu after clicking a link
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); }));

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

// Formular per AJAX senden, damit die Seite nicht neu lädt
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  try{
    const res = await fetch(form.action, { method:'POST', body:data, headers:{ 'Accept':'application/json' } });
    if(res.ok){
      status.textContent = 'Danke! Deine Anfrage ist angekommen.';
      status.className = 'form-status ok';
      form.reset();
    } else {
      status.textContent = 'Da ist etwas schiefgelaufen. Bitte trag zuerst deine Formspree-ID im Code ein.';
      status.className = 'form-status err';
    }
  } catch(err){
    status.textContent = 'Verbindung fehlgeschlagen. Formspree-ID im Code eingetragen?';
    status.className = 'form-status err';
  }
});