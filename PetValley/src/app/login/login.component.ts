import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {User} from '../model/user.model';
import {LoginService} from './login.service';

@Component({
  selector: 'pet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.user).
    subscribe(
      data => {
      this.router.navigate([this.returnUrl]);
      },
      error => {
          console.log(error);
      });
  }
}
