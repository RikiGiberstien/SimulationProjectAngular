import { Component ,inject} from '@angular/core';
import { Service } from '../../services/service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { OrdersModule } from '../../models/order/orders-moduls';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-vieworders',
  imports: [AsyncPipe,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './vieworders.html',
  styleUrl: './vieworders.scss'
})
export class Vieworders {
srv: Service = inject(Service)
  isEdit: boolean = false
  myorder: OrdersModule = new OrdersModule();
  indd:number=-1
  arr:boolean[]=[]
  // starsArray:number[]=[1,2,3,4,5]
  ngOnInit() {
    this.srv.refreshOrders()
    this.srv.refreshCustomers()
  }

  updateStatus(bool:boolean){
  if(bool==true)
  this.isEdit=true
  
  else
  {  
    this.isEdit=false
    this.srv.updateOrders(this.myorder).subscribe(res => { 
        this.srv.refreshOrders() ;
  // this.closeEdit.emit(true);
  })
    }
 
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