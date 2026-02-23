import { Routes } from '@angular/router';
import { LogIn } from './component/log-in/log-in';
import { Register } from './component/register/register';
import { HOmePage } from './component/home-page/home-page';
import { Packages } from './component/packages/packages';
import { Customers } from './component/customers/customers';
import { MyPackages } from './component/my-packages/my-packages';
import { Illustration } from './component/illustration/illustration';
import { Orders } from './component/orders/orders';

export const routes: Routes = [
{path:'log-in',component:LogIn},
{path:'register',component:Register},
{path:'',component:HOmePage},
{path:'packages',component:Packages},
{path:'customers',component:Customers},
{path:'myPackages',component:MyPackages},
{path:'illustration',component:Illustration},
{path:'orders',component:Orders}   
];
