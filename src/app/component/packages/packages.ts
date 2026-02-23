import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Service } from '../../services/service';
import { Customers } from '../customers/customers';
import { Orders } from '../orders/orders';

@Component({
  selector: 'app-packages',
  imports: [Customers, RouterOutlet,Orders],
  templateUrl: './packages.html',
  styleUrl: './packages.scss'
})
export class Packages {
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  srv: Service = inject(Service)
  packages() { this.router.navigate(['/']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  personalerea() {this.router.navigate(['/orders']); }

}