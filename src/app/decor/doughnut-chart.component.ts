import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svr-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Doughnut
  public doughnutChartLabels:string[] = ['AppTeam A', 'AppTeam B', 'AppTeam C'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}