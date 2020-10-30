import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ERROR_MESSAGES } from '../utils/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validations={};
  constructor(private apiService:ApiService) {
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
  countryList:any
  ngOnInit(): void {
    this.registerUser.country=this.apiService.getSelecedCountry();
    this.countryList = this.apiService.getCountryListStatic();
  }
  selectCountry(country){
    this.apiService.setSelectedCountry(country)
  }
}
