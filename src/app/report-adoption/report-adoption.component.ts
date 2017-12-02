import { Response } from '@angular/http';
import { chartServices } from './../services/chartServices.service';
import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { debug } from 'util';


@Component({
  selector: 'pet-report-adoption',
  templateUrl: './report-adoption.component.html',
  styleUrls: ['./report-adoption.component.css']
})
export class ReportAdoptionComponent implements OnInit {

  constructor(private chartServices: chartServices) { }

  ngOnInit() {
    this.chartServices.getDados().subscribe(Response => {
      if (Response != undefined) {
        this.bar = Response[0];
        this.barChartData = [
          {data: [this.bar.num_adoptions], label: 'Número de Adoções'},
          {data: [this.bar.num_animals], label: 'Número de animais'}
        ]
    }
    });
  }

    public bar: any;
    public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData: any[];
     
    

}
