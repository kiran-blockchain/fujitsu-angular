import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-auto-complete',
  templateUrl: './autocomplete.component.html'
 })
 
export class AutoCompleteComponent implements OnInit {

  selectedCountry: any;
        
  countries: any[];
      
  filteredCountries: any[];

  selectedCountries: any[];

  selectedCountryAdvanced: any[];

  filteredBrands: any[];

  constructor(private http:HttpClient) { }

  ngOnInit() {        
      // this.countryService.getCountries().then(countries => {
      //     this.countries = countries;
      // });
     /// this.countries =[{name:"India"},{name:"United States"},{name:"Australia"}]
     this.http.get("https://restcountries.eu/rest/v2/all").subscribe((countries:any)=>{
       this.countries=countries
     })
  }

  filterCountry(event) {
      //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
      let filtered : any[] = [];
      let query = event.query;
      for(let i = 0; i < this.countries.length; i++) {
          let country = this.countries[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }
      
      this.filteredCountries = filtered;
  }
  
}
