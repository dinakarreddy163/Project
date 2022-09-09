import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private subject$= new Subject();
  //  _subject=this.subject$.asObservable();

  getTitle()
  {
    return this.subject$.asObservable();
  }
  
  setTitle(value:any)
  {
    this.subject$.next(value);
  }
}
