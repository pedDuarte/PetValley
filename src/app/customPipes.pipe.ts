import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from './model/pet.model';


@Pipe({name: 'filtraPetsSex',
        pure: false
})
export class FiltraPetsPipe implements PipeTransform {

  transform(allPets: Pet[], filtroPetForm:any): any {
    if (filtroPetForm.value.sex != "" && allPets != undefined){
        allPets = allPets.filter(pet => pet.sex == filtroPetForm.value.sex);
      return  allPets;
    }
  }
}