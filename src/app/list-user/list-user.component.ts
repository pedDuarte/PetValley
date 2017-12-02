import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user.model';
import { Address } from './../model/address.model';
import { UserService } from './../services/user.service';
import { LoginService } from './../services/login.service';

declare var jquery: any;
declare var $: any;

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

    // Se inscreve para ouvir o evento componente filho
    this.userService.editEmitted$.subscribe(user => {
      this.userService.users().subscribe(userUp => {
        this.users = userUp;
      });
    });
  }

  onStatusAlerta () {
    $("#modalAlerta").modal("hide");
    
    this.mensagemAlerta = "Deseja realmente deletar o usuário ?";
    this.deletarUsuario = false;
  }

  onDelete(user) {
    this.mensagemAlerta = "Usuário deletado com sucesso!";

    $("#modalAlerta").modal("hide");
    $("#modalCarregamento").modal("show");
    
    this.userService.deleteUser(user).subscribe(response => {
      if(response.success) {
        $("#modalCarregamento").modal("hide");

        this.userService.users().subscribe(users =>{
          this.users = users;

          this.deletarUsuario = true;

          $("#modalAlerta").modal("show");
        });
    
      }

    });
  }

  

  sendUser(user: User) {
    this.currentUser = user;
  }

}
