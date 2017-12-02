import { LoginService } from './../services/login.service';
import { AdoptionService } from './../services/adoption.service';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "pet-pet-view",
  templateUrl: "./pet-view.component.html",
  styleUrls: ["./pet-view.component.css"]
})
export class PetViewComponent implements OnInit {
  @Input() pet;

  constructor(public adoptionService: AdoptionService,
              public loginService: LoginService) {}

  ngOnInit() {}

  adotar() {
    this.adoptionService.setAdoption(this.loginService.getUserLogged().id, this.pet.id_animal).subscribe(
      response => {
        console.log(response);
      });
  }
}
