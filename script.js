// Animación simple al hacer scroll con IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll("section, footer");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeElements.forEach((el) => {
    el.classList.add("fade");
    observer.observe(el);
  });
});

document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);

    if (!targetSection) return;

    // Altura fija del header (navbar), ajustar si cambia
    const headerOffset = document.querySelector('.navbar').offsetHeight;
    
    // Posición del elemento objetivo
    const elementPosition = targetSection.getBoundingClientRect().top;
    
    // Posición a la que queremos hacer scroll (actual scroll + posición del elemento - offset navbar)
    const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Aquí podrías hacer la llamada a backend con fetch o Ajax
  // Pero por ahora solo mostraremos mensaje de éxito

  formMessage.textContent = '¡Gracias por contactarnos! Te responderemos pronto.';
  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
      banner.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.style.display = 'none';
    });
  });