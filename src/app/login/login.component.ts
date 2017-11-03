import { LoginService } from './../services/login.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {User} from '../model/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'pet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();
  private loginForm: FormGroup;
  private error = undefined;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required])
    });
  }

  onLogin() {
    this.loginService.login(this.loginForm.value).subscribe(user => {
      if (user.id) {
        console.log(user);
        this.error = undefined;
        this.loginService.setUserLogged(user);
      }
      if (user  === 'SENHA INCORRETA') {
        this.error = 'Senha inválida!';
        console.log('Deu ruim: ' + user);
      }
      if (user === 'EMAIL INCORRETO') {
        this.error = 'Email não cadastrado para nenhum usuário!';
        console.log('Deu ruim msm:' + user);
      }
    });
  }
}
