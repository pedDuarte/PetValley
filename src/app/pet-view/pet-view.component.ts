import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "pet-pet-view",
  templateUrl: "./pet-view.component.html",
  styleUrls: ["./pet-view.component.css"]
})
export class PetViewComponent implements OnInit {
  @Input() pet;

  constructor() {}

  ngOnInit() {}
}
