import { Component,EventEmitter, inject, Input, Output } from '@angular/core';
import { DealsModule } from '../../models/deal/deals-module';
import { FormsModule } from '@angular/forms';
import { Service } from '../../services/service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-updatepackage',
  imports: [FormsModule, CommonModule],
  templateUrl: './updatepackage.html',
  styleUrl: './updatepackage.scss'
})
export class Updatepackage {
 @Input()
  deal: DealsModule = new DealsModule()
  @Output()
  closeEdit: EventEmitter<boolean> = new EventEmitter<boolean>()
  srv: Service = inject(Service)
   ngOnInit() {
    console.log(this.deal);
  }
   ok(bool: boolean) {
    if (bool) {
      this.srv.updatePackages(this.deal).subscribe(res => { 
       this.srv.refreshDeals() ;
      
      }
      )
    }
     this.closeEdit.emit(true);
   
  }
}
