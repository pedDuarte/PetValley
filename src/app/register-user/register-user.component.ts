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

  private user: User = new User();
  image: any;

  constructor(private registerUserService: RegisterUserService) {}

  ngOnInit() {
    // Se inscreve para ouvir o evento componente filho
    this.registerUserService.registerEmitted$.subscribe(
      user => {
        this.registerUserService.setImage(this.image);
        this.register();
      }
    );
  }

  register() {
    // Chamar o serviço user para adicionar usuario
    document.write(JSON.stringify(this.registerUserService.getUser()));
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
