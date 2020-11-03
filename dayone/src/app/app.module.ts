import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PhoneFormatterPipe } from './pipe/formatter.pipe';
import { ApiService } from './api.service';
import { HubService } from './hub.service';
import { DropDownComponent } from './dropdown/dropdown.component';

import { CustomDirectiveModule } from './directives/directives.module';
import { NavigationMModule } from './navbar/nav.module';
import { DropDownModule } from './dropdown/dropdown.module';
import { CustomPipesMModule } from './pipe/pipes.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
   
    ProductComponent,

    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    //register the phontformatter pipe
   
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomDirectiveModule,
    NavigationMModule,
    DropDownModule,
    CustomPipesMModule
  ],
  //Register the Service with Module
  providers: [ApiService,HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
