import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  
  selectedImage: string | null = null;

  images = [
    'assets/images/event photo gallery/event1.jpeg',
    'assets/images/event photo gallery/event2.jpeg',
    'assets/images/event photo gallery/event3.jpeg',
    'assets/images/event photo gallery/event4.jpeg',
    'assets/images/event photo gallery/event5.jpeg',
    'assets/images/event photo gallery/event6.jpeg'
  ];

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
