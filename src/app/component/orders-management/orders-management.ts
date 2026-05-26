import { Component, inject, OnInit } from '@angular/core';
import { OrdersModule } from '../../models/order/orders-moduls';
import { Service } from '../../services/service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Orders } from '../orders/orders';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface OrderViewModel extends OrdersModule {
  urgencyLevel: number;
}

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.html',
  imports: [ RouterOutlet, Orders ,AsyncPipe,FormsModule,CommonModule],

  styleUrls: ['./orders-management.scss']
})
export class OrdersManagement  implements OnInit {
  router = inject(Router)
   activeRoute = inject(ActivatedRoute);
  orders: OrdersModule[] = [];
  filteredOrders: OrdersModule[] = [];
  searchText: string = '';

  constructor(private srv: Service) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  // טעינת הזמנות + חישוב דחיפות
  loadOrders() {

    this.srv.GetAllOrders().subscribe(data => {

      this.orders = data
        .filter(x => x.status !== 'finished').map(order => ({
          ...order,
          urgencyLevel: this.getUrgencyLevel(order)
        }));

      this.filteredOrders = [...this.orders];
      
    });
  }
viewCustomerDetails(customerId: number) {
    this.router.navigate(['/vieworders'],{state:{customerId: customerId}});
}
  // חישוב דחיפות לפי תאריך סיום
  getUrgencyLevel(order: OrdersModule): number {

    const today = new Date();
    const finish = new Date(order.orderFinishDate);

    const diffDays =
      Math.ceil((finish.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 0;
    if (diffDays <= 3) return 1;
    if (diffDays <= 7) return 2;
    if (diffDays <= 14) return 3;

    return 4;
  }

  // צבע שורה לפי דחיפות
  // getRowClass(order: OrdersModule): string {

  //   switch (order.urgencyLevel) {
  //     case 0: return 'late-row';
  //     case 1: return 'critical-row';
  //     case 2: return 'high-row';
  //     case 3: return 'medium-row';
  //     default: return '';
  //   }
  // }

  // חיפוש לפי לקוח
  searchByCustomer() {

    const value = this.searchText.toLowerCase();

    this.filteredOrders = this.orders.filter(x =>
      x.custName.toLowerCase().includes(value)
    );
  }

  // ===== מיונים =====


  sortByMeters() {
    this.filteredOrders.sort((a, b) => b.meters - a.meters);
  }

  sortByBudget() {
    this.filteredOrders.sort((a, b) => b.budget - a.budget);
  }

  sortByOrderDate() {
    this.filteredOrders.sort(
      (a, b) =>
        new Date(b.orderDate).getTime() -
        new Date(a.orderDate).getTime()
    );
  }

  sortByFinishDate() {
    this.filteredOrders.sort(
      (a, b) =>
        new Date(a.orderFinishDate).getTime() -
        new Date(b.orderFinishDate).getTime()
    );
  }
}

