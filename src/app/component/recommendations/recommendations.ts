import { Component, inject } from '@angular/core';
import { Customers } from '../customers/customers';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AsyncPipe ,CommonModule} from '@angular/common';
import { Service } from '../../services/service';
import { RecommendModule } from '../../models/recommend/recommend-module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recommendations',
  imports: [Customers, RouterOutlet, AsyncPipe,FormsModule,CommonModule],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.scss'

})
export class Recommendations {
  srv: Service = inject(Service)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  myrecommend: RecommendModule = new RecommendModule();
  isCust:boolean=false
  recommendId!: number;
Addrecommend:boolean=false
  homePage() { this.router.navigate(['/packages']) }
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
    this.srv.refreshRecommendations()
     this.recommendId = +this.route.snapshot.paramMap.get('recommendId')!;
      this.myrecommend.recommendId = this.recommendId;

    // if (this.srv.curentcustomer.customersId == 0)
    //   this.router.navigate(['/homePage'])
  }
  // isCustomer(Id:number){
  //   if()
  //   this.isCust= true
  // }


ok() {
  this.srv.Hasorder(this.srv.curentcustomer.customersId)
    .subscribe(res => {
      this.Addrecommend = res;
    });
}
save() {
  
  this.myrecommend.customerId= this.srv.curentcustomer.customersId;
  this.myrecommend.recommendId = this.recommendId;
  //dont think it will work
this.myrecommend.dealId=this.srv.curentorder.dealId
  

  // בדיקות בסיסיות לפני שליחה
  if (this.myrecommend.recDescription==null) {
    alert("חסרים נתונים חובה להמלצה");
    return;
  }
else{
  this.srv.CreateRecommandation(this.myrecommend).subscribe(res => {
    if (res) {
      this.srv.refreshRecommendations()
      
    }
  });
      this.router.navigate(['/recommendations']);
}  
}}













  
  
  
 
 



