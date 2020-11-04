import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value: Date;
  placeHolderText="DOB";
  placeHolderText2="DOb2";
  changedData ="";
  handleChange(data){
    this.changedData = data; 
  }
}
