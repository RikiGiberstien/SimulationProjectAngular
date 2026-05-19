import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProjectModule {
  id!: number;
 image!: string;
  finalDate?: Date;
 custId?: number;
  packageId?: number;
  custName: string = ""
 dealName: string = ""
 pictures:string[]=[];

 }
