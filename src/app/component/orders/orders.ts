import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { OrdersModule } from '../../models/order/orders-moduls';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [AsyncPipe],
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class Orders {
 srv: Service = inject(Service)
  myCust: OrdersModule = new OrdersModule();

  ngOnInit() {
    this.srv.refresh()
  }

}
