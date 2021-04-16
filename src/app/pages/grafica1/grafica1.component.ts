import { Component } from '@angular/core';

@Component({
    selector: 'app-grafica1',
    templateUrl: './grafica1.component.html',
    styles: []
})
export class Grafica1Component {
    public labels = [
        ['Ventas 1', 'Ventas 4', 'Ventas 3'],
        ['Comppras 1', 'Comppras 2', 'Comppras 3'],
        ['Pérdidas 1', 'Pérdidas 2', 'Pérdidas 3'],
        ['Robos 1', 'Robos 2', 'Robos 3']
    ];
    public data = [
        [150, 280, 50],
        [20, 400, 230],
        [600, 50, 100],
        [400, 40, 80]
    ];
}
