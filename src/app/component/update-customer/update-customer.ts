import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { CustomerModule } from '../../models/customer/customer-module';
import { FormsModule } from '@angular/forms';
import { Service } from '../../services/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-customer',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.scss'
})
export class UpdateCustomer {

  @Input()
  customer: CustomerModule = new CustomerModule()
  @Output()
  closeEdit: EventEmitter<boolean> = new EventEmitter<boolean>()
  srv: Service = inject(Service)

  ngOnInit() {
    console.log(this.customer);
  }
  ok(bool: boolean) {
    if (bool) {
      this.srv.updateCustomers(this.customer).subscribe(res => { 
       this.srv.refreshCustomers() 
      
      }
      )
    }
     this.closeEdit.emit(true);
   
  }




}
