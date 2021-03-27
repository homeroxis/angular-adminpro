import { Component } from '@angular/core';

@Component({
    selector: 'app-padre',
    templateUrl: './padre.component.html',
    styles: []
})
export class PadreComponent {
    public progreso1: number = 45;
    public progreso2: number = 80;

    get getProgreso1(){
      return `${this.progreso1}%`;
    }
    get getProgreso2(){
      return `${this.progreso2}%`;
    }
}
