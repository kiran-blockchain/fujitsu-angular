import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {AutoCompleteComponent} from './autocomplete/autocomplete.component';
//prime ng 
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {HttpClientModule} from "@angular/common/http";
import { TextComponent } from './text/text.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AutoCompleteComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
