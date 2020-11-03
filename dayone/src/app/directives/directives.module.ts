import { NgModule } from '@angular/core';
import { ChangeColorDirective } from './colorchange.directive';
import { AlphabetsOnlyOnlyDirective } from './alphabestsOnly.directives';
import { NumbersOnlyDirective } from './numbersOnly.directive';

@NgModule({
    declarations:[
        ChangeColorDirective,
        AlphabetsOnlyOnlyDirective,
        NumbersOnlyDirective
    ],
    
    providers:[],
    
    imports:[],
    
    exports:[ ChangeColorDirective,
        AlphabetsOnlyOnlyDirective,
        NumbersOnlyDirective]

})
export class CustomDirectiveModule {}