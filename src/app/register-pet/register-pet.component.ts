import { PostResponse } from './../model/post-response.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

import { RegisterPetService } from './../services/registerPet.service';
import { LoginService } from './../services/login.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'pet-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  private petForm: FormGroup;
  private abrirModal: boolean;

  constructor(private formBuilder: FormBuilder,
              private registerPetService: RegisterPetService,
              private loginService: LoginService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.petForm = this.formBuilder.group({
        size: this.formBuilder.control('', [Validators.required]),
        coat: this.formBuilder.control('', [Validators.required]),
        age: this.formBuilder.control('', [Validators.required]),
        neutered: this.formBuilder.control('',[Validators.required]),
        vermifuges: this.formBuilder.control('',[Validators.required]),
        name: this.formBuilder.control('', [Validators.required]),
        description: this.formBuilder.control('',[Validators.required]),
        species: this.formBuilder.control('', [Validators.required]),
        sex: this.formBuilder.control('', [Validators.required])
      });
    }
  }

  onRegister() {
    this.registerPetService.addPet(this.petForm.value).subscribe((response: PostResponse)=>{
      if(response.success)
      {
        this.petForm.reset();
        $('#modalAlerta').modal('show');
      }
    });
  }

  back() {
    this.location.back();
  }

}
