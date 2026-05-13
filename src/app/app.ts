import { Component, signal } from '@angular/core';
import { Customers } from './component/customers/customers';
import { LogIn } from './component/log-in/log-in';
import { Register } from './component/register/register';
import { HOmePage } from './component/home-page/home-page';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Packages } from './component/packages/packages';
import { UpdateCustomer } from './component/update-customer/update-customer';
import { MyPackages } from './component/my-packages/my-packages';
import { Illustration } from './component/illustration/illustration';
import { Orders } from './component/orders/orders';
import { Updatepackage } from './component/updatepackage/updatepackage';
import { Recommendations } from './component/recommendations/recommendations';
import { Vieworders } from './component/vieworders/vieworders';
import { AddPackage } from './component/add-package/add-package';
import { Wellcome } from './component/wellcome/wellcome';
import { About } from './component/about/about';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Customers, LogIn, Register, HOmePage, Packages, UpdateCustomer, MyPackages, Illustration,
    Orders, Updatepackage, Recommendations, Vieworders, AddPackage,Wellcome,About ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('blank-app');


}
