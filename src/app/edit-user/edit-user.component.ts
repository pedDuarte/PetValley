import { RegisterUserService } from './../register-user/register-user.service';
import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'user-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  // @Input()
  public user;
  public userForm: FormGroup;
  public errorUpdate: boolean = undefined;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private registerUserService: RegisterUserService,
              private router: Router) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      surname: this.formBuilder.control('', [Validators.required]),
      code_cpf: this.formBuilder.control('', [Validators.required]),
      birthdate: this.formBuilder.control('', [Validators.required]),
      sex: this.formBuilder.control('', [Validators.required]),
      phone_number: this.formBuilder.control('', [Validators.required]),
      cellphone: this.formBuilder.control('', []),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      postalcode: this.formBuilder.control('', Validators.required),
      location: this.formBuilder.control('', [Validators.required]),
      typeLocation: this.formBuilder.control('', [Validators.required]),
      neighborhood: this.formBuilder.control('', [Validators.required]),
      city: this.formBuilder.control('', [Validators.required]),
      state: this.formBuilder.control('', [Validators.required]),
      numberHouse: this.formBuilder.control('', [Validators.required]),
      complement: this.formBuilder.control('', [Validators.required])
    });
  }

  @Input()
  set load(user) {
    if (user !== undefined) {
      this.user = user;
      this.initFormGroup();
    }
  }

  initFormGroup() {
    this.userForm = this.formBuilder.group({
      id: this.formBuilder.control(this.user.id, [Validators.required]),
      name: this.formBuilder.control(this.user.name, [Validators.required]),
      surname: this.formBuilder.control(this.user.surname, [Validators.required]),
      code_cpf: this.formBuilder.control(this.user.code_cpf, [Validators.required]),
      birthdate: this.formBuilder.control(this.user.birthdate, [Validators.required]),
      sex: this.formBuilder.control(this.user.sex, [Validators.required]),
      phone_number: this.formBuilder.control(this.user.phone_number, [Validators.required]),
      cellphone: this.formBuilder.control(this.user.cellphone, []),
      email: this.formBuilder.control(this.user.email, [Validators.required, Validators.email]),
      postalcode: this.formBuilder.control(this.user.postalcode, Validators.required),
      location: this.formBuilder.control(this.user.location, [Validators.required]),
      typeLocation: this.formBuilder.control(this.user.typeLocation, [Validators.required]),
      neighborhood: this.formBuilder.control(this.user.neighborhood, [Validators.required]),
      city: this.formBuilder.control(this.user.city, [Validators.required]),
      state: this.formBuilder.control(this.user.state, [Validators.required]),
      numberHouse: this.formBuilder.control(this.user.numberHouse, [Validators.required]),
      complement: this.formBuilder.control(this.user.complement, [Validators.required])
    });
  }

  edit() {
    this.userService.edit(this.userForm.value)
      .subscribe(response => {
        if (response.success === true) {
          this.errorUpdate = false;
          this.userService.emitEdit();
        } else {
          this.errorUpdate = true;
        }
      });
  }

  cancel() {

  }
}
