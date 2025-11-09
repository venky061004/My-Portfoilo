import { Campaign, Creative } from '../types';

export class Campaigns {
    private campaigns: Campaign[];
    private creatives: Creative[];

    constructor(campaigns: Campaign[], creatives: Creative[]) {
        this.campaigns = campaigns;
        this.creatives = creatives;
    }

    render(): void {
        this.renderCampaigns();
        this.renderCreatives();
    }

    private renderCampaigns(): void {
        const container = document.getElementById('campaigns-list');
        if (!container) return;

        container.innerHTML = this.campaigns.map(campaign => `
            <div class="document-card">
                <div class="document-header">
                    <div class="document-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="document-info">
                        <h4>${campaign.title}</h4>
                        <div class="document-meta">${campaign.platform}</div>
                    </div>
                </div>
                <p class="document-description">${campaign.description}</p>
                <div class="document-tags">
                    ${campaign.tags.map(tag => `<span class="document-tag">${tag}</span>`).join('')}
                </div>
                <a href="${campaign.documentUrl || '#'}" target="_blank" class="view-document-btn">
                    <i class="fas fa-file-alt"></i>
                    View Campaign Document
                </a>
            </div>
        `).join('');
    }

    private renderCreatives(): void {
        const container = document.getElementById('creatives-list');
        if (!container) return;

        container.innerHTML = this.creatives.map(creative => `
            <div class="document-card">
                <div class="document-header">
                    <div class="document-icon">
                        <i class="fas fa-palette"></i>
                    </div>
                    <div class="document-info">
                        <h4>${creative.title}</h4>
                        <div class="document-meta">${creative.type}</div>
                    </div>
                </div>
                <p class="document-description">${creative.description}</p>
                <div class="document-tags">
                    ${creative.tags.map(tag => `<span class="document-tag">${tag}</span>`).join('')}
                </div>
                <a href="${creative.documentUrl || '#'}" target="_blank" class="view-document-btn">
                    <i class="fas fa-file-image"></i>
                    View Creative Assets
                </a>
            </div>
        `).join('');
    }
}
