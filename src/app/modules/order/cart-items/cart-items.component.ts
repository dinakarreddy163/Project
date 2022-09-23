import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  constructor(private app: AppService,private order:OrderService,private router:Router) { }
  getProducts: any;
  totalAmount:number=0;
  ngOnInit(): void {
    this.getCartDetails();
    this.order.setCart(this.getProducts);

  }
  checkOutAll() {
    this.router.navigate(['orders/order-submit']);
  }

  getCartDetails() { 
    this.app.getAddToCart().subscribe((data) => {
      this.getProducts = data;
      this.totalAmount=0;
      this.getProducts.forEach((data:any)=>{
       this.totalAmount=this.totalAmount+(data.qty*data.price);
      })
    })
  }
}
