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

  private filtroPetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private petServices: PetServices){ }

  ngOnInit() {

    this.filtroPetForm = this.formBuilder.group({
      size: this.formBuilder.control('',[Validators.required]),
      coat: this.formBuilder.control('',[Validators.required]),
      age: this.formBuilder.control('',[Validators.required]),
      neutered: this.formBuilder.control('',[Validators.required]),
      vermifuges: this.formBuilder.control('',[Validators.required]),
      name: this.formBuilder.control('',[Validators.required]),
      description: this.formBuilder.control('',[Validators.required]),
      species: this.formBuilder.control('',[Validators.required]),
      sex: this.formBuilder.control('',[Validators.required])
    })

    this.petServices.pets().subscribe(pets => {
      this.pets = pets;
    });
      
  }

  filtrosPet()
  {
    console.log(this.filtroPetForm)
  }  
  viewPet(pet:Pet){
    this.petView = pet;
  }

}
