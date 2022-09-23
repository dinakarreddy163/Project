import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private subject=new Subject();

  constructor() { }

  getCart(){
    return this.subject.asObservable();
  }
  setCart(data:any){
    this.subject.next(data);
  }
}
