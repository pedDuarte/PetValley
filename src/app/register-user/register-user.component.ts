import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgModel } from "@angular/forms";

import "rxjs/add/operator/map";

import { LoginService } from "./../services/login.service";
import { RegisterUserService } from "./register-user.service";

import { PostResponse } from "./../model/post-response.model";
import { User } from "../model/user.model";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "pet-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.css"]
})
export class RegisterUserComponent implements OnInit {
  userRegistred: User;
  image: any;
  hasAdded: boolean;
  hasError: boolean;

  constructor(
    private registerUserService: RegisterUserService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.loginService.isLogged()) {
      this.router.navigate(["/home"]);
    } else {
      this.hasAdded = false;
      this.hasError = false;
      // Se inscreve para ouvir o evento componente filho
      this.registerUserService.registerEmitted$.subscribe(user => {
        this.registerUserService.setImage(this.image);
        this.register();
      });
    }
  }

  register() {
    $("#myModal").modal("show");
    this.registerUserService.addUser().subscribe((response: PostResponse) => {
      if (response.success) {
        this.hasAdded = true;
        this.hasError = false;

        console.log(response.details);
        this.registerUserService.user.id = Number(response.details);
        this.userRegistred = this.registerUserService.getUser();
        console.log(this.userRegistred);
      } else {
        this.hasError = true;
      }
      $("#myModal").modal("hide");
    });
  }

  changeImage($event) {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    if (file !== undefined) {
      const myReader: FileReader = new FileReader();

      myReader.onloadend = e => {
        this.image = myReader.result;
      };
      myReader.readAsDataURL(file);
    } else {
      this.image = undefined;
    }
  }

  login() {
    this.loginService.signIn(this.userRegistred);
    this.router.navigate(["/home"]);
  }
}
