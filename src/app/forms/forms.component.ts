import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  public listComida: Array<{comida: string, preco: string}> = [
    {comida: "X-salada", preco: "R$10,00"},
    {comida: "X-bacon", preco: "R$10,00"},
    {comida: "X-maionses", preco: "R$10,00"},
  ]

  public submitForm(form: NgForm) {
    if(form.valid) {
      console.log(form.value);
    }
  }
  
  public validateEmail(email: string) {
    return email;
  }
}
