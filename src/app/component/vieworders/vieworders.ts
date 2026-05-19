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
  indd:number=-1
  arr:boolean[]=[]
allimages: string[] = [];
selectedCustomer: any = null;
selectedOrderId: number | null = null;
Addrecommend:boolean=false;
selectedFile: File | null = null;
 
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

      this.srv.refreshOrders()
    this.srv.refreshCustomers()
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

 chooseimage(){
  //לוגקה של שמירת תמונה
  console.log(event?.target);
  
 }

 
 save(order: OrdersModule) {
  const projectPayload: ProjectModule = {
    id: 0, // או ערך מתאים
    image: this.selectedImage, // יש לוודא שמדובר ב-string
    finalDate: order.orderFinishDate,
    custId: order.custId,
    packageId: order.dealId, // או order.packageId אם קיים
    custName: order.custName,
    dealName: order.dealName,
    pictures: [] // ריק במידה ואין תמונות נוספות
  };

  this.srv.CreateProject(projectPayload).subscribe(res => {
    if(res) {
      console.log('Project saved successfully', res);
      this.srv.refreshProjects();
    } else {
      console.log('Error saving project');
    }
    
  });
   this.router.navigate(['/packages']); 
}



  images: string[] = [
    'מטבח/1.png',
   'מטבח/2.png',
    'מטבח/3.png',
    '/public/img4.jpg'
  ];

  

  // closeGallery() {
  //   this.showGallery = false;
  // }


selectedImage: string="";

showGallery = false;

openGallery() {
  this.showGallery = true;
}

chooseImage(img: string) {
  this.selectedImage = img;
  this.showGallery = false;

  console.log('selected image:', img);
}




onFileSelected(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }
}

uploadImage() {
  if (!this.selectedFile) {
    alert('No file selected!');
    return;
  }

  this.srv.uploadImage(this.selectedFile).subscribe({
    next: (res) => {
      console.log('Uploaded image URL:', res.url);
      this.chooseImage(res.url); // שומר ל־selectedImage ומסתיר את הגלריה
    },
    error: (err) => console.error('Upload failed', err)
  });
}

  // כל התמונות של הפרויקט

loadProjectImages(projectId: number) {
  this.srv.getProjectImages(projectId).subscribe({
    next: (res) => {
      this.allimages = res; // כל התמונות מהשרת
    },
    error: (err) => console.error('Failed to load project images', err)
  });
}
}

// // // =============================with stars


// // פונקציה למעבר למצב עריכה ושמירה
// updateStatus(bool: boolean) {
//   if (bool === true) {
//     // חסימה: אם הפרויקט כבר סומן כגמור, לא נאפשר למנהל בכלל להיכנס למצב עריכה שלו
//     if (this.myorder.status?.trim() === 'finish') {
//       alert('פרויקט זה הושלם ולא ניתן לעריכה נוספת.');
//       return;
//     }
//     this.isEdit = true;
//   } 
//   else {  
//     this.isEdit = false;
//     this.srv.updateOrders(this.myorder).subscribe(res => { 
//       this.srv.refreshOrders();
//     });
//   }
// }



  

 

 

    // שליחה ל-C# backend (לפי Swagger API שלך)
    // --------------------------------------------------



