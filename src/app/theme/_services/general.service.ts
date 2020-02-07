import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GeneralService {
  public theme: string;
  public $theme = new Subject<string>();
  constructor(public router: Router) {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
    } else {
      this.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
    this.$theme.subscribe(
      x => this.setTheme(x)
    );
  }

  /*Hashing*/
    set(keys, value) {
      const key = CryptoJS.enc.Utf8.parse(keys);
      const iv = CryptoJS.enc.Utf8.parse(keys);
      const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      return encrypted.toString();
    }
    get(keys, value) {
      const key = CryptoJS.enc.Utf8.parse(keys);
      const iv = CryptoJS.enc.Utf8.parse(keys);
      const decrypted = CryptoJS.AES.decrypt(value, key, {
          keySize: 128 / 8,
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
    }
    encrypt(val: string): string {
      return this.set('123456$#@$^@1ERF', val);
    }
    decrypt(val: string): string {
      return this.get('123456$#@$^@1ERF', val);
    }
  /*End hashing*/

  /*Theme*/
    getTheme() {
      return this.theme;
    }
    setTheme(theme: string) {
      this.theme = theme;
      localStorage.setItem('theme', theme);
    }
  /*End theme*/

  /*Notifications*/
    success(message: string) {
      Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      });
    }
    error(message: string) {
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      });
    }
    info(message: string) {
      Swal.fire({
        title: 'Info!',
        text: message,
        icon: 'info',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      });
    }
    confirmDelete(val: string): Promise<boolean> {
      return new Promise<boolean>((resolve, reject) => {
        Swal.fire({
          title: 'Confirm Delete',
          text: val,
          icon: 'warning',
          confirmButtonColor: 'red',
          confirmButtonText: 'Delete!',
          showCancelButton: true,
          cancelButtonText: 'Cancel',
          focusConfirm: true,
          reverseButtons: true
        }).then(
          x => {
            if (x.value) {
              resolve(true);
            } else {
              reject(false);
            }
          }
        );
      });
    }
    load(val: Promise<any>): Promise<any> {
      return new Promise((resolve, reject) => {
        Swal.queue([{
          title: 'Loading',
          icon: 'info',
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false
        }]);
        val.then(
          x => {
            Swal.close();
            this.success('Successfully completed!'),
            resolve(x);
          }
        ).catch(
          x => {
            Swal.close();
            this.error('Could not complete!');
            reject(x);
          }
        );
      });
    }
    errorThenNav(message: string, path: string) {
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      }).then(
        x => this.router.navigate([path])
      );
    }
    successThenNav(message: string, path: string) {
      Swal.fire({
        title: 'Success!',
        text: message,
        icon: 'success',
        timer: 1800,
        timerProgressBar: true,
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false
      }).then(
        x => this.router.navigate([path])
      );
    }
    confirmPageExit(): Promise<boolean> {
      return Swal.fire({
        title: 'Unsaved Changes Alert!',
        text: 'Changes will be lost',
        icon: 'warning',
        confirmButtonColor: 'red',
        confirmButtonText: 'Leave',
        showCancelButton: true,
        cancelButtonText: 'Stay',
        focusConfirm: true,
        reverseButtons: true
      }).then(
        x => {
          if (x.value) {
            return true;
          } else {
            return false;
          }
        }
      );
    }
  /*End notifications*/

  /*Nav*/
    login(): void {
      this.router.navigateByUrl('auth/login');
    }
    forgot(): void {
      this.router.navigateByUrl('auth/forgot-password');
    }
    register(): void {
      this.router.navigateByUrl('auth/register');
    }
  /*End nav*/
}
