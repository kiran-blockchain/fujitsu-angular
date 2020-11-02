import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { NavBarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PhoneFormatterPipe } from './pipe/formatter.pipe';
import { ApiService } from './api.service';
import { HubService } from './hub.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    //register the phontformatter pipe
    PhoneFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //Register the Service with Module
  providers: [ApiService,HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
