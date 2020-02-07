import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/User.class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GeneralService } from '../../_services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../auth.scss'
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public aService: AuthService, public gService: GeneralService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      clicked: new FormControl(false)
    });
  }
  login() {
    if (this.loginForm.invalid) {
      this.loginForm.get('clicked').setValue(true);
    } else {
    const user = new User();
    user.username = this.loginForm.get('username').value;
    user.password = this.gService.encrypt(this.loginForm.get('password').value);
    user.type = 2;
    this.aService.login(user).then(
      () => this.gService.successThenNav('Logged in!', '/home'),
      err => this.gService.error('Could not login!')
    );
  }}
}
