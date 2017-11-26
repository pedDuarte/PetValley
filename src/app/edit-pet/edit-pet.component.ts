import { Pet } from './../model/pet.model';
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

  public pet;

  public petEditForm: FormGroup;

  public image: any;

  constructor(private formBuilder: FormBuilder,
              private petServices: PetServices,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/login']);
    } else {
      this.petEditForm = this.formBuilder.group({
        id_animal: this.formBuilder.control('', [Validators.required]),
        size: this.formBuilder.control('', [Validators.required]),
        coat: this.formBuilder.control('', [Validators.required]),
        age: this.formBuilder.control('', [Validators.required]),
        neutered: this.formBuilder.control('',[Validators.required]),
        vermifuges: this.formBuilder.control('',[Validators.required]),
        name: this.formBuilder.control('', [Validators.required]),
        description: this.formBuilder.control('',[Validators.required]),
        species: this.formBuilder.control('', [Validators.required]),
        sex: this.formBuilder.control('', [Validators.required]),
        avatar: this.formBuilder.control("", [Validators.required])
      });
      this.petServices.emitPetEdit.subscribe(petEdit => {
        this.pet = petEdit;
        this.loadPet();
      });
    }
  }

  changeImage($event) {
    this.readThis($event);
  }
  
  readThis(event: any): void {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.image = reader.result.split(',')[1];
        $("#modalEditarPet img").attr("src", reader.result);
      };
    }
  }

  loadPet() {
    if(this.pet)
    {    
      this.petEditForm.patchValue({
      id_animal: this.pet.id_animal,
      size: this.pet.size,
      coat: this.pet.coat,
      age:  this.pet.age,
      neutered: this.pet.neutered,
      vermifuges: this.pet.vermifuges,
      name: this.pet.name,
      description:  this.pet.description,
      species: this.pet.species,
      sex: this.pet.sex,
      avatar: this.pet.avatar});
  }
}


  onUpdate(pet) {
    if(this.petEditForm.value.avatar != this.image)
    {
      this.petEditForm.value.avatar = this.image;
    }
    this.petServices.updatePet(pet).subscribe(response => {
      if (response.success) {
        this.petServices.emitUpdate();
      }
    });
  }

}
