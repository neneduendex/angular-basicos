import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
        <h1>{{titulo}}</h1>
        <h1>La base es: <strong>{{base}}</strong></h1>

        <button (click)="acumumular(base);">+ {{base}}</button>

        <span>{{numero}}</span>

        <button (click)="acumumular(-base);">- {{base}}</button>
   
   `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 0;
    public base: number = 5;
  
    acumumular(valor: number) {
      this.numero += valor;
    }
}