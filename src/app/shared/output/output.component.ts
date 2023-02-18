import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: "Isa", idade: 26},
    {nome: "Bruno", idade: 20},
    {nome: "Mari", idade: 65}
  ];

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
