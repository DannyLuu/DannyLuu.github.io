    (() => {
      const header = document.querySelector('.site-header');
      const toggle = document.querySelector('.nav-toggle');
      const nav = document.querySelector('.site-nav');
      const links = [...nav.querySelectorAll('a')];
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const closeNav = () => {
        nav.dataset.open = 'false';
        toggle.setAttribute('aria-expanded', 'false');
      };

      toggle.addEventListener('click', () => {
        const open = nav.dataset.open !== 'true';
        nav.dataset.open = String(open);
        toggle.setAttribute('aria-expanded', String(open));
      });
      links.forEach(link => link.addEventListener('click', closeNav));

      const syncHeader = () => { header.dataset.scrolled = String(window.scrollY > 24); };
      syncHeader();
      window.addEventListener('scroll', syncHeader, { passive: true });

      const sections = [...document.querySelectorAll('main section[id]')];
      const localLinks = links.filter(link => link.getAttribute('href').startsWith('#'));
      if ('IntersectionObserver' in window && localLinks.length) {
        const sectionObserver = new IntersectionObserver(entries => {
          entries.filter(entry => entry.isIntersecting).forEach(entry => {
            localLinks.forEach(link => link.removeAttribute('aria-current'));
            const active = nav.querySelector(`a[href="#${entry.target.id}"]`);
            if (active) active.setAttribute('aria-current', 'true');
          });
        }, { rootMargin: '-25% 0px -65% 0px' });
        sections.forEach(section => sectionObserver.observe(section));
      }

      const revealItems = [...document.querySelectorAll('[data-reveal]')];
      if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach(item => item.classList.add('revealed'));
      } else {
        const revealObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: .12 });
        revealItems.forEach(item => revealObserver.observe(item));
      }
    })();
