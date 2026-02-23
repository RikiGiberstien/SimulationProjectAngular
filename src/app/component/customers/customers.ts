import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { CustomerModule } from '../../models/customer/customer-module';
import { AsyncPipe } from '@angular/common';
import { UpdateCustomer } from '../update-customer/update-customer';

@Component({
  selector: 'app-customers',
  imports: [AsyncPipe, UpdateCustomer],
  templateUrl: './customers.html',
  styleUrl: './customers.scss'
})
export class Customers {
  srv: Service = inject(Service)
  isEdit: boolean = false
  myCust: CustomerModule = new CustomerModule();
  indd:number=-1
  arr:boolean[]=[]
  ngOnInit() {
    this.srv.refresh()
  }
  

  update(l: CustomerModule,i:number) {
    this.myCust = l;
    this.isEdit = true
    this.indd=i
    this.arr[i]=true
    
  }
}
