import { DOMUtils } from '../utils';
import { Skill } from '../data';

export class SkillsRenderer {
  static renderSkill(skill: Skill): HTMLDivElement {
    const skillItem = DOMUtils.createElement('div', 'skill-item');
    
    if (skill.icon) {
      const icon = DOMUtils.createElement('i');
      icon.className = skill.icon;
      skillItem.appendChild(icon);
    }
    
    const span = DOMUtils.createElement('span');
    span.textContent = skill.name;
    skillItem.appendChild(span);
    
    return skillItem;
  }

  static renderSkillsGrid(skills: Skill[], containerId: string): void {
    const container = DOMUtils.querySelector<HTMLDivElement>(`#${containerId}`);
    if (!container) return;

    skills.forEach((skill) => {
      const skillElement = this.renderSkill(skill);
      container.appendChild(skillElement);
    });
  }
}
