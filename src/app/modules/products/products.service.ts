import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(id:any)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+id);
  }
  getProductsBy()
  {
   return this.http.get("https://dummyjson.com/products");
  }

}
