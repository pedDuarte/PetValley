import { Router } from '@angular/router';
import { PetServices } from './../services/petServices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../services/login.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pet-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  @Input()
  private pet;

  private petEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private petServices: PetServices,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.petEditForm = this.formBuilder.group({
        size: this.formBuilder.control('', [Validators.required]),
        coat: this.formBuilder.control('', [Validators.required]),
        age: this.formBuilder.control('', [Validators.required]),
        species: this.formBuilder.control('', [Validators.required]),
        sex: this.formBuilder.control('', [Validators.required])
      });
    }
  }

  }
