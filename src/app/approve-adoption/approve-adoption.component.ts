import { Router } from '@angular/router';
import { ROUTES } from './../app.routes';
import { LoginService } from './../services/login.service';
import { UserService } from './../services/user.service';
import { AdoptionService } from './../services/adoption.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-approve-adoption',
  templateUrl: './approve-adoption.component.html',
  styleUrls: ['./approve-adoption.component.css']
})
export class ApproveAdoptionComponent implements OnInit {

  adoptions: any;
  userVisit: any;

  constructor(private adoptionService: AdoptionService,
              private userService: UserService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/firstPage']);
    }
    this.getAdoptions();
  }

  approve(idUser, idAnimal) {
    this.adoptionService.approve(idUser, idAnimal).subscribe(response => {
      this.getAdoptions();
    });
  }

  getAdoptions() {
    this.adoptionService.getAdoptions().subscribe(response => {
      console.log(response);
      this.adoptions = response;
    });
  }

  getUserData(idUser) {
    this.userService.getUser(idUser).subscribe(response => {
      console.log(response);
      this.userVisit = response;
    });
  }


}
