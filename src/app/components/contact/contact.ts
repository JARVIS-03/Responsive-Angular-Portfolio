import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  sendEmail(e: Event) {
    e.preventDefault();

    if (!this.isBrowser) return;

    emailjs.sendForm(
      'service_uyivr7s',
      'template_6arczql',
      e.target as HTMLFormElement,
      '72Q77IxeINJOL9wcZ'
    ).then(
      () => {
        alert('Message sent successfully ✅');
      },
      (error: any) => {
        console.error(error);
        alert('Failed to send ❌');
      }
    );
  }
}
