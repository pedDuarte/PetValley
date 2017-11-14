import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/firstPage']);
    } else {

    }
  }

}
