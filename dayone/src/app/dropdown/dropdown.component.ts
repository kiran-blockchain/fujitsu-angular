
import {Component, Input} from '@angular/core';

@Component({
    selector :'app-drop-down',
    templateUrl :'./dropdown.component.html'
})
export class DropDownComponent {
    constructor(){

    }
    @Input()
    options:[]
}