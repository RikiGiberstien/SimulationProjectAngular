import { AsyncPipe } from '@angular/common';
import { Component, inject ,OnInit} from '@angular/core';
import { Service ,AuthStatus} from '../../services/service';
import { DealsModule } from '../../models/deal/deals-module';
import { ActivatedRoute, Router } from '@angular/router';
import { Illustration } from '../illustration/illustration';
import { Updatepackage } from '../updatepackage/updatepackage';
import { Orders } from '../orders/orders';

@Component({
  selector: 'app-my-packages',
  imports: [AsyncPipe,Illustration,Updatepackage, Orders],
  templateUrl: './my-packages.html',
  styleUrls: ['./my-packages.scss']
})
export class MyPackages implements OnInit{
  srv: Service = inject(Service)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  
  mypack: DealsModule = new DealsModule();
  isEdit1: boolean = false
  indd:number=-1
  arr:boolean[]=[]
 disableOrderButton: boolean = false;
  ngOnInit() {
    this.srv.refreshDeals()
     if(this.srv.curentcustomer.customersId==0)
    this.router.navigate(['/homePage'])
  }
  // משתמש בוחר Guest → הכפתור מושבת
// onGuestClick() {
//     this.disableOrderButton = true;
//   }
  mypackages() {
    this.router.navigate(['/orders']);
  }
  personalerea(dealId: number) {
    this.router.navigate(['/orders',dealId]);
  }
  // משתמש בוחר Register או Login → הכפתור פעיל
  // onRegisterOrLoginClick() {
  //   this.disableOrderButton = false;
  // }
  update(l: DealsModule,i:number) {
    this.mypack = l;
    this.isEdit1 = true
    this.indd=i
    this.arr[i]=true
    
  }
  addpackage() {
        this.router.navigate(['/addPackage']);

    // this.srv.CreatePackage(this.mypack).subscribe(res => {
    //   if (res) {
        
    //      this.router.navigate(['/packages'])
    //   }
    //   else {
    //     alert("חבילה קיימת")
        
    //   }
    // }
    // )

  } 

}

//the binas
// import { Component, inject } from '@angular/core';
// import { AsyncPipe, CommonModule } from '@angular/common';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Service } from '../../services/service';
// import { DealsModule } from '../../models/deal/deals-module';
// import { Illustration } from '../illustration/illustration';

// @Component({
//   selector: 'app-my-packages',
//   standalone: true,                   // אם אתה משתמש ב-standalone components
//   imports: [AsyncPipe,Illustration,CommonModule],
//   templateUrl: './my-packages.html',
//   styleUrls: ['./my-packages.scss']
// })
// export class MyPackages {
//   srv: Service = inject(Service);
//   router = inject(Router);
//   activeRoute = inject(ActivatedRoute);

//   ngOnInit() {
//     this.srv.refresh(); // ודא ש-srv.list1$ מתעדכן כאן
//   }

//   mypackages() {
//     this.router.navigate(['/illustration']); // ניווט לדף ההדמיה
//   }

//   // אופציונלי: פונקציה ל-trackBy כדי לייעל ngFor
//   trackByDealId(index: number, item: DealsModule) {
//     return item.dealId;
//   }
// }
