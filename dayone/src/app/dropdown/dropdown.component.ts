
import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector :'app-drop-down',
    templateUrl :'./dropdown.component.html'
})
export class DropDownComponent {
    constructor(){

    }
    selectedValue ="";
    //recevies the data from external component
    @Input()
    options:[]

    @Output()
    selectOption:EventEmitter<any>= new EventEmitter();

    optionSelected(){
      this.selectOption.emit(this.selectedValue);
    }
}