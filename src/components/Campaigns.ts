import { Campaign } from '../types';

export class Campaigns {
    private campaigns: Campaign[];
    private currentSlide: number = 0;
    private autoPlayInterval: number | null = null;
    private progressInterval: number | null = null;

    constructor(campaigns: Campaign[]) {
        this.campaigns = campaigns;
    }

    render(): void {
        const container = document.querySelector('#campaigns .container');
        if (!container) return;

        const slideshowHTML = `
            <div class="campaigns-slideshow">
                <div class="slideshow-container">
                    <div class="slideshow-info" id="slideshow-info">
                        ${this.renderSlideInfo(0)}
                    </div>
                    <div class="slideshow-images">
                        <div class="slide-track">
                            ${this.campaigns.map((campaign, index) => `
                                <div class="campaign-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
                                    <div class="slide-image-wrapper">
                                        <img src="${campaign.image}" alt="${campaign.title}">
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="slideshow-controls">
                    <button class="slide-btn" id="prev-slide">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <div class="slide-indicators">
                        ${this.campaigns.map((_, index) => `
                            <div class="slide-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></div>
                        `).join('')}
                    </div>
                    <button class="slide-btn" id="next-slide">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                <div class="slideshow-progress">
                    <div class="progress-bar" id="progress-bar"></div>
                </div>
            </div>
        `;

        const existingSlideshow = container.querySelector('.campaigns-slideshow');
        if (existingSlideshow) {
            existingSlideshow.remove();
        }

        container.insertAdjacentHTML('beforeend', slideshowHTML);
        this.attachEventListeners();
        this.startAutoPlay();
    }

    private renderSlideInfo(index: number): string {
        const campaign = this.campaigns[index];
        return `
            <div class="campaign-number">CAMPAIGN ${String(index + 1).padStart(2, '0')} / ${String(this.campaigns.length).padStart(2, '0')}</div>
            <h3>${campaign.title}</h3>
            <div class="campaign-platform">${campaign.platform}</div>
            <p>${campaign.description}</p>
            <div class="slideshow-tags">
                ${campaign.tags.map(tag => `<span class="slideshow-tag">${tag}</span>`).join('')}
            </div>
        `;
    }

    private attachEventListeners(): void {
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const indicators = document.querySelectorAll('.slide-indicator');

        prevBtn?.addEventListener('click', () => this.prevSlide());
        nextBtn?.addEventListener('click', () => this.nextSlide());

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
    }

    private goToSlide(index: number): void {
        const slides = document.querySelectorAll('.campaign-slide');
        const indicators = document.querySelectorAll('.slide-indicator');
        const infoContainer = document.getElementById('slideshow-info');

        slides[this.currentSlide]?.classList.remove('active');
        slides[this.currentSlide]?.classList.add('prev');
        indicators[this.currentSlide]?.classList.remove('active');

        this.currentSlide = index;

        slides[this.currentSlide]?.classList.remove('prev');
        slides[this.currentSlide]?.classList.add('active');
        indicators[this.currentSlide]?.classList.add('active');

        if (infoContainer) {
            infoContainer.style.opacity = '0';
            setTimeout(() => {
                infoContainer.innerHTML = this.renderSlideInfo(this.currentSlide);
                infoContainer.style.opacity = '1';
            }, 300);
        }

        this.resetAutoPlay();
    }

    private nextSlide(): void {
        const nextIndex = (this.currentSlide + 1) % this.campaigns.length;
        this.goToSlide(nextIndex);
    }

    private prevSlide(): void {
        const prevIndex = (this.currentSlide - 1 + this.campaigns.length) % this.campaigns.length;
        this.goToSlide(prevIndex);
    }

    private startAutoPlay(): void {
        this.stopAutoPlay();
        
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.classList.remove('animating');
            void progressBar.offsetWidth; // Trigger reflow
            progressBar.classList.add('animating');
        }

        this.autoPlayInterval = window.setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    private stopAutoPlay(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
        }
    }

    private resetAutoPlay(): void {
        this.startAutoPlay();
    }
}
