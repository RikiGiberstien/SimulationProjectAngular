import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Service } from '../../services/service';
import { Customers } from '../customers/customers';
import { Orders } from '../orders/orders';

@Component({
  selector: 'app-packages',
  imports: [Customers, RouterOutlet, Orders],
  templateUrl: './packages.html',
  styleUrl: './packages.scss'
})
export class Packages {
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  srv: Service = inject(Service)
   homePage() { this.router.navigate(['/homePage']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }    

  projects = [{
    id: 1,
    title: 'הדמיית דירה יוקרתית',
    description: 'הדמיה תלת-ממדית לדירת יוקרה בתל אביב.',
image: "מטבח/4.png",
    imageArray:[
    "1.png",
    "2.png",
    // "3.jpg",
    "4.jpg",
    // "5.jpg",
    // "6.jpg",
    "7.jpg"
  ]
  
  },
  {
    id: 2,
    title: 'עיצוב משרד מודרני',
    description: 'הדמיה למשרד בעיצוב מודרני ונקי.',
    image: "מטבח/2.png",
    imageArray:[
    // "1.png",
    // "2.png",
     "3.jpg",
    "4.jpg",
    "5.jpg",
    // "6.jpg",
    "7.jpg"
  ]
  },
  {
    id: 3,
    title: 'וילה כפרית',
    description: 'הדמיה חיצונית ופנימית לוילה בסגנון כפרי.',
    image: "מטבח/3.png",
     imageArray:[
    // "1.png",
    // "2.png",
     "3.jpg",
    "4.jpg",
    "5.jpg",
    // "6.jpg",
    "7.jpg"
  ]
  }

  ];
  pictureDetails(id: number) {
    this.router.navigate(['/pictureDetails'])
  }
  
}