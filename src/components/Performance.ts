import { DOMUtils } from '../utils';

interface PerformanceMetrics {
  [key: string]: string;
}

export class PerformanceRenderer {
  static renderMetric(label: string, value: string): string {
    return `
      <div class="metric-box">
        <div class="metric-value">${value}</div>
        <div class="metric-label">${label}</div>
      </div>
    `;
  }

  static renderMetaMetrics(metrics: PerformanceMetrics): void {
    const container = DOMUtils.querySelector<HTMLDivElement>('#meta-metrics');
    if (!container) return;

    container.innerHTML = `
      ${this.renderMetric('Revenue', metrics.revenue)}
      ${this.renderMetric('ROAS', metrics.roas)}
      ${this.renderMetric('Spend', metrics.spend)}
      ${this.renderMetric('Purchases', metrics.purchases)}
      ${this.renderMetric('Impressions', metrics.impressions)}
      ${this.renderMetric('Reach', metrics.reach)}
      ${this.renderMetric('CPC', metrics.cpc)}
      ${this.renderMetric('CPM', metrics.cpm)}
    `;
  }

  static renderGoogleMetrics(metrics: PerformanceMetrics): void {
    const container = DOMUtils.querySelector<HTMLDivElement>('#google-metrics');
    if (!container) return;

    container.innerHTML = `
      ${this.renderMetric('Revenue', metrics.revenue)}
      ${this.renderMetric('Spend', metrics.spend)}
      ${this.renderMetric('Clicks', metrics.clicks)}
      ${this.renderMetric('Impressions', metrics.impressions)}
      ${this.renderMetric('CPC', metrics.cpc)}
      ${this.renderMetric('ROAS', metrics.roas)}
    `;
  }
}
