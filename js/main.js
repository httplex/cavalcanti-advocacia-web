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

  const filterButtons = document.querySelectorAll('.materials__filter');
  const materialCards = document.querySelectorAll('.material-card');

  if (filterButtons.length && materialCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('is-active'));
        button.classList.add('is-active');

        const filter = button.dataset.filter;

        materialCards.forEach((card) => {
          const matches = filter === 'todos' || card.dataset.type === filter;
          card.style.display = matches ? '' : 'none';
        });
      });
    });
  }
});
