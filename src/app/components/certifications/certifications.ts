import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {selectedCert: any = null;

  certifications = [
    {
      logo: 'assets/images/logo/aws-logo.png',
      title: 'AWS Certified AI Practitioner',
      org: 'Amazon Web Services',
      link: 'https://www.credly.com/badges/dd28bfac-2122-4e78-acca-93ca326765ab/linked_in_profile',
      image: 'assets/images/certificate/aws.jpeg'
    },
    {
      logo: 'assets/images/logo/terraform-logo.png',
      title: 'HashiCorp Certified: Terraform Associate (003)',
      org: 'HashiCorp',
      link: 'https://www.credly.com/badges/ad903595-32da-4619-a6af-338b5c2764f9/linked_in_profile',
      image: 'assets/images/certificate/terraform.jpeg'
    },
    {
      logo: 'assets/images/logo/gcp-logo.png',
      title: 'Associate Cloud Engineer Certification',
      org: 'Google Cloud',
      link: 'https://www.credly.com/badges/ee3434c9-90bb-46f4-80b9-06e270530df4/linked_in_profile',
      image: 'assets/images/certificate/gcp.jpeg'
    },
    {
      logo: 'assets/images/logo/oracle-logo.png',
      title: 'Oracle Certified Associate, Java SE 8 Programmer',
      org: 'Oracle',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=13644A24D8ED3ACE97017A078A865928E96645DA174E0BD6039F54BD5C96116D',
      image: 'assets/images/certificate/oracle.jpeg'
    }
  ];

  openCert(cert: any) {
    this.selectedCert = cert;
  }

  closeCert() {
    this.selectedCert = null;
  }
}