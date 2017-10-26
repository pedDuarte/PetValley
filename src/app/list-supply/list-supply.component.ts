import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-list-supply',
  templateUrl: './list-supply.component.html',
  styleUrls: ['./list-supply.component.css']
})
export class ListSupplyComponent implements OnInit {

  supply = {};
  
  supplies = [];
  
  constructor() { }

  ngOnInit() {

    this.supply = {
      type: 'Ração',
      expirationDate: '23/09/2017',
      quantity: '10 Kilos'
    }

    this.supplies.push(this.supply);

  }

}
