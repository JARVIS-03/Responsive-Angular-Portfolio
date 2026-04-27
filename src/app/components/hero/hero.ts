import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html'
})
export class Hero implements AfterViewInit {

  @ViewChild('typingText') typingText!: ElementRef;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  private isBrowser: boolean;
  private roles = ['Java Full Stack Developer', 'Java Microservices Developer', 'Java + AWS Developer'];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.startTyping();
    this.initMouseEffect();
  }

  startTyping() {
    const element = this.typingText.nativeElement;

    const type = () => {
      const currentRole = this.roles[this.roleIndex];

      if (this.isDeleting) {
        this.charIndex--;
      } else {
        this.charIndex++;
      }

      element.innerText = currentRole.substring(0, this.charIndex);

      let speed = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.charIndex === currentRole.length) {
        speed = 1500;
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        speed = 500;
      }

      setTimeout(type, speed);
    };

    type();
  }

  initMouseEffect() {
    const container = this.imageContainer.nativeElement;

    window.addEventListener('mousemove', (event) => {
      const x = (window.innerWidth / 2 - event.clientX) / 25;
      const y = (window.innerHeight / 2 - event.clientY) / 25;

      container.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}