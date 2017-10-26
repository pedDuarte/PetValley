import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'pet-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  private userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      surname: this.formBuilder.control('',[Validators.required]),
      cpf: this.formBuilder.control('', [Validators.required]),
      birthday: this.formBuilder.control('', [Validators.required]),
      sex: this.formBuilder.control('', [Validators.required]),
      phone: this.formBuilder.control('', [Validators.required]),
      cellphhone: this.formBuilder.control('',[]),
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

}
