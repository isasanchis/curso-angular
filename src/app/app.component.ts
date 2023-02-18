import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-binding></app-data-binding>

    <app-diretivas-estruturais></app-diretivas-estruturais>

    <app-diretivas-atributos>
      <h1>Aulas de diretivas atributo</h1>
      <h3>Final da aula</h3>
    </app-diretivas-atributos>

    <app-diretivas-atributos>
      <h1>Angular</h1>
      <h3>Aprendendo...</h3>
    </app-diretivas-atributos>

    <app-new-component></app-new-component>
    <app-diretivas-atributos></app-diretivas-atributos>


    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">Add</button> 

    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    
    <app-output (enviarDados)="setDados($event)"></app-output>

    <app-food-add></app-food-add>
    <app-food-list></app-food-list>  -->

    <app-forms></app-forms>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;

  public add(): void {
    this.addValue += 1;
  }

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
  }

  constructor() {}
}
