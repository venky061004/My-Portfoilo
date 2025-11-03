import { DOMUtils } from '../utils';

export class Navigation {
  private navbar: HTMLElement | null;
  private sections: NodeListOf<HTMLElement>;
  private navLinks: NodeListOf<HTMLAnchorElement>;
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.navbar = DOMUtils.querySelector<HTMLElement>('.navbar');
    this.sections = DOMUtils.querySelectorAll<HTMLElement>('section[id]');
    this.navLinks = DOMUtils.querySelectorAll<HTMLAnchorElement>('.nav-menu a');
    this.init();
  }

  private init(): void {
    this.setupSmoothScroll();
    this.setupIntersectionObserver();
  }

  private setupSmoothScroll(): void {
    DOMUtils.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href) return;

        const target = DOMUtils.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  private setupIntersectionObserver(): void {
    const options: IntersectionObserverInit = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: '-80px 0px -80px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          const sectionId = entry.target.getAttribute('id');
          this.updateNavbarForSection(sectionId || '');
          this.updateActiveLink(sectionId || '');
        }
      });
    }, options);

    this.sections.forEach((section) => {
      this.observer?.observe(section);
    });
  }

  private updateNavbarForSection(sectionId: string): void {
    if (!this.navbar) return;

    // Add transition class
    this.navbar.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

    switch (sectionId) {
      case 'home':
        this.applyHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(-45deg, rgba(0, 0, 0, 0.85), rgba(20, 20, 20, 0.85), rgba(30, 30, 30, 0.85), rgba(10, 10, 10, 0.85))',
          '1px solid rgba(255, 255, 255, 0.2)',
          '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 255, 255, 0.05) inset',
          '#ffffff'
        );
        break;
      case 'about':
        this.removeHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(250, 250, 250, 0.98), rgba(245, 245, 245, 0.98))',
          '1px solid rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '#000000'
        );
        break;
      case 'experience':
        this.removeHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(135deg, rgba(240, 240, 240, 0.98), rgba(245, 245, 245, 0.98), rgba(250, 250, 250, 0.98))',
          '1px solid rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '#000000'
        );
        break;
      case 'performance':
        this.removeHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 248, 248, 0.98), rgba(255, 255, 255, 0.98))',
          '1px solid rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '#000000'
        );
        break;
      case 'funnel':
        this.removeHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(135deg, rgba(248, 248, 248, 0.98), rgba(240, 240, 240, 0.98), rgba(245, 245, 245, 0.98))',
          '1px solid rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '#000000'
        );
        break;
      case 'skills':
        this.removeHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(250, 250, 250, 0.98), rgba(255, 255, 255, 0.98))',
          '1px solid rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '#000000'
        );
        break;
      case 'achievements':
        this.removeHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(135deg, rgba(245, 245, 245, 0.98), rgba(250, 250, 250, 0.98), rgba(245, 245, 245, 0.98))',
          '1px solid rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '#000000'
        );
        break;
      case 'contact':
        this.removeHeroNavbarStyle();
        this.applyNavbarTheme(
          'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 248, 248, 0.98), rgba(255, 255, 255, 0.98))',
          '1px solid rgba(0, 0, 0, 0.1)',
          '0 8px 32px rgba(0, 0, 0, 0.1)',
          '#000000'
        );
        break;
    }
  }

  private applyNavbarTheme(
    background: string,
    border: string,
    shadow: string,
    textColor: string
  ): void {
    if (!this.navbar) return;

    this.navbar.style.background = background;
    this.navbar.style.borderBottom = border;
    this.navbar.style.boxShadow = shadow;

    // Update logo
    const logo = DOMUtils.querySelector<HTMLElement>('.logo');
    if (logo) {
      logo.style.color = textColor;
      logo.style.borderColor = textColor;
    }

    // Update nav links
    this.navLinks.forEach((link) => {
      link.style.color = textColor;
    });
  }

  private applyHeroNavbarStyle(): void {
    if (!this.navbar) return;

    // Special hero section styling
    this.navbar.classList.add('navbar-hero');
    this.navbar.style.background = 'linear-gradient(-45deg, rgba(0, 0, 0, 0.85), rgba(20, 20, 20, 0.85), rgba(30, 30, 30, 0.85), rgba(10, 10, 10, 0.85))';
    this.navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
    this.navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 255, 255, 0.05) inset';
  }

  private removeHeroNavbarStyle(): void {
    if (!this.navbar) return;
    this.navbar.classList.remove('navbar-hero');
  }

  private updateActiveLink(sectionId: string): void {
    this.navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
  }
}
