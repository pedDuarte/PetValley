import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {User} from '../model/user.model';
import {RegisterUserService} from './register-user.service';

@Component({
  selector: 'pet-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  private user: User = new User();
  returnUrl: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerUserService: RegisterUserService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.registerUserService.registerUser(this.user);
  }

}
