import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DealsModule } from '../../models/deal/deals-module';
import { Service } from '../../services/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-package.html',
  styleUrl: './add-package.scss'
})
export class AddPackage {
  model: DealsModule = new DealsModule()
  srv: Service = inject(Service)
  router = inject(Router);
  ngOnInit() {
    if (this.srv.curentcustomer.customersId == 0)
      this.router.navigate(['/homePage'])
  }
  addpackage() {
    this.srv.CreatePackage(this.model).subscribe(res => {
      if (res) {
        this.srv.currentPackage = this.model;
      }
      else {
        alert("לקוח קיים , הנך מועבר לכניסה")
      }
    }
    )

  }
}
