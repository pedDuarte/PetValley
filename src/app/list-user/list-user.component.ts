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

  constructor(private userService: UserService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.userService.users().subscribe(users => {
        this.users = users;
        console.log(users);
      });
    }
  }

}
