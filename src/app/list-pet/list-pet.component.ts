import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
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

  constructor(private formBuilder: FormBuilder,
              private petServices: PetServices,
              private loginService: LoginService,
              private router: Router) {}

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.filtroPetForm = this.formBuilder.group({
        size: this.formBuilder.control('', [Validators.required]),
        coat: this.formBuilder.control('', [Validators.required]),
        age: this.formBuilder.control('', [Validators.required]),
        species: this.formBuilder.control('', [Validators.required]),
        sex: this.formBuilder.control('', [Validators.required])
      });

      this.petServices.pets().subscribe(pets => {
        this.pets = pets;
      });
    }
  }

  limparFiltros() {
    this.filtroPetForm.value.size = '';
    this.filtroPetForm.value.coat = '';
    this.filtroPetForm.value.age = '';
    this.filtroPetForm.value.species = '';
    this.filtroPetForm.value.sex = '';

    $('input[type=radio]').prop('checked', function () {
      return this.getAttribute('checked') == 'checked';
    });

  }
  viewPet(pet: Pet) {
    this.petView = pet;
  }

}
