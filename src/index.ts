import './styles.css';
import './styles-navbar-hero.css';
import './styles-campaigns.css';
import { Navigation } from './components/Navigation';
import { SkillsRenderer } from './components/Skills';
import { ContactForm } from './components/ContactForm';
import { ExperienceRenderer } from './components/Experience';
import { PerformanceRenderer } from './components/Performance';
import { AchievementsRenderer } from './components/Achievements';
import { Campaigns } from './components/Campaigns';
import { Certifications } from './components/Certifications';
import { AnimationUtils } from './utils';
import { skillsData, workExperience, performanceMetrics, achievements, campaigns, certifications } from './data';

class Portfolio {
  constructor() {
    this.init();
  }

  private init(): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  private setup(): void {
    new Navigation();

    SkillsRenderer.renderSkillsGrid(skillsData.development, 'development-skills');
    SkillsRenderer.renderSkillsGrid(skillsData.frameworks, 'frameworks-skills');
    SkillsRenderer.renderSkillsGrid(skillsData.learning, 'learning-skills');
    SkillsRenderer.renderSkillsGrid(skillsData.other, 'other-skills');

    ExperienceRenderer.renderExperienceGrid(workExperience);

    PerformanceRenderer.renderMetaMetrics(performanceMetrics.meta);
    PerformanceRenderer.renderGoogleMetrics(performanceMetrics.google);

    const campaignsComponent = new Campaigns(campaigns);
    campaignsComponent.render();

    const certificationsComponent = new Certifications(certifications);
    certificationsComponent.render();

    AchievementsRenderer.renderAchievementsGrid(achievements);

    new ContactForm();

    AnimationUtils.observeElements('.skill-item, .experience-card, .achievement-card, .stat-card, .dashboard-card, .funnel-card, .campaign-item, .certification-card');
  }
}

new Portfolio();
