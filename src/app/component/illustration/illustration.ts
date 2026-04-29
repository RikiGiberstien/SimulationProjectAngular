import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { dealsillustrationmoudule } from '../../models/deal/deals-illustration-moudule';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../orders/orders';
@Component({
  selector: 'app-illustration',
  imports: [AsyncPipe, CommonModule, Orders],
  standalone: true,
  templateUrl: './illustration.html',
  styleUrls: ['./illustration.scss']
})
export class Illustration {
  srv: Service = inject(Service)
  myCust: dealsillustrationmoudule = new dealsillustrationmoudule();
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.srv.refreshIlustrations()
  }
  personalerea() {
    this.router.navigate(['/orders']);
  }

  // trackByIllustrationId(index: number, item: dealsillustrationmoudule) {
  //   return item.IllustrationViewPointId;
  // }

}




