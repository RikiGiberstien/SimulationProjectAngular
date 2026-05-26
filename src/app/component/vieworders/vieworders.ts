import { Component ,inject} from '@angular/core';
import { Service } from '../../services/service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { OrdersModule } from '../../models/order/orders-moduls';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectModule } from '../../models/project/project-module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vieworders',
  imports: [AsyncPipe,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './vieworders.html',
  styleUrl: './vieworders.scss'
})
export class Vieworders {
srv: Service = inject(Service)
router = inject(Router)
  isEdit: boolean = false
  myorder: OrdersModule = new OrdersModule();
   mypro: ProjectModule = new ProjectModule();
  indd:number=-1
  arr:boolean[]=[]
allimages: string[] = [];
selectedCustomer: any = null;
selectedOrderId: number | null = null;
Addrecommend:boolean=false;
custId: number = 0;

galleryImages: any[] = [];
currentProjectId: number | null = null;
// selectedFile: File | null = null;
galleryFiles: File[] = []; 
selectedMainImage: string = '';
mainImageFile: File | null = null;

// selectedCustomer: any = null;
  packages() { this.router.navigate(['/packages']) }
  mypac() { this.router.navigate(['/myPackages']) }
  cust() { this.router.navigate(['/customers']); }
  // personalerea() {this.router.navigate(['/personalArea']); }
  recomms() {
    this.router.navigate(['/recommendations']);
  }
  vieworders() { this.router.navigate(['/vieworders']) }
  about() { this.router.navigate(['/about']) }
  // starsArray:number[]=[1,2,3,4,5] 
 constructor() {
this.custId=history.state?.customerId
      this.srv.refreshOrders()
    this.srv.refreshCustomers()
    this.srv.refreshProjects()
    if(this.srv.curentcustomer.customersId==0)
    this.router.navigate(['/homePage'])
  }

  // ngOnInit() {
  
  // }
//this is the original function for update the status of the order, but we want to change it to be disabled if its status is finish
  updateStatus(bool:boolean){
  if(bool==true)
  this.isEdit=true
 
  else
  {  
    this.isEdit=false
    this.srv.updateOrders(this.myorder).subscribe(res => { 
        this.srv.refreshOrders() ;
 
  })
    }
 

}
//  openCustomer(orderId: number) {
//   this.srv.getCustomerByOrder(orderId).subscribe(res => {
//     this.selectedCustomer = res;
//   });
// }
// this is the original function for update the status of the order, but we want to change it to be disabled if its status is finish
  setStars(stars:string){
this.myorder.status=stars; }




toggleCustomer(order: any) {

  // אם לוחצים שוב על אותו כפתור → סוגר
  if (this.selectedOrderId === order.orderId) {
    this.selectedOrderId = null;
    this.selectedCustomer = null;
    return;
  }

  // אחרת פותח חדש
  this.selectedOrderId = order.orderId;

  this.srv.GetClientByOrder(order.custId).subscribe(res => {
    if (res) {
      this.selectedCustomer = res;
    }
     else{
        alert ("אחד מהפרטים שגויי")
      
      }
   
  });
}


selectedFile!: File; // כאן אפשר לשלוח עדכון לשרת שהתמונה הזו היא הראשית
 onMainImageSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadMainImage() {
    if (!this.selectedFile) return;

    this.srv.uploadProject(
  this.selectedFile,
  this.myorder.custId,
  this.myorder.dealId,
  this.myorder.orderFinishDate ?? null
).subscribe({
  next: (res: any) => {

    this.currentProjectId = res.projectId; 

    this.myorder.status = 'finish';

    this.srv.updateOrders(this.myorder).subscribe(() => {
      this.srv.refreshOrders();
    });

    console.log('Project created', res);
  }
});
  }



// // // =============================with stars


onGalleryFilesSelected(event: any) {
  this.galleryFiles = Array.from(event.target.files);
  console.log('Selected gallery files:', this.galleryFiles);
}

uploadGalleryImages() {
  if (!this.galleryFiles.length || !this.currentProjectId) {
    alert('בחר קבצים ומזהה פרויקט');
    return;
  }
  this.srv.uploadProjectGallery(this.galleryFiles, this.currentProjectId).subscribe({
    next: (res) => {
      alert('גלריה נשמרה');
      this.loadGalleryImages();
    },
    error: (err) => alert('שגיאה בהעלאת גלריה')
  });
  console.log('projectId:', this.currentProjectId);
console.log('files:', this.galleryFiles);
}
loadGalleryImages() {
  if (!this.currentProjectId) return;
  this.srv.getProjectImages(this.currentProjectId).subscribe({
    next: (res) => this.galleryImages = res,
    error: (err) => alert('שגיאה בטעינת גלריה')
  });
}
}


// setMainImageFromGallery(imageUrl: string) {
//   this.selectedMainImage = imageUrl;