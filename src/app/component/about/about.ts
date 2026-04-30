import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
 srv: Service = inject(Service)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  packages() { this.router.navigate(['/packages']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }


  ngOnInit() {
    this.srv.refreshRecommendations()
    if (this.srv.curentcustomer.customersId == 0)
      this.router.navigate(['/homePage'])
  }
}
