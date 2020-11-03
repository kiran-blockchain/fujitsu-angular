import { NgModule } from '@angular/core';

import { PhoneFormatterPipe } from './formatter.pipe';


@NgModule({
    declarations: [PhoneFormatterPipe],
    providers: [],
    imports: [],
    exports: [PhoneFormatterPipe]

})
export class CustomPipesMModule { }