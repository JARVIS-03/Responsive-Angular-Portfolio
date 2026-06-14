# My Responsive Angular Portfolio

A modern cloud-hosted portfolio built using Angular, AWS, Terraform, and GitHub Actions CI/CD.

## Live Demo

Portfolio URL:

https://d3p3q66572lnft.cloudfront.net

## Features

* Responsive Angular UI
* Smooth section-based scrolling
* Interactive chatbot assistant
* Skills section with technology icons
* Certifications gallery
* Experience timeline
* Project showcase
* Conference & event gallery
* Resume download
* Contact section
* Footer with social links

## Tech Stack

### Frontend

* Angular 21
* TypeScript
* HTML5
* CSS3
* Tailwind CSS

### Cloud & DevOps

* AWS S3
* AWS CloudFront
* GitHub Actions
* Terraform

## Project Structure

src/
├── app/
│ ├── components/
│ └── assets/
├── styles.css
└── main.ts

## Local Setup

Clone the repository:

git clone https://github.com/JARVIS-03/Responsive-Angular-Portfolio.git

Install dependencies:

npm install

Run locally:

ng serve

Open:

http://localhost:4200

## Production Build

ng build

Build output:

dist/Portfolio-Sky/browser

## CI/CD Pipeline

Every push to the main branch triggers:

1. Angular Build
2. S3 Upload
3. CloudFront Cache Invalidation

via GitHub Actions.

## Deployment Architecture

GitHub
↓
GitHub Actions
↓
AWS S3
↓
CloudFront CDN
↓
Portfolio Website

## Future Enhancements

* AI-powered Portfolio Assistant
* Custom Domain
* Visitor Analytics
* Terraform Remote State
* Advanced AWS Architecture Showcase

## Author

Kalaiyarasan S
