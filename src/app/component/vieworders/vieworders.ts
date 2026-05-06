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

  updateStatus(bool:boolean){
  if(bool==true)
  this.isEdit=true
 
  else
  {  
    this.isEdit=false
    this.srv.updateOrders(this.myorder).subscribe(res => { 
        this.srv.refreshOrders() ;
 
  })
    }
 
}
 openCustomer(orderId: number) {
  this.srv.getCustomerByOrder(orderId).subscribe(res => {
    this.selectedCustomer = res;
  });
}
// =============================with stars
  setStars(stars:string){
this.myorder.status=stars;
// this.srv.updatestars(this.myorder.custId,stars).subscribe(()=>{console.log("הכוכבים עודכנו בהצלחה")})
// }
//  this.srv.GetAllillustrationDeals().subscribe(res =>
//       this.listTypesOfillustration = res
//     )
  }



// ok(bool: boolean) {
//     if (bool) {
//       this.srv.updatePackages(this.deal).subscribe(res => { 
//        this.srv.refreshDeals() ;
      
//       }
  //     )
  //   }
  //    this.closeEdit.emit(true);
   
 
}