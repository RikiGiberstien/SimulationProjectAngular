import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [ CommonModule ]
})
export class CustomerModule {
  customersId: number = 0;
  compNameCustName!: string;
  mail!: string;
  phone!: string;
  customerType?: number
  connectPerson?: string
}
