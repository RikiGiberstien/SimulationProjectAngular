import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { DealsModule } from '../../models/deal/deals-module';
import { ActivatedRoute, Router } from '@angular/router';
import { Illustration } from '../illustration/illustration';

@Component({
  selector: 'app-my-packages',
  imports: [AsyncPipe,Illustration],
  templateUrl: './my-packages.html',
  styleUrl: './my-packages.scss'
})
export class MyPackages {
  srv: Service = inject(Service)
  myCust: DealsModule = new DealsModule();
  router = inject(Router)
  activeRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.srv.refresh()
  }

  mypackages() {
    this.router.navigate(['/illustration']);

  }
}
