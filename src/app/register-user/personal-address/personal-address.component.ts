import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterUserService } from './../register-user.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'pet-personal-address',
  templateUrl: './personal-address.component.html',
  styleUrls: ['./personal-address.component.css']
})
export class PersonalAddressComponent implements OnInit {

  personalAddressForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private registerUserService: RegisterUserService,
    private router: Router) { }

  ngOnInit() {
    if (!this.registerUserService.hasPersonalData()) {
      this.router.navigate(['/registerUser']);
    }

    this.personalAddressForm = this.formBuilder.group({
      postalCode: this.formBuilder.control('', [Validators.required]),
      location: this.formBuilder.control('', [Validators.required]),
      typeLocation: this.formBuilder.control('', [Validators.required]),
      neighborhood: this.formBuilder.control('', [Validators.required]),
      city: this.formBuilder.control('', [Validators.required]),
      state: this.formBuilder.control('', [Validators.required]),
      numberHouse: this.formBuilder.control('', [Validators.required]),
      complement: this.formBuilder.control('')
    });

    $(document).ready(function(){
      $('#cep').mask('00000-000');
      $('#number').mask('0000000');
    });

    this.onChanges();
  }

  onChanges() {
    this.personalAddressForm.get('postalCode').valueChanges.subscribe(postalCode => {

      if(postalCode != undefined && postalCode.length == 8)
      {
        this.registerUserService.getAddress(postalCode).subscribe(response =>{

          if(!response.erro)
          {
            var logradouro = response.logradouro.split(" ");

            for (var i = 2; i < logradouro.length; i++) 
            {
              logradouro[1] += " "+logradouro[i];
            }

            this.personalAddressForm.patchValue({
              location: logradouro[1],
              typeLocation: logradouro[0],
              neighborhood: response.bairro,
              city: response.localidade,
              state: response.uf
            })
          }
          else
          {
            console.log("cep invalido");
          }
        });
      }
    });
  }

  onNext() {
    this.registerUserService.setPessonalAddress(this.personalAddressForm.value);
  }

}
