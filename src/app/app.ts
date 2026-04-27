import { AfterViewInit, Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { isPlatformBrowser } from '@angular/common';
import { Skills } from "./components/skills/skills";
import { Linkedin } from "./components/linkedin/linkedin";
import { Certifications } from "./components/certifications/certifications";
import { Resume } from "./components/resume/resume";
import { Gallery } from "./components/gallery/gallery";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Projects, Contact, Skills, Linkedin, Certifications, Resume, Gallery, Experience, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

      elements.forEach(el => observer.observe(el));
  
      const spotlight = document.getElementById('cursor-spotlight');
  
      window.addEventListener('mousemove', (e) => {
        if (spotlight) {
          spotlight.style.left = `${e.clientX}px`;
          spotlight.style.top = `${e.clientY}px`;
        }
      });

      
  
    }
    
  }
