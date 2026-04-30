import { Routes } from '@angular/router';
import { LogIn } from './component/log-in/log-in';
import { Register } from './component/register/register';
import { HOmePage } from './component/home-page/home-page';
import { Packages } from './component/packages/packages';
import { Customers } from './component/customers/customers';
import { MyPackages } from './component/my-packages/my-packages';
import { Illustration } from './component/illustration/illustration';
import { Orders } from './component/orders/orders';
import { Recommendations } from './component/recommendations/recommendations';
import { Vieworders } from './component/vieworders/vieworders';
import { AddPackage } from './component/add-package/add-package';
import { PictureDetails } from './component/packages/picture-details/picture-details';
import { Wellcome } from './component/wellcome/wellcome';
import { About } from './component/about/about';

export const routes: Routes = [
{path:'log-in',component:LogIn},
{path:'register',component:Register},
{path:'homePage',component:HOmePage},
{path:'packages',component:Packages},
{path:'customers',component:Customers},
{path:'myPackages',component:MyPackages},
{path:'illustration',component:Illustration},
{path:'orders/:dealId',component:Orders}, 
{path:'recommendations',component:Recommendations},
{path:'vieworders',component:Vieworders},
{path:'addPackage',component:AddPackage},
{path:'pictureDetails',component:PictureDetails},
{path:'about',component:About},
{ path: '', component: Wellcome },




];
