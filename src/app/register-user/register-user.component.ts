import { PostResponse } from './../model/post-response.model';
import { RegisterUserService } from './register-user.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import {User} from '../model/user.model';

@Component({
  selector: 'pet-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  image: any;
  hasAdded: boolean;
  hasError: boolean;

  constructor(private registerUserService: RegisterUserService) {}

  ngOnInit() {
    this.hasAdded = false;
    this.hasError = false;
    // Se inscreve para ouvir o evento componente filho
    this.registerUserService.registerEmitted$.subscribe(
      user => {
        this.registerUserService.setImage(this.image);
        this.register();
      }
    );
  }

  register() {
    $('#myModal').modal('show');
    console.log(this.registerUserService.getUser());
    this.registerUserService.addUser().subscribe((response: PostResponse) => {
      if (response.success === true) {
        $('#myModal').modal('hide');
        this.hasAdded = true;
        this.hasError = false;
      } else {
        this.hasError = true;
      }
    });
  }

  changeImage($event) {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    if (file !== undefined) {
      const myReader: FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.image = myReader.result;
      };
      myReader.readAsDataURL(file);
    } else {
      this.image = undefined;
    }
  }
}
