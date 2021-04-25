import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
