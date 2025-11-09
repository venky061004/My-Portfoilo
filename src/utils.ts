export class DOMUtils {
  static querySelector<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector<T>(selector);
  }

  static querySelectorAll<T extends HTMLElement>(selector: string): NodeListOf<T> {
    return document.querySelectorAll<T>(selector);
  }

  static createElement<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className?: string,
    innerHTML?: string
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
  }
}

export class AnimationUtils {
  static observeElements(selector: string): void {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    DOMUtils.querySelectorAll(selector).forEach((el) => observer.observe(el));
  }
}
