import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { CustomerModule } from '../../models/customer/customer-module';
import { AsyncPipe } from '@angular/common';
import { UpdateCustomer } from '../update-customer/update-customer';
import { Router } from '@angular/router';
import { createChat } from '@n8n/chat';

@Component({
  selector: 'app-customers',
  imports: [AsyncPipe, UpdateCustomer],
  templateUrl: './customers.html',
  styleUrl: './customers.scss'
})
export class Customers {
  srv: Service = inject(Service)
  isEdit: boolean = false
  router = inject(Router);
  myCust: CustomerModule = new CustomerModule();
  indd: number = -1
  arr: boolean[] = []
  ngOnInit() {
    this.srv.refreshCustomers()
    if (this.srv.curentcustomer.customersId == 0)
      this.router.navigate(['/homePage'])

  }

 packages() { this.router.navigate(['/packages']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
  update(l: CustomerModule, i: number) {
    this.myCust = l;
    this.isEdit = true
    this.indd = i
    this.arr[i] = true

  }
}
