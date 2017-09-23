import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  user = {};

  users = [];

  constructor() { }

  ngOnInit() {

    this.user = {
      firstname: 'Diogo',
      lastname: 'Lourenço',
      email: 'diogo@hotmail.com'
    }

    this.users.push(this.user);
    
  }

}
