/* Scroll Reveal — anima elementos [data-reveal] quando entram no viewport.
   Sem dependências. ~25 linhas. Respeita prefers-reduced-motion via CSS.        */
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  // fallback: navegadores antigos sem IntersectionObserver — exibe tudo
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  els.forEach(el => obs.observe(el));
})();
