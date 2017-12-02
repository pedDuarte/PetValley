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

  public bar: any;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //public barChartLabels:string[] = ['Adoções', 'Animais'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any;

  constructor(private chartServices: chartServices) { }

  ngOnInit() {
    this.chartServices.getDados().subscribe(Response => {
      if (Response != undefined) {
        debugger;
        this.bar = Response[0];
        this.barChartOptions = {
          scaleShowVerticalLines: false,
          responsive: true
        };
        this.barChartData = [
          {data: this.bar.num_adoptions, label: 'Número de Adoções'},
          {data: this.bar.num_animals, label: 'Número de animais'}
        ]
    }
    });
  }

 

  // events
  /*public chartClicked(e:any):void {
    console.log(e);
  }*/

}
