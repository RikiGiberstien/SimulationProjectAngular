import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Service } from '../../services/service';
import { Customers } from '../customers/customers';
import { Orders } from '../orders/orders';
import { AsyncPipe } from '@angular/common';
import { PicturesModule } from '../../models/pictures/pictures-module';
import { ProjectModule } from '../../models/project/project-module';
import { PictureDetails } from '../packages/picture-details/picture-details';
@Component({
  selector: 'app-packages',
  imports: [Customers, RouterOutlet, Orders,AsyncPipe,PictureDetails],
  templateUrl: './packages.html',
  styleUrl: './packages.scss'
})
export class Packages {
  router = inject(Router)
  curr: ProjectModule = new ProjectModule()
  activeRoute = inject(ActivatedRoute);
  srv: Service = inject(Service)
 

   ngOnInit() {
    this.srv.refreshProjects()
  } 
   images: PicturesModule[] = [];
  homePage() { this.router.navigate(['/homePage']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  OrderManagement() 
  { this.router.navigate(['/ordersManagement']); }

//   pictureDetails(i:number){
//     this.curr.id=i
//    this.router.navigate(['/pictureDetails',this.curr.id]);
// }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
  
pictureDetails(projectId: number) {
  console.log(projectId);
  this.srv.getPicturesByProjectId(projectId).subscribe(res => {
    this.images = res;
     this.router.navigate(['/picturesDetails'],{state:{images: this.images}});
  });
}


}
