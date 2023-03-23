import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiinfoComponent } from './apiinfo/apiinfo.component';
import { AuthGuard } from './auth.guard';
import { FirstComponent } from './first/first.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { GameflipComponent } from './gameflip/gameflip.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductsComponent } from './pages/products/products.component';
import { PromisesandobeserveComponent } from './promisesandobeserve/promisesandobeserve.component';
import { SecondComponent } from './second/second.component';
import { StoreComponent } from './store/store.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

console.log("This is app routing module")

const routes: Routes = 
[
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent,
    children:
    [
      {path:'list',component:ProductlistComponent},
      {path:'details',component:ProductdetailsComponent}
    ]

},  
{path:'first',component:FirstComponent},
{path:'second',component:SecondComponent},
{path:'games',component:GameflipComponent},

{path:'forms',component:FormsdemoComponent},
{
  path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
},
{
  path:'api',component:ApiinfoComponent
},  
{path:'store',component:StoreComponent,canActivate:[AuthGuard]},
{path:'view/:id',component:ViewproductComponent},
{path:'obp',component:PromisesandobeserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
