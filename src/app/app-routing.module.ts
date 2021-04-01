import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from '..//app/aboutus/aboutus.component'
import {ContactusComponent} from '..//app/contactus/contactus.component'
import {HomeComponent} from '..//app/home/home.component'
import { FlightComponent } from './flight/flight.component';
import { FlishdetailsComponent } from './flishdetails/flishdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { PlayersComponent } from './players/players.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { TeamComponent } from './team/team.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { TripComponent } from './trip/trip.component';
const routes: Routes = [{path:'',component:ProductComponent},
  {path:'about',component:AboutusComponent},
{path:'contact',component:ContactusComponent},
{path:'home',component:HomeComponent},
{path:'teams',component:TeamComponent},
{path:'teams/:name',component:TeamdetailsComponent},
{path:'player',component:PlayersComponent},
{path:'playerdetails',component:PlayerdetailsComponent},
{path:'Flight',component:FlightComponent},
{path:'FlightDetails',component:FlishdetailsComponent},
{path:'productDetails',component:ProductdetailsComponent},
{path:'Trip',component:TripComponent},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
