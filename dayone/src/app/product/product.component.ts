import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selectedProduct=null;
  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name: "Nike",
      price: 2000,
      description:'Nike is a good product',
      imageUrl: "https://rukminim1.flixcart.com/image/452/542/k6v2ykw0/shoe/b/x/c/m7-22509-grey-8-m7-by-metronaut-grey-original-imafp87nt9gj93d4.jpeg?q=50"
    }
    ,
    {
      name: "Puma",
      price: 3000,
      description:'Puma is a nice product',
      imageUrl: "https://rukminim1.flixcart.com/image/452/542/k6v2ykw0/shoe/b/x/c/m7-22509-grey-8-m7-by-metronaut-grey-original-imafp87nt9gj93d4.jpeg?q=50"
    },
    {
      name: "Red Tape",
      price: 4000,
      description:'Red Tape is a nice product',
      imageUrl: "https://rukminim1.flixcart.com/image/452/542/k6v2ykw0/shoe/b/x/c/m7-22509-grey-8-m7-by-metronaut-grey-original-imafp87nt9gj93d4.jpeg?q=50"
    }
  ];
  changeColor(item){
    item.styleClass='change-background';
  }
  removeColor(item){
    item.styleClass='';
  }
  viewDetails(item){
    if(item == this.selectedProduct){
      this.selectedProduct=null;
    }
    else{
      this.selectedProduct= item;

    }
    
  }
}
