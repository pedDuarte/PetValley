import { AdoptionService } from './../services/adoption.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-approve-adoption',
  templateUrl: './approve-adoption.component.html',
  styleUrls: ['./approve-adoption.component.css']
})
export class ApproveAdoptionComponent implements OnInit {

  adoptions: any;

  constructor(private adoptionService: AdoptionService) { }

  ngOnInit() {
    this.getAdoptions();
  }

  approve(idUser, idAnimal) {
    this.adoptionService.approve(idUser, idAnimal).subscribe(response => {
      this.getAdoptions();
    });
  }

  getAdoptions() {
    this.adoptionService.getAdoptions().subscribe(response => {
      console.log(response);
      this.adoptions = response;
    });
  }

}
