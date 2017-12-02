import { Router } from '@angular/router';
import { RegisterUserService } from './../register-user.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { User } from './../../model/user.model';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'pet-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  @Input() user: User;

  personalDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private registerUserService: RegisterUserService,
    private router: Router) { }

  ngOnInit() {
    this.personalDataForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      surname: this.formBuilder.control('', [Validators.required]),
      cpf: this.formBuilder.control('', [Validators.required]),
      birthday: this.formBuilder.control('', [Validators.required]),
      sex: this.formBuilder.control('', [Validators.required]),
      cellphone: this.formBuilder.control(''),
      phone: this.formBuilder.control('', [Validators.required]),
    });

    $(document).ready(function(){
      $('#cpf').mask('000.000.000-00', {reverse: true});
      $('#phone_number').mask('(00) 0000-0000');
      $('#cellphone').mask('(00) 0000-00000');
    });
  }

  onNext() {
    this.registerUserService.setPersonalData(this.personalDataForm.value);
  }

}
