import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'pet-register-pet',
  templateUrl: './register-pet.component.html',
  styleUrls: ['./register-pet.component.css']
})
export class RegisterPetComponent implements OnInit {

  private petForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.petForm = this.FormBuilder.group({
      size: this.FormBuilder.control('',[Validators.required]),
      coat: this.FormBuilder.control('',[Validators.required]),
      age: this.FormBuilder.control('',[Validators.required]),
      neutered: this.FormBuilder.control('',[Validators.required]),
      vermifuges: this.FormBuilder.control('',[Validators.required]),
      name: this.FormBuilder.control('',[Validators.required]),
      description: this.FormBuilder.control('',[Validators.required]),
      species: this.FormBuilder.control('',[Validators.required]),
      sex: this.FormBuilder.control('',[Validators.required]),
      v8v10: this.FormBuilder.control('',[Validators.required]),
      giardise: this.FormBuilder.control('',[Validators.required]),
      gripeCanina: this.FormBuilder.control('',[Validators.required]),
      antiRabica: this.FormBuilder.control('',[Validators.required]),
    })
  }

}
