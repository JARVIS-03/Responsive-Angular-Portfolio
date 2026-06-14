import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Message {
  sender: string;
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})

export class Chatbot implements OnInit {
  isOpen = false;
constructor(private http: HttpClient) {}
  userInput = '';

  messages: Message[] = [
    {
      sender: 'bot',
      text: 'Hi 👋 I am Kalaiyarasan\'s Portfolio Assistant. Ask me anything.'
    }
  ];
  suggestions = [
  'Tell me about yourself',
  'What are your skills?',
  'Client work experience?',
  'Show AWS experience',
  'Tell me about Projects worked on!',
  'How can I contact you?'
];
  isTyping: boolean | undefined;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {

    if (!this.userInput.trim()) return;

    const question = this.userInput.toLowerCase();

    this.messages.push({
      sender: 'user',
      text: this.userInput
    });

    let response = 'I do not have information about that yet.';

    if (question.includes('skill') || question.includes('skills')) {
      response =
      `${this.portfolioData.name} has skills in ${this.portfolioData.skills.join(', ')}`;
        // 'My primary skills include Java, Spring Boot, Microservices, AWS, Docker, Terraform and Angular.';
    }

    else if (question.includes('yourself') ||
  question.includes('about you') ||
  question.includes('who are you') ||
  question.includes('tell me about yourself')) {
      response =
      `${this.portfolioData.name} is a ${this.portfolioData.role}. ${this.portfolioData.summary}`;
        // 'Hi, I\'m Kalaiyarasan, a Software Engineer specializing in Angular, Java, Spring Boot, Microservices, AWS, Docker, and Terraform. I enjoy building scalable applications, cloud-native solutions, and modern web experiences.';
    }

    else if (question.includes('project') || question.includes('projects')) {
      response =
      `${this.portfolioData.name} worked on ${this.portfolioData.projects.map((p: any) => p.name).join(', ')}`;
        // 'I have worked on E-Com Application, Autonomous Cloud Infrastructure and Automobile Management System.';
    }

    else if (question.includes('client') || question.includes('client work')) {
      response =
      `${this.portfolioData.name} worked at ${this.portfolioData.workexperience.map((w: any) => w.company).join(', ')}`;
        // 'Worked on the eCoupon platform for J.P. Morgan Chase, contributing to the development and enhancement of Java- based microservices supporting digital offers and promotions.';
    }

    else if (question.includes('aws')) {
      response =
        `${this.portfolioData.name} has experience with AWS, ECS Fargate, Eventbridge, S3, Route53 and Cloud Watch.`;
        // 'I have experience with AWS, ECS Fargate, Eventbridge, S3, Route53 and Cloud Watch.';
    }

    else if (question.includes('contact') || question.includes('linkedin') || question.includes('github')) {
      response =
      `${this.portfolioData.name} can be contacted through LinkedIn: ${this.portfolioData.contact.linkedin} and GitHub: ${this.portfolioData.contact.github}`;
        // 'You can contact me through LinkedIn, GitHub or the Contact section.';
    }

    this.isTyping = true;

setTimeout(() => {

  this.isTyping = false;

  this.messages.push({
    sender: 'bot',
    text: response
  });

}, 200);

    this.userInput = '';
  }

  portfolioData: any;

ngOnInit() {

  this.http
    .get('assets/data/portfolio-data.json')
    .subscribe(data => {
      this.portfolioData = data;
    });

}
}
