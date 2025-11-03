import { Certification } from '../types';

export class Certifications {
    private certifications: Certification[];

    constructor(certifications: Certification[]) {
        this.certifications = certifications;
    }

    render(): void {
        const grid = document.getElementById('certifications-grid');
        if (!grid) return;

        grid.innerHTML = this.certifications.map(cert => `
            <div class="certification-card">
                <div class="certification-image">
                    <img src="${cert.image}" alt="${cert.title}">
                    ${cert.verified ? '<span class="certification-badge">VERIFIED</span>' : ''}
                </div>
                <div class="certification-content">
                    <h3>${cert.title}</h3>
                    <div class="certification-issuer">
                        <i class="fas fa-building"></i>
                        <span>${cert.issuer}</span>
                    </div>
                    <div class="certification-date">
                        <i class="fas fa-calendar"></i> ${cert.date}
                    </div>
                    ${cert.link ? `
                        <a href="${cert.link}" target="_blank" class="certification-link">
                            View Credential <i class="fas fa-arrow-right"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }
}
