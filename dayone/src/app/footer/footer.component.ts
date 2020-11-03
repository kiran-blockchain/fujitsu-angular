import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  
  public phone = "9968688686";
  public countries=[];
  public selectedCountry:any;
  ngOnInit(): void {
    
    //this.selectedCountry=this.apiService.getSelecedCountry();
    this.apiService.getCountryListFromApi().subscribe(
      //success
      (x:any)=>{
      //this.countries =x;
      this.countries = x.map(c=>{
        c.value = c.alpha2Code;
        c.name = c.name;
        return c;
      })
    },
     (error)=>{
      console.log("An error occurred in receiving the data",error);
    })
  }
  selectCountry(item){
    this.selectedCountry = item;
    this.apiService.setSelectedCountry(this.selectedCountry);
  }
  
}
