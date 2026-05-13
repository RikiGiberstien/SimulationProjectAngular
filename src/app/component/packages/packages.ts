import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Service } from '../../services/service';
import { Customers } from '../customers/customers';
import { Orders } from '../orders/orders';
import { AsyncPipe } from '@angular/common';
import { PicturesModule } from '../../models/pictures/pictures-module';
import { ProjectModule } from '../../models/project/project-module';
@Component({
  selector: 'app-packages',
  imports: [Customers, RouterOutlet, Orders,AsyncPipe],
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
  // projects = [{
  //   id: 1,
  //   title: 'מטבח יפיפה',
  //   description:"מעוצב בטוב טעם בסגנון איטלקי מודרני",
  //   image: "מטבח/4.png",
  //   imageArray: [
  //     "מטבח/1.png",
  //     "מטבח/2.png",
  //     "מטבח/3.png",
  //     "מטבח/4.png",
  //     "מטבח/5.png",
  //     "מטבח/6.png",
  //     "מטבח/7.png",
  //     "מטבח/8.jpg",
  //   ]

  // },
  // {
  //   id: 2,
  //   title: 'עיצוב משרד מודרני',
  //   description: 'הדמיה למשרד בעיצוב מודרני ונקי.',
  //   image: "מטבח/2.png",
  //   imageArray: [
  //     // "1.png",
  //     // "2.png",
  //     "3.jpg",
  //     "4.jpg",
  //     "5.jpg",
  //     // "6.jpg",
  //     "7.jpg"
  //   ]
  // },
  // {
  //   id: 3,
  //   title: 'וילה כפרית',
  //   description: 'הדמיה חיצונית ופנימית לוילה בסגנון כפרי.',
  //   image: "מטבח/3.png",
  //   imageArray: [
  //     // "1.png",
  //     // "2.png",
  //     "3.jpg",
  //     "4.jpg",
  //     "5.jpg",
  //     // "6.jpg",
  //     "7.jpg"
  //   ]

  // }

  // ];
  // // pictureDetails(id: number) {
  // //   this.router.navigate(['/pictureDetails'])
  // // }

pictureDetails(projectId: number) {
  console.log(projectId);
  this.srv.getPicturesByProjectId(projectId).subscribe(res => {
    this.images = res;
  });
}


}
