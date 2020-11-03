import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
    selector:'[alphabetsOnly]'
})
export class AlphabetsOnlyOnlyDirective {
    constructor(private ele:ElementRef){

    }
    @HostListener ('keypress',['$event'])
    onInputChange(event){
        const intialValue = this.ele.nativeElement.value;
         console.log(event.keyCode);
         if((event.keyCode>=65 && event.keyCode<=90) ||(event.keyCode>=97 && event.keyCode<=122)){
            console.log(event.key);
         }
         else{
             event.preventDefault();
         }
    }
}