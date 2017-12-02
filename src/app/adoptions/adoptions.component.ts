import { AdoptionService } from './../services/adoption.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {

  adoptions: any;

  constructor(public adoptionService: AdoptionService) { }

  ngOnInit() {
    this.adoptionService.getAnimalApproved().subscribe(response => {
      this.adoptions = response;
      console.log(this.adoptions);
    });
  }

}
