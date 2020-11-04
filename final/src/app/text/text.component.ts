import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
   placeHolder:String

   dataEntered="";

   @Output()
   onTextChanged:EventEmitter<any>= new EventEmitter();

   onTextChange(){
     this.onTextChanged.emit(this.dataEntered);
   }
}
