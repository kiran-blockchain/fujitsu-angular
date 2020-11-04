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
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    AutoCompleteModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
