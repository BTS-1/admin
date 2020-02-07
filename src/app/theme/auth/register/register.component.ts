import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../_services/general.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../_models/User.class';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss',
  '../auth.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(public gService: GeneralService, public aService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      clicked: new FormControl(false)
    });
  }
  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.get('clicked').setValue(true);
    } else {
      const user = new User();
      user.username = this.registerForm.get('username').value;
      user.password = this.gService.encrypt(this.registerForm.get('password').value);
      user.type = 2;
      this.aService.addUser(user).then(
        () => this.gService.successThenNav('Registered!', '/auth/login'),
        err => this.gService.error('Could not register!')
      );
     }
  }
}
