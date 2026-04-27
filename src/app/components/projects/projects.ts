import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  selectedProject: any = null;

  projects = [
    {
      title: 'E-Com Application',
      description: 'E-Commerce Multi Services Application with Java & Spring Boot',
      tech: 'Java • Spring Boot • Maven • PostgreSQL',
      github: 'https://github.com/JARVIS-03/ecom-microservices.git'
    },
    {
      title: 'Autonomous Cloud Infrastructure',
      description: 'Production-Grade AWS Infrastructure using Terraform',
      tech: 'Terraform • AWS',
      github: 'https://github.com/JARVIS-03/Terraform-AWS.git'
    },
    {
      title: 'Automobile Management System',
      description: 'Web application for managing automobile inventory and sales',
      tech: 'HTML • CSS • JavaScript • MySQL ',
      github: 'https://github.com/JARVIS-03/AMS.git'
    }
  ];

  openProject(project: any) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}