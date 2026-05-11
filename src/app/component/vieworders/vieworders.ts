import { Component ,inject} from '@angular/core';
import { Service } from '../../services/service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { OrdersModule } from '../../models/order/orders-moduls';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vieworders',
  imports: [AsyncPipe,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './vieworders.html',
  styleUrl: './vieworders.scss'
})
export class Vieworders {
srv: Service = inject(Service)
router = inject(Router)
  isEdit: boolean = false
  myorder: OrdersModule = new OrdersModule();
  indd:number=-1
  arr:boolean[]=[]
selectedCustomer: any = null;

  packages() { this.router.navigate(['/packages']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
  // starsArray:number[]=[1,2,3,4,5]
  ngOnInit() {
    this.srv.refreshOrders()
    this.srv.refreshCustomers()
    if(this.srv.curentcustomer.customersId==0)
    this.router.navigate(['/homePage'])
  }
//this is the original function for update the status of the order, but we want to change it to be disabled if its status is finish
//   updateStatus(bool:boolean){
//   if(bool==true)
//   this.isEdit=true
 
//   else
//   {  
//     this.isEdit=false
//     this.srv.updateOrders(this.myorder).subscribe(res => { 
//         this.srv.refreshOrders() ;
 
//   })
//     }
 
// }
 openCustomer(orderId: number) {
  this.srv.getCustomerByOrder(orderId).subscribe(res => {
    this.selectedCustomer = res;
  });
}
//this is the original function for update the status of the order, but we want to change it to be disabled if its status is finish
//   setStars(stars:string){
// this.myorder.status=stars;  // }






   // פונקציה לעדכון הסטטוס בלחיצה על כוכב
setStars(stars: string) {
  // חסימה: אם הסטטוס הנוכחי כבר גמור ('finish'), אנחנו לא מאפשרים לשנות אותו חזרה!
  if (this.myorder.status?.trim() === 'finish') {
    console.warn('לא ניתן לשנות סטטוס של פרויקט שהסתיים!');
    return; // עוצר את הפונקציה כאן
  }
  
  this.myorder.status = stars;
}

// פונקציה למעבר למצב עריכה ושמירה
updateStatus(bool: boolean) {
  if (bool === true) {
    // חסימה: אם הפרויקט כבר סומן כגמור, לא נאפשר למנהל בכלל להיכנס למצב עריכה שלו
    if (this.myorder.status?.trim() === 'finish') {
      alert('פרויקט זה הושלם ולא ניתן לעריכה נוספת.');
      return;
    }
    this.isEdit = true;
  } 
  else {  
    this.isEdit = false;
    this.srv.updateOrders(this.myorder).subscribe(res => { 
      this.srv.refreshOrders();
    });
  }
}
 
}