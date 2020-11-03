import { Component, OnInit } from '@angular/core';
import { HubService } from 'src/app/hub.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private hubService:HubService) { }

  ngOnInit(): void {
    this.hubService.fetchCartInfo().subscribe(item=>{
      this.cartData.push(item);
    })
  };
  cartData=[];
  cartCount=0;
  title ="Fujistu"
  navItems =[
  {name:'Home',index:1},
  {name:"About",index:2},
  {name:'Register',index:3},
  {name:"Login",index:4},
  {name:'Products',index:5}
]
}
