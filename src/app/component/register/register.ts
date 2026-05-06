import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerModule } from '../../models/customer/customer-module';
import { Service } from '../../services/service';
import { CustomertypeModule } from '../../models/customer/customertype-module';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register  {
  model: CustomerModule = new CustomerModule()
  isFactory: boolean = false;
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  srv: Service = inject(Service)
  listTypes: CustomertypeModule[] = []

   homePage() { this.router.navigate(['/homePage']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
  homepage() { this.router.navigate(['/homePage']); }
  tologin() { this.router.navigate(['/logIn']); }
  //פונק הטענה
  ngOnInit() {
    this.srv.getTypesCustomers().subscribe(res =>
      this.listTypes = res
    )
  }
// ngOnInit():void {
//   this.srv.getTypesCustomers().subscribe((res: CustomertypeModule[]) => {
//     this.listTypes = res;
//   });
// }

  register() {
    if(!this.isFactory)
      this.model.customerType=307
    this.srv.CreateCustomer(this.model).subscribe(res => {
      if (res) {
     this.srv.curentcustomer = this.model;
      this.router.navigate(['/packages']);
      }
      else {
        alert("לקוח קיים , הנך מועבר לכניסה")
        this.tologin()
      }
    }
    )

  }
}
