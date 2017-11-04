import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { RegisterPetService } from './../services/registerPet.service';
//import { Vaccines } from './../model/vaccines.model';


@Component({
  selector: 'pet-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  private petForm: FormGroup;
  //private vaccinesForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerPetService: RegisterPetService) { }

  ngOnInit() {
    this.petForm = this.formBuilder.group({
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
  }
  onRegister() {

    this.registerPetService.addPet(this.petForm.value).subscribe();
  }

}
