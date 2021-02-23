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
import { LoginComponent } from './login/login.component'
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
