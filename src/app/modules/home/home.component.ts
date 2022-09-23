import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  checkAuth:any = false;
  constructor(private app: AppService, private home: HomeService) {
    this.app.setTitle('Home');
  }
  ngOnInit(): void {
    this.getProducts();
    this.checkIsAuth();
  }
  getProducts() {
    this.home.getProducts().subscribe(data => {
      this.products=data;
      console.log(this.products)
    })
  }
  checkIsAuth() {
    this.app.getAuth().subscribe(data => {
      this.checkAuth = data;
    })
  }
}
