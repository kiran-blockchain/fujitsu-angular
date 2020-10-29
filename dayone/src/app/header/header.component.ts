import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title ="Fujistu"
  navItems =[
  {name:'Home',index:1},
  {name:"About",index:2},
  {name:'Register',index:3},
  {name:"Login",index:4},
  {name:'Products',index:5}
]
}
