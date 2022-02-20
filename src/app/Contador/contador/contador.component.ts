import {Component} from '@angular/core';


@Component({
    selector:"app-contador", //nombre del componente
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(+ base);"> + {{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(- base);"> - {{base}} </button>
    
    `
}) 

export class ContadorComponent {  //nombre de la clase a exportar
    titulo:string = 'Contador App';  //Propiedades
    numero:number=10;
    base:number=3;

    acumular(valor:number) {   //Métodos
        this.numero+=valor;
    }
}
