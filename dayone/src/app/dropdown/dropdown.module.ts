import { NgModule } from '@angular/core';
;
import { FormsModule } from '@angular/forms';
import { DropDownComponent } from './dropdown.component';


@NgModule({
    declarations: [DropDownComponent],
    providers: [],
    imports: [FormsModule],
    exports: [DropDownComponent]

})
export class DropDownModule { }