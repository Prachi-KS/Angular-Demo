import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { GameflipComponent } from './gameflip/gameflip.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { ApiinfoComponent } from './apiinfo/apiinfo.component';
import {HttpClientModule} from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CategoryPipe } from './category.pipe';
import { PromisesandobeserveComponent } from './promisesandobeserve/promisesandobeserve.component';
import { UniquecatPipe } from './uniquecat.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    GameflipComponent,
    FirstComponent,
    SecondComponent,
    FormsdemoComponent,
    ApiinfoComponent,
    StoreComponent,
    ViewproductComponent,
    CategoryPipe,
    PromisesandobeserveComponent,
    UniquecatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
