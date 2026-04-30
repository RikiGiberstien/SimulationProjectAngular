import { Component, inject } from '@angular/core';
import { Customers } from '../customers/customers';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Service } from '../../services/service';

@Component({
  selector: 'app-recommendations',
  imports: [Customers, RouterOutlet, AsyncPipe],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss'
})
export class Recommendations {
  srv: Service = inject(Service)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  packages() { this.router.navigate(['/packages']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  aboute() { this.router.navigate(['/about']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }


  ngOnInit() {
    this.srv.refreshRecommendations()
    if (this.srv.curentcustomer.customersId == 0)
      this.router.navigate(['/homePage'])
  }
}
