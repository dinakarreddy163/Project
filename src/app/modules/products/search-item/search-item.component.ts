import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  getProducts: any;
  searchVal:any;
  selectedValue:any;
  constructor(private router: ActivatedRoute, private app: AppService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.app.setTitle('Search-' + this.router.snapshot.params['id']);
    this.getItems();
  }

  getItems() {
    this.productService.getProducts(this.router.snapshot.params['id']).subscribe(data => {
      this.getProducts = data;
      this.getProducts.forEach((e: any, i: any) => {
        e.price = Math.random() * i + 100;
        e.qty = 0;
      })

    })
  }
  addToCart()
  {
    let cartData = this.getProducts.filter((e:any)=>e.qty!=0);
    this.app.setAddToCart(cartData);
    localStorage.setItem('cart',JSON.stringify(cartData));
  }
  // @HostListener("window:scroll", [])
  // onScroll(): void {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     // Load Your Data Here
  //     alert("hi")
  //   }
  // }
}
