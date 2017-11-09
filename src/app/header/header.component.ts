import { User } from "./../model/user.model";
import { LoginService } from "./../services/login.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pet-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isDev = true;

  constructor(public loginService: LoginService) {}

  ngOnInit() {
    if (this.isDev) {
      const user: User = new User();
      user.id = 99999;
      user.name = "DEV";
      // this.loginService.signIn(user);
    }
  }

  signOut() {
    // this.loginService.signOut();
  }
}
