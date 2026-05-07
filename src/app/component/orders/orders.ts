import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { OrdersModule } from '../../models/order/orders-moduls';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dealsillustrationmoudule } from '../../models/deal/deals-illustration-moudule';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-orders',
  imports: [AsyncPipe,CommonModule, FormsModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class Orders {
  srv: Service = inject(Service)
  myorder: OrdersModule = new OrdersModule();
  listTypesOfillustration: dealsillustrationmoudule[] = []
 dealId!: number;
router = inject(Router)

 packages() { this.router.navigate(['/packages']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
 constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.srv.curentcustomer.customersId == 0)
      this.router.navigate(['/homePage'])
    
    console.log(this.listTypesOfillustration);
     this.dealId = +this.route.snapshot.paramMap.get('dealId')!;
  this.myorder.dealId = this.dealId;
    this.srv.refreshOrders()
    this.srv.GetAllillustrationDeals().subscribe(res =>
      this.listTypesOfillustration = res
      
      
    )
    console.log("*")
   console.log(this.listTypesOfillustration);
  }
//שיציג את כל המתעניינים

// save() {
//     // if(!this.isFactory)
//     //   this.model.customerType=307
//     this.myorder.custId = this.srv.curentcustomer.customersId;
//     this.myorder.orderDate = new Date();
//     this.myorder.status = "start";
//     this.srv.CreateOrder(this.myorder).subscribe(res => {
//       if (res) {
//         this.srv.curentorder = this.myorder;
//         //  this.router.navigate(['/packages'])
//       }
//       else {
//         alert("לקוח קיים , הנך מועבר לכניסה")
       
//       }
//     }
//     )

//   }

save() {
  
  this.myorder.custId = this.srv.curentcustomer.customersId;
  this.myorder.dealId = this.dealId;

  this.myorder.orderDate = new Date();
  this.myorder.status = "start";

  // בדיקות בסיסיות לפני שליחה
  if (!this.myorder.meters || !this.myorder.budget || !this.myorder.viewPointId) {
    alert("חסרים נתונים חובה להזמנה");
    return;
  }

  this.srv.CreateOrder(this.myorder).subscribe(res => {
    if (res) {
      this.srv.curentorder = this.myorder;
      
    }
  });
      this.router.navigate(['/recommendations']);
}
}






  
  

 
 
