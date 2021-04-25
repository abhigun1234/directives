import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructrualComponent } from './structrual/structrual.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ProertybindingComponent } from './proertybinding/proertybinding.component';
import { TwowayComponent } from './twoway/twoway.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplatevarComponent } from './templatevar/templatevar.component';
import { AtttributedirdemoComponent } from './atttributedirdemo/atttributedirdemo.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FirstComponent} from './first/first.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgtempleteComponent } from './ngtemplete/ngtemplete.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamComponent } from './team/team.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { PlayersComponent } from './players/players.component';
import { PlayerdetailsComponent } from './playerdetails/playerdetails.component';
import { CourseListComponent } from './course-list/course-list.component'
import {HttpClientModule} from '@angular/common/http';
import { TripComponent } from './trip/trip.component';
import { FlightComponent } from './flight/flight.component';
import { FlishdetailsComponent } from './flishdetails/flishdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserComponent } from './user/user.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { MyproductComponent } from './myproduct/myproduct.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { StudenDetailsComponent } from './studen-details/studen-details.component'
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    StructrualComponent,
    ProductComponent,
    AttributeComponent,
    ProertybindingComponent,
    TwowayComponent,
    TemplatevarComponent,
    AtttributedirdemoComponent,
    ProductlistComponent,
    FirstComponent,
    ViewchildComponent,
    NgtempleteComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PagenotfoundComponent,
    TeamComponent,
    TeamdetailsComponent,
    PlayersComponent,
    PlayerdetailsComponent,
    CourseListComponent,
    TripComponent,
    FlightComponent,
    FlishdetailsComponent,
    ProductdetailsComponent,
    UserComponent,
    CoursedetailsComponent,
    MyproductComponent,
    EmpListComponent,
    StudenDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,MatListModule,
    MatButtonModule,
    
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
