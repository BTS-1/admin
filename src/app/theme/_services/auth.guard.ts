import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { GeneralService } from './general.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private aService: AuthService, private gService: GeneralService) {}
  canActivate():  boolean {
    if (this.aService.loggedIn()) {
      return true;
    } else {
      this.gService.error('Access is denied, Please login');
      this.gService.login();
      return false;
    }
  }
}
