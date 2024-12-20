import { Component } from '@angular/core';

@Component({
  selector:'app-sample',
  templateUrl:'./sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent {
  items =[
    {id:5001, name:'Soap',price:20},
    {id:5002,name:'Milk',price:25},
    {id:5003,name:'Face-Cream',price:30},
    {id:5004,name:'Diary-Milk',price:40,discount:20},
    {id:5005,name:'Perfume',price:50,discount:20},
  ];
  cart:{id:number;quantity:number;name:string;price:number;total:number }[]=[];
  selectedItem:any=null;
  quantity:number=1;
  totalBill:number = 0;

  addToCart(){
    if (this.selectedItem && this.quantity>0) {
      const discount=this.selectedItem.discount || 0;
      const priceAfterDiscount=this.selectedItem.price * (1 - discount / 100);
      const total=priceAfterDiscount * this.quantity;

      this.cart.push({
        id: this.selectedItem.id,
        quantity:this.quantity,
        name:this.selectedItem.name,
        price:this.selectedItem.price,
        total:total,
      });
      this.totalBill+=total;
      this.selectedItem=null;
      this.quantity=1;
    }
  }
  resetCart(){
    this.cart=[];
    this.totalBill=0;
  }
}