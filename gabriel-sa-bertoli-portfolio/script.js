(() => {
  const root = document.documentElement;
  const body = document.body;
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id], footer[id]')];
  const revealItems = [...document.querySelectorAll('.reveal')];
  const profileFrame = document.querySelector('.profile-frame');
  const heroVisual = document.querySelector('.hero-visual');
  const year = document.querySelector('#current-year');

  if (year) year.textContent = new Date().getFullYear();

  const showItem = (item) => item.classList.add('is-visible');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showItem(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px' });
    revealItems.forEach((item) => revealObserver.observe(item));

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { threshold: 0.2, rootMargin: '-25% 0px -55%' });
    sections.forEach((section) => navObserver.observe(section));
  } else {
    revealItems.forEach(showItem);
  }

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    root.style.setProperty('--scroll-progress', scrollable > 0 ? window.scrollY / scrollable : 0);
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  const closeMenu = () => {
    if (!menuToggle || !mainNav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
  };
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('open', !isOpen);
  });
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('click', (event) => {
    if (mainNav?.classList.contains('open') && !mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && heroVisual && profileFrame) {
    heroVisual.addEventListener('pointermove', (event) => {
      const bounds = heroVisual.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;
      profileFrame.style.setProperty('--parallax-x', `${x * 0.7}px`);
      profileFrame.style.setProperty('--parallax-y', `${y * 0.7}px`);
      heroVisual.style.setProperty('--parallax-x', `${x}px`);
      heroVisual.style.setProperty('--parallax-y', `${y}px`);
    });
    heroVisual.addEventListener('pointerleave', () => {
      profileFrame.style.setProperty('--parallax-x', '0px');
      profileFrame.style.setProperty('--parallax-y', '0px');
      heroVisual.style.setProperty('--parallax-x', '0px');
      heroVisual.style.setProperty('--parallax-y', '0px');
    });
  }

  const timeNode = document.querySelector('.status-live');
  if (timeNode) {
    const setStatusTitle = () => {
      timeNode.title = `Última atualização visual: ${new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }).format(new Date())}`;
    };
    setStatusTitle();
    window.setInterval(setStatusTitle, 60000);
  }

  body.classList.add('page-ready');
})();
