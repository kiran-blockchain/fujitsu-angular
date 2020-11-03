import { Directive,  ElementRef } from '@angular/core';

@Directive({
    selector:'[changecolor]'
})

export class ChangeColorDirective {
    constructor(private ele:ElementRef){
        this.ele.nativeElement.style.color="red"

    }
}