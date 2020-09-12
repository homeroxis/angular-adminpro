import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Colors } from 'ng2-charts'

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styles: [
  ]
})
export class DonutsComponent {

  @Input() title: string = 'Sin título';

  // Doughnut
  @Input('labels') public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') public doughnutChartData: MultiDataSet = [[350, 450, 100]]

  public colors: Colors[] = [
    {backgroundColor:['blue', 'lightblue','gray']}
  ]

}
