import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
import { Address } from './../model/address.model';
import { UserService } from './../services/user.service';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'pet-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[];
  currentUser: User;
  mensagemAlerta: string = "Deseja realmente deletar o usuário ?";
  deletarUsuario: boolean = false;

  filtroUsuarioForm: FormGroup;

  constructor(private userService: UserService,
              private loginService: LoginService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.userService.users().subscribe(users => {
        this.users = users;
      });

      this.filtroUsuarioForm = this.formBuilder.group({
        nomeUsuario: this.formBuilder.control('', [Validators.required]),
      });
    }
  }

  onStatusAlerta () {
    $("#modalAlerta").modal("hide");
    
    this.mensagemAlerta = "Deseja realmente deletar o usuário ?";
    this.deletarUsuario = false;
  }

  onDelete(user) {
    this.userService.deleteUser(user).subscribe(response => {
      if(response.success)
      {
        this.userService.users().subscribe(users =>{
          this.users = users;
        });
        $("#modalCarregamento").modal("hide");
      }

    });
  }

  sendUser(user: User) {
    this.currentUser = user;
  }

}
