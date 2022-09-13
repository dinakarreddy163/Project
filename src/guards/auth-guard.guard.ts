import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app/app.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate {
  constructor(private app: AppService) {
  }
  canActivate() {
    return true
  }

}
