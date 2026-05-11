import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogIn } from '../log-in/log-in';
import { Service } from '../../services/service';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HOmePage {
  srv: Service = inject(Service)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  login() { this.router.navigate(['/logIn']); }
  register() { this.router.navigate(['/register']); }

  packages() { this.router.navigate(['/packages']); }
  // ngOnInit() {
  //   if (this.srv.curentcustomer.customersId == 0)
  //     this.router.navigate(['/homePage'])
  // }
  // login(){
  //   this.router.navigate(["log-in"],{relativeTo:this.activeRoute})
  // }

}
