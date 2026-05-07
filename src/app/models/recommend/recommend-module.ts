import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from '../../app.routes';


@NgModule({
  declarations: [],
  imports: [CommonModule]

})
export class RecommendModule {
  recommendId: number = 0
  customerId: number = 0
  customerName: string = ""
  dealName: string = ""
  dealId: number = 0
  recDescription: string = ''

}
