import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from './model/pet.model';


@Pipe({name: 'filtraPetsSex',
        pure: false
})
export class FiltraPetsPipe implements PipeTransform {

  transform(allPets: Pet[], filtroPetForm:any): any {
    if (filtroPetForm.value.species != "" && allPets != undefined){
        allPets = allPets.filter(pet => pet.species == filtroPetForm.value.species);
    }
    if (filtroPetForm.value.sex != "" && allPets != undefined){
      allPets = allPets.filter(pet => pet.sex == filtroPetForm.value.sex);
    }
    if (filtroPetForm.value.age != "" && allPets != undefined){
      allPets = allPets.filter(pet => pet.age == filtroPetForm.value.age);
    }  
    if (filtroPetForm.value.size != "" && allPets != undefined){
      allPets = allPets.filter(pet => pet.size == filtroPetForm.value.size);
    }
    if (filtroPetForm.value.coat != "" && allPets != undefined){
      allPets = allPets.filter(pet => pet.coat == filtroPetForm.value.coat);
    }  
    if (filtroPetForm.value.coat != "" && allPets != undefined){
      allPets = allPets.filter(pet => pet.coat == filtroPetForm.value.coat);
    }
        
    return  allPets;

  }
}