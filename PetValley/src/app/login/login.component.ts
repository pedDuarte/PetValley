import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import {User} from '../model/user.model';
import {LoginService} from './login.service';

@Component({
  selector: 'pet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginService.login(this.user));
  }
}
