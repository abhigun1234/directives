import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from '..//app/aboutus/aboutus.component'
import {ContactusComponent} from '..//app/contactus/contactus.component'
import {HomeComponent} from '..//app/home/home.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [{path:'',component:HomeComponent},
  {path:'about',component:AboutusComponent},
{path:'contact',component:ContactusComponent},
{path:'home',component:HomeComponent},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
