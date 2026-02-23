import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogIn } from '../log-in/log-in';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HOmePage {
router=inject(Router)
activeRoute=inject(ActivatedRoute);
login() { this.router.navigate(['/log-in']); } 
register() { this.router.navigate(['/register']); } 
packages() { this.router.navigate(['/packages']); } 

// login(){
//   this.router.navigate(["log-in"],{relativeTo:this.activeRoute})
// }

}
