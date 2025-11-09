import { DOMUtils } from '../utils';

interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export class AchievementsRenderer {
  static renderAchievement(achievement: Achievement): HTMLDivElement {
    const card = DOMUtils.createElement('div', 'achievement-card');
    
    card.innerHTML = `
      <div class="achievement-icon">
        <i class="${achievement.icon}"></i>
      </div>
      <h3>${achievement.title}</h3>
      <h4>${achievement.subtitle}</h4>
      <p>${achievement.description}</p>
    `;
    
    return card;
  }

  static renderAchievementsGrid(achievements: Achievement[]): void {
    const container = DOMUtils.querySelector<HTMLDivElement>('#achievements-grid');
    if (!container) return;

    achievements.forEach((achievement) => {
      const achievementElement = this.renderAchievement(achievement);
      container.appendChild(achievementElement);
    });
  }
}
