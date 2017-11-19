import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'user-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input()

  public user;
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      surname: this.formBuilder.control('',[Validators.required]),
      code_cpf: this.formBuilder.control('', [Validators.required]),
      birthdate: this.formBuilder.control('', [Validators.required]),
      sex: this.formBuilder.control('', [Validators.required]),
      phone_number: this.formBuilder.control('', [Validators.required]),
      cellphone: this.formBuilder.control('',[]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      postalcode: this.formBuilder.control('', Validators.required),
      location: this.formBuilder.control('', [Validators.required]),
      typeLocation: this.formBuilder.control('', [Validators.required]),
      neighborhood: this.formBuilder.control('', [Validators.required]),
      city: this.formBuilder.control('', [Validators.required]),
      state: this.formBuilder.control('',[Validators.required]),
      numberHouse: this.formBuilder.control('',[Validators.required]),
      complement: this.formBuilder.control('', [Validators.required])
    })
  }

  loadUser() {
    this.userForm.patchValue({
      name: this.user.name,
      surname: this.user.surname,
      code_cpf: this.user.code_cpf,
      birthdate:  this.user.birthdate,
      sex: this.user.sex,
      phone_number: this.user.phone_number,
      cellphone: this.user.cellphone,
      email:  this.user.email,
      postalcode: this.user.postalcode,
      location: this.user.location,
      typeLocation: this.user.typeLocation,
      neighborhood: this.user.neighborhood,
      city: this.user.city,
      state: this.user.state,
      numberHouse: this.user.numberHouse,
      complement: this.user.complement
    });
    
      this.user = undefined;
  }


}
