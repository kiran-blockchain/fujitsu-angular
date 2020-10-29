import { Component, OnInit } from '@angular/core';
import { ERROR_MESSAGES } from '../utils/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validations={};
  constructor() {
    this.validations= ERROR_MESSAGES;
   }
  registerUser = {
    firstName: "kiran  ",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    gender: "",
    country:""
  };
  ngOnInit(): void {
  }
  countryList = [{
    name: "India",
    code: "IN"
  },
  {
    name: "United States",
    code: "USA"
  }]
}
