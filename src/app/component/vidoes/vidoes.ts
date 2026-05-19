
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Service } from '../../services/service';
import { Customers } from '../customers/customers';
import { Orders } from '../orders/orders';
import { AsyncPipe } from '@angular/common';
import { PicturesModule } from '../../models/pictures/pictures-module';
// import { PictureDetails } from '../packages/picture-details/picture-details';
import { VidoesModule } from '../../models/vidoes/vidoes-module';
@Component({
  selector: 'app-vidoes',
  // imports: [Customers, RouterOutlet, Orders,AsyncPipe,PictureDetails],
  imports: [Customers, RouterOutlet, Orders,AsyncPipe],
  templateUrl: './vidoes.html',
  styleUrl: './vidoes.scss'
})
export class Vidoes {
 router = inject(Router)
 curr:VidoesModule=new VidoesModule()
 activeRoute = inject(ActivatedRoute);
  srv: Service = inject(Service)
 vidoes:[]=[]  
  ngOnInit() {
    // this.srv.refreshVidoes()
  }
  homePage() { this.router.navigate(['/homePage']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); } 
   recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
  

}

