import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppModule } from '../app.module';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  constructor(private app: AppService) { }
  canActivate() {
    let isAuth = localStorage.getItem('isLogin');
    if (isAuth == 'true')
      return true;
    else
      return false;
  }

}
