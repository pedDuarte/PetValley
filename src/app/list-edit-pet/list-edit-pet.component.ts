import { Pet } from "./../model/pet.model";
import { PostResponse } from "./../model/post-response.model";
import { PetServices } from "./../services/petServices.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./../services/login.service";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "pet-list-edit-pet",
  templateUrl: "./list-edit-pet.component.html",
  styleUrls: ["./list-edit-pet.component.css"]
})
export class ListEditPetComponent implements OnInit {
  pets: Pet[];
  currentPet: Pet;

  constructor(
    public loginService: LoginService,
    public router: Router,
    public petServices: PetServices
  ) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(["/login"]);
    } else {
      this.petServices.pets().subscribe(pets => {
        this.pets = pets;
      });
      this.petServices.emitPetUpdate.subscribe(response => {
        this.petServices.pets().subscribe(pets => {
          this.pets = pets;
        });
      });
    };
  };

  onDelete(pet) {
    this.petServices.deletePet(pet).subscribe(response => {
      if (response.success) {
        $("#modalAlerta").modal("show");
        this.petServices.pets().subscribe(pets => {
          this.pets = pets;
        });
      }
    });
  }

  sendPet(pet: Pet) {
    this.currentPet = pet;
  }
}
