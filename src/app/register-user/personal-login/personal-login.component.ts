import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterUserService } from './../register-user.service';

@Component({
  selector: 'pet-personal-login',
  templateUrl: './personal-login.component.html',
  styleUrls: ['./personal-login.component.css']
})
export class PersonalLoginComponent implements OnInit {

  personalLoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private registerUserService: RegisterUserService,
    private router: Router) { }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    if (!password || !confirmPassword) {
      return undefined;
    }
    if (password.value !== confirmPassword.value) {
      return {emailsIsNotEquals: true};
    }
    return undefined;
  }

  ngOnInit() {
    if (!this.registerUserService.hasPersonalAddress()) {
      this.router.navigate(['/registerUser']);
    }

    this.personalLoginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required]),
      confirmPassword: this.formBuilder.control('', [Validators.required])
    }, {validator: PersonalLoginComponent.equalsTo});
  }

  onRegister() {
    this.registerUserService.setPersonalLogin(this.personalLoginForm.value);
    this.registerUserService.emitRegister(this.registerUserService.user);
  }
}
