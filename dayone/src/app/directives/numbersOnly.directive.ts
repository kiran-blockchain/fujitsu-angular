import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
    selector:'[numbersOnly]'
})
export class NumbersOnlyDirective {
    constructor(private ele:ElementRef){

    }
    @HostListener ('keypress',['$event'])
    onInputChange(event){
        const intialValue = this.ele.nativeElement.value;
         console.log(event.keyCode);
         if(event.keyCode>=49 && event.keyCode<=57){
            console.log(event.key);
         }
         else{
             event.preventDefault();
         }
    }
}