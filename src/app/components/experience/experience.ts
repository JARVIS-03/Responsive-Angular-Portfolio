import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  experiences = [
    {
      role: 'Associate Engineer',
      company: 'Virtusa',
      duration: '17 May 2022 - Present',
      skills: 'Java, Spring Boot, Microservices, Terraform, Jenkins, Docker, AWS',
      description: [
        'Client: J.P. Morgan Chase – eCoupon Platform',
        'Worked on the eCoupon platform for J.P. Morgan Chase, contributing to the development and enhancement of Java- based microservices supporting digital offers and promotions.',
        'Designed and developed RESTful microservices using Java and Spring Boot, following clean code and enterprise design principles.',
        'Integrated microservices with downstream systems and ensured reliability through proper exception handling and logging.',
        'Automated infrastructure provisioning and configuration using Terraform, supporting scalable and consistent cloud environments.',
        'Supported CI/CD pipelines using Jenkins, enabling automated builds, testing, and deployments.',
        'Worked on FormBreak for document generation and processing as part of business workflows.',
        'Containerized applications using Docker and assisted with cloud deployments.',
        'Collaborated closely with cross-functional teams in an Agile environment, participating in sprint ceremonies, defect triage, and code reviews.'
      ]
    }
  ];
}