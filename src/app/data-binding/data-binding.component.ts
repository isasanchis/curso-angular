import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public nome: string = "Isa";
  public idade: number = 26;

  public checkDisabled: boolean = true;
  public imgSrc: string = "https://static-cse.canva.com/blob/759754/IMAGE1.jpg"
  public imgTitle: string = "Property binding";

  public position: { x: number, y: number } = {
    x: 0,
    y: 0
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
