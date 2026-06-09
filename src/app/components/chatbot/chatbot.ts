import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
export class Chatbot {
  isOpen = false;

  userInput = '';

  messages: Message[] = [
    {
      sender: 'bot',
      text: 'Hi 👋 I am Kalaiyarasan\'s Portfolio Assistant. Ask me anything.'
    }
  ];

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

    if (question.includes('skill')) {
      response =
        'My primary skills include Angular, Spring Boot, Java, AWS, Docker, Terraform and Microservices.';
    }

    else if (question.includes('project')) {
      response =
        'I have worked on TurfEase, Payment Service and SmartSpend Insights.';
    }

    else if (question.includes('aws')) {
      response =
        'I have experience with AWS, ECS Fargate, CloudFront, S3, Route53 and Terraform.';
    }

    else if (question.includes('contact')) {
      response =
        'You can contact me through LinkedIn, GitHub or the Contact section.';
    }

    setTimeout(() => {
      this.messages.push({
        sender: 'bot',
        text: response
      });
    }, 500);

    this.userInput = '';
  }
}
