import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
// import { orderForm } from '../../component/order-form/order-form';

@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class OrdersModule {
  orderId:number = 0;
  dealId:number = 0;
  orderFinishDate:Date=new Date();
  status:string="";
  meters:number=0;
  budget:number=0;
  orderDate:Date=new Date();
  custId:number=0;
  viewPointId:number=0;
  custName: string = ""
  dealName: string = ""
  viewPointDescription:string=""
}
