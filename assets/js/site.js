(() => {
  for (const year of document.querySelectorAll('[data-current-year]')) {
    year.textContent = String(new Date().getFullYear());
  }

  const header = document.querySelector('.site-header');
  const toggle = header?.querySelector('.nav-toggle');
  const nav = header?.querySelector('.site-nav');
  if (!toggle || !nav) return;

  const setOpen = open => {
    nav.toggleAttribute('data-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!nav.hasAttribute('data-open')));

  nav.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });

  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.hasAttribute('data-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  header.addEventListener('focusout', event => {
    if (!header.contains(event.relatedTarget)) setOpen(false);
  });

  document.addEventListener('pointerdown', event => {
    if (!header.contains(event.target)) setOpen(false);
  });

  window.matchMedia('(max-width: 52rem)').addEventListener('change', () => setOpen(false));

  toggle.hidden = false;
  header.setAttribute('data-enhanced', '');
})();
