import { Component, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Service } from '../../services/service';
import { CustomerModule } from '../../models/customer/customer-module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.scss'
})
export class LogIn {

  
  onSubmit() { console.log('login data:', this.model)};

// @Input()
// id:number=0;
// @Output()
  model :CustomerModule=new CustomerModule()

closesearch:EventEmitter<boolean>=new EventEmitter<boolean>()
srv:Service=inject(Service) 
router=inject(Router)
activeRoute=inject(ActivatedRoute);
// ngOnInit(){
//     console.log('Getbyid init, id =', this.id);
//   }

toregister(){ this.router.navigate(['/register']); } 
homepage() { this.router.navigate(['/']); }  

ok() { 
  console.log(this.model.mail)
  if(this.model.mail=="meair@gmail.com"){
    
  }
  // if (bool) { this.srv.GetByMail(this.model.mail).subscribe(
  //   (resu: CustomerModule) => { 
  //     console.log('person by id:', resu); 
  //     this.srv.refresh(); 
  //     this.closesearch.emit(true); }); } 
  //     else { this.closesearch.emit(false); } } 
this.srv.GetByMail(this.model.mail).subscribe(res=>
 { if(res!=null){
      if(res.compNameCustName==this.model.compNameCustName){
        //כניסה למערכת
        this.srv.curentcustomer =res;
         this.router.navigate(['/packages'])
      }
      //אחרת הודעת אחש מהפרטים שגויים!!!
      else{
        alert ("אחד מהפרטים שגויי")
      }
  }
  else{
    this.toregister()
  }


}
 )
}


}

