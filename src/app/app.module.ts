import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructrualComponent } from './structrual/structrual.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ProertybindingComponent } from './proertybinding/proertybinding.component';
import { TwowayComponent } from './twoway/twoway.component';
import {FormsModule} from '@angular/forms';
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
import {HttpClientModule} from '@angular/common/http'
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
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
