import { DOMUtils } from '../utils';
import { WorkExperience } from '../data';

export class ExperienceRenderer {
  static renderExperience(exp: WorkExperience): HTMLDivElement {
    const expCard = DOMUtils.createElement('div', 'experience-card');
    
    expCard.innerHTML = `
      <div class="exp-header">
        <div class="exp-title-section">
          <h3>${exp.company}</h3>
          <span class="exp-type ${exp.type.toLowerCase()}">${exp.type}</span>
        </div>
        <div class="exp-meta">
          <p class="exp-role">${exp.role}</p>
          <p class="exp-period"><i class="fas fa-calendar"></i> ${exp.period}</p>
          <p class="exp-location"><i class="fas fa-map-marker-alt"></i> ${exp.location}</p>
        </div>
      </div>
      
      <p class="exp-description">${exp.description}</p>
      
      <div class="exp-metrics">
        ${exp.metrics.map(metric => `
          <div class="metric-item">
            <div class="metric-value">${metric.value}</div>
            <div class="metric-label">${metric.label}</div>
          </div>
        `).join('')}
      </div>
      
      <div class="exp-details">
        <h4>Key Metrics & Details</h4>
        <ul>
          ${exp.details.map(detail => `
            <li><strong>${detail.label}:</strong> ${detail.value}</li>
          `).join('')}
        </ul>
      </div>
    `;
    
    return expCard;
  }

  static renderExperienceGrid(experiences: WorkExperience[]): void {
    const container = DOMUtils.querySelector<HTMLDivElement>('#experience-grid');
    if (!container) return;

    experiences.forEach((exp) => {
      const expElement = this.renderExperience(exp);
      container.appendChild(expElement);
    });
  }
}
