import { AsyncPipe } from '@angular/common';
import { Component, inject ,OnInit} from '@angular/core';
import { Service ,AuthStatus} from '../../services/service';
import { DealsModule } from '../../models/deal/deals-module';
import { ActivatedRoute, Router } from '@angular/router';
import { Illustration } from '../illustration/illustration';
import { Updatepackage } from '../updatepackage/updatepackage';
import { Orders } from '../orders/orders';
import { FormsModule } from '@angular/forms';
import { RecommendModule } from '../../models/recommend/recommend-module';

@Component({
  selector: 'app-my-packages',
  imports: [AsyncPipe,Illustration,Updatepackage, Orders,FormsModule],
  templateUrl: './my-packages.html',
  styleUrls: ['./my-packages.scss']
})
export class MyPackages implements OnInit{
  srv: Service = inject(Service)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  Addrecommend:string[]=[]
  mypack: DealsModule = new DealsModule();
   myrecommend: RecommendModule = new RecommendModule();
  
  isEdit1: boolean = false
  indd:number=-1
  arr:boolean[]=[]
 disableOrderButton: boolean = false;
  ngOnInit() {
    this.srv.refreshDeals()
     if(this.srv.curentcustomer.customersId==0)
    this.router.navigate(['/homePage'])
  }
  packages() { this.router.navigate(['/packages']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
  OrderManagement() 
  { this.router.navigate(['/ordersManagement']); }
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

    
  } 
ok(indx:number){
this.srv.Hasorder(this.srv.curentcustomer.customersId)
    .subscribe(res => {
        this.Addrecommend[indx] = res.toString() ;
    });
}
save(dealId:number,indx:number){
   this.myrecommend.customerId= this.srv.curentcustomer.customersId;
  this.myrecommend.recommendId = 0;
  this.myrecommend.dealId=dealId;
if (this.myrecommend.recDescription==null) {
    alert("חסרים נתונים חובה להמלצה");
    return;
  }
else{
  this.srv.CreateRecommandation(this.myrecommend).subscribe(res => {
    if (res)
      // this.srv.refreshRecommendations()
         this.Addrecommend[indx]=''
  
  });
}

}

deletepackage(deal: DealsModule, index: number) {
  if (confirm('האם אתה בטוח שברצונך למחוק את החבילה?')) {
    this.srv.deletePackage(deal).subscribe({
      next: () => {
        // הסרת החבילה מהרשימה המקומית של ה-Service
        this.srv.list1 = this.srv.list1.filter((_, i) => i !== index);
        this.srv.list1$ = this.srv.getAllDeals(); // ריענון Observable
      },
      error: (err) => console.error('שגיאה במחיקה:', err)
    });
  }
}
}
