import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable()
export class GeneralService {

  constructor(public router: Router) { }
  login(): void {
    this.router.navigateByUrl('auth/login');
  }
  forgot(): void {
    this.router.navigateByUrl('auth/forgot-password');
  }
  register(): void {
    this.router.navigateByUrl('auth/register');
  }

}
