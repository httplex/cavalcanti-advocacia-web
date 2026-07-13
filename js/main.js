document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  const whatsappFloat = document.querySelector('.whatsapp-float');

  if (whatsappFloat) {
    const revealAfter = 250;

    const toggleWhatsapp = () => {
      if (window.scrollY > revealAfter) {
        whatsappFloat.classList.add('is-visible');
      } else {
        whatsappFloat.classList.remove('is-visible');
      }
    };

    toggleWhatsapp();
    window.addEventListener('scroll', toggleWhatsapp, { passive: true });
  }
});
