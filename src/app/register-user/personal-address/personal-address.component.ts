import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterUserService } from './../register-user.service';

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
  }

  onNext() {
    this.registerUserService.setPessonalAddress(this.personalAddressForm.value);
  }

}
