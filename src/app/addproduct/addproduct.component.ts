import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  productName=""
  description=""
  price=""
  companyName=""

  readValue=()=>{
    let data={
      "productName":this.productName,
      "description":this.description,
      "price":this.price,
      "companyName":this.companyName
    }
    console.log(data)

  }

  ngOnInit(): void {
  }

}
