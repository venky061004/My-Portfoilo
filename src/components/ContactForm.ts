import { DOMUtils } from '../utils';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactForm {
  private form: HTMLFormElement | null;

  constructor() {
    this.form = DOMUtils.querySelector<HTMLFormElement>('#contact-form');
    this.init();
  }

  private init(): void {
    if (!this.form) return;
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }

  private getFormData(): ContactFormData {
    const nameInput = DOMUtils.querySelector<HTMLInputElement>('#name');
    const emailInput = DOMUtils.querySelector<HTMLInputElement>('#email');
    const subjectInput = DOMUtils.querySelector<HTMLInputElement>('#subject');
    const messageInput = DOMUtils.querySelector<HTMLTextAreaElement>('#message');

    return {
      name: nameInput?.value || '',
      email: emailInput?.value || '',
      subject: subjectInput?.value || '',
      message: messageInput?.value || ''
    };
  }

  private handleSubmit(e: Event): void {
    e.preventDefault();
    
    const formData = this.getFormData();
    
    console.log('Form submitted:', formData);
    
    alert('Thank you for your message! I will get back to you soon.');
    
    this.form?.reset();
  }
}
