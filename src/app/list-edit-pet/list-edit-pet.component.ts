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
    mensagemAlerta: string = "Deseja realmente deletar o animal ?";
    deletarPet: boolean = false;

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
            this.petServices.emitPetUpdate.subscribe(petUpdate => {
                $("#modalCarregamento").modal("show");
                this.petServices.pets().subscribe(pets => {
                    this.pets = pets;
                    $("#modalCarregamento").modal("hide");
                });
            });
        };
    };

    onStatusAlerta () {
        $("#modalAlerta").modal("hide");

        this.mensagemAlerta = "Deseja realmente deletar o animal ?";
        this.deletarPet = false;
    }

    onDelete(pet) {
        $("#modalAlerta").modal("hide");

        $("#modalCarregamento").modal("show");

        this.mensagemAlerta = "Animal deletado com sucesso!";

        this.petServices.deletePet(pet).subscribe(response => {
            if (response.success) {
                $("#modalCarregamento").modal("hide");

                this.petServices.pets().subscribe(pets => {
                    this.pets = pets;
                    $("#modalAlerta").modal("show");
                });

                this.deletarPet = true;
            }
        });
        
    }

    sendPet(pet: Pet) {
        this.currentPet = pet;
    }
}
