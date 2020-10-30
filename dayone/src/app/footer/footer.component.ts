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
    this.apiService.getCountryListFromApi().subscribe((x:any)=>{
      this.countries =x;
    })
  }
  selectCountry(){
    this.apiService.setSelectedCountry(this.selectedCountry);
  }
  
}
