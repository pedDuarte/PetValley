import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { PetServices } from './../services/petServices.service';
import { Pet } from './../model/pet.model';

@Component({
  selector: 'pet-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})
export class ListPetComponent implements OnInit {

  private pets: Pet[];

  private petView: Pet;

  constructor(private petServices: PetServices) { }

  ngOnInit() {

      this.petServices.pets().subscribe(pets => {
        this.pets = pets;
        debugger;
        console.log(this.pets);
      });
      
  }
  
  viewPet(pet:Pet){
    this.petView = pet;
  }

}
