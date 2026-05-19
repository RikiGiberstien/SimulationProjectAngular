import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../services/service';
import { Dealsillustrationmoudule } from '../../models/deal/deals-illustration-moudule';

import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders/orders';
@Component({
  selector: 'app-illustration',
  imports: [AsyncPipe, CommonModule, Orders],
  standalone: true,
  templateUrl: './illustration.html',
  styleUrls: ['./illustration.scss']
 

})
export class Illustration implements OnInit {
  myCust: Dealsillustrationmoudule = new Dealsillustrationmoudule();
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
 srv: Service = inject(Service)
  // constructor(private srv: SomeService) {}

  ngOnInit(): void {
    this.srv.refreshIlustrations();
    if(this.srv.curentcustomer?.customersId == 0) {
      this.router.navigate(['/homePage']);
    }
  }

  personalerea(): void {
    this.router.navigate(['/orders']);
  }
}



