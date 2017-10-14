import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {User} from '../model/user.model';
//import {UserService} from '../services/user.service';

@Component({
  selector: 'pet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, /* private userService: UserService*/) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  onLogin() {
    /*this.userService.login("email","senha")
            .subscribe(user => console.log(user));*/
  }
}
