import { RegisterUserService } from './register-user.service';
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

  constructor(private registerUserService: RegisterUserService) {}

  ngOnInit() {
    this.registerUserService.registerEmitted$.subscribe(
      user => this.register(user)
    );
  }

  register(user: User) {
    // Chamar o serviço user para adicionar usuario
    console.log(user);
  }

}
