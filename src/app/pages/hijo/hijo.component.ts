import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-hijo',
    templateUrl: './hijo.component.html',
    styles: []
})
export class HijoComponent implements OnInit {
    ngOnInit() {
        this.className = `btn ${this.className}`;
    }
    @Input('valor') progreso: number = 40;
    @Input() className: string = 'btn-primary';

    @Output() valorSalida: EventEmitter<number> = new EventEmitter();

    cambiarValor(valor: number) {
        if (this.progreso >= 100 && valor >= 0) {
            this.valorSalida.emit(100);
            return (this.progreso = 100);
        }
        if (this.progreso <= 0 && valor < 0) {
            this.valorSalida.emit(0);
            return (this.progreso = 0);
        }
        this.progreso = this.progreso + valor;
        this.valorSalida.emit(this.progreso);
    }

    onChange(nuevoValor: number) {
        if (nuevoValor >= 100) {
            this.progreso = 100;
        } else if (nuevoValor <= 0) {
            this.progreso = 0;
        } else {
            this.progreso = nuevoValor;
        }
        this.valorSalida.emit(this.progreso);
    }
}
