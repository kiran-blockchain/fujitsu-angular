import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DropDownModule } from '../dropdown/dropdown.module';
import { CustomPipesMModule } from '../pipe/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [HeaderComponent,FooterComponent],
    providers: [],
    imports: [FormsModule, DropDownModule,CustomPipesMModule,  BrowserModule,CommonModule],
    exports: [HeaderComponent,FooterComponent]

})
export class NavigationMModule { }