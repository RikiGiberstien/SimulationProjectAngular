import { Component } from '@angular/core';
import { Customers } from '../../customers/customers';
import { RouterOutlet } from '@angular/router';
import { Orders } from '../../orders/orders';

@Component({
  selector: 'app-picture-details',
  imports: [Customers, RouterOutlet, Orders],
  templateUrl: './picture-details.html',
  styleUrl: './picture-details.scss'
})
export class PictureDetails {
images: string[] = [
    "1.png",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
    //לשים את כל התצמונות בPUBLIC 
  ];
  currentIndex = 0;



  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  select(index: number) {
    this.currentIndex = index
  }

}
