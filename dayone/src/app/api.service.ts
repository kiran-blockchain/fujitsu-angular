import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class ApiService {
    constructor(private httpClient:HttpClient) {
        this.selectedCountry="";
    }
    private selectedCountry:any;
    getCountryListStatic() {

        return [{ name: "India", code: "IN" },
        { name: "United States", code: "US" }
        ];
    }

    getCountryListFromApi(){
        let url ="https://restcountries.eu/rest/v2/all"
       return this.httpClient.get(url); 
    }

    setSelectedCountry (countryName){
        this.selectedCountry=countryName;
    }
    getSelecedCountry(){
        return this.selectedCountry;
    }
}