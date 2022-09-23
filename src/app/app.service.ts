import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private subject$ = new BehaviorSubject("Home");
  private isAutanticated = new Subject();
  private isloggedIn: any;
  private repaySubject$ = new ReplaySubject();
  //  _subject=this.subject$.asObservable();

  getTitle() {
    return this.subject$.asObservable();
  }

  setTitle(value: any) {
    this.subject$.next(value);
  }
  getAuth() {
    return this.isAutanticated.asObservable();
  }
  setAuth(value: any) {
    this.isAutanticated.next(value);
  }
  isAuth() {
    this.isAutanticated.asObservable().subscribe(data => {
      return this.isloggedIn = data;
    })
  }
  setAddToCart(val:any)
  {
    this.repaySubject$.next(val);
  }
  getAddToCart()
  {
   return this.repaySubject$.asObservable();
  }
  
}
