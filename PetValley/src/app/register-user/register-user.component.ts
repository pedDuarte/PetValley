import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import {User} from '../model/user.model';

@Component({
  selector: 'pet-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  private user: User = new User();
  returnUrl: string;

  constructor() {}

  ngOnInit() {
  }

  onSubmit() {
    /*this.registerUserService.registerUser(this.user);*/
  }

}
