import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';
@NgModule({
    declarations: [],
    imports: [CommonModule]
})
export class OrdersModule {
    OrderId: number = 0
    OrderDate?: string = ''
    CustId: number = 0
}
