import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      name: "Nike",
      price: 2000,
      imageUrl: "https://rukminim1.flixcart.com/image/452/542/k6v2ykw0/shoe/b/x/c/m7-22509-grey-8-m7-by-metronaut-grey-original-imafp87nt9gj93d4.jpeg?q=50"
    }
    ,
    {
      name: "Puma",
      price: 3000,
      imageUrl: "https://rukminim1.flixcart.com/image/452/542/k6v2ykw0/shoe/b/x/c/m7-22509-grey-8-m7-by-metronaut-grey-original-imafp87nt9gj93d4.jpeg?q=50"
    },
    {
      name: "Red Tape",
      price: 4000,
      imageUrl: "https://rukminim1.flixcart.com/image/452/542/k6v2ykw0/shoe/b/x/c/m7-22509-grey-8-m7-by-metronaut-grey-original-imafp87nt9gj93d4.jpeg?q=50"
    }
  ]

}
