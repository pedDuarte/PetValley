import { Address } from './../model/address.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'pet-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.users().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

}
