import { Component, VERSION } from '@angular/core';

class newPost {
  nome: string;
  valore: string; 
  constructor(nome: string, valore: string) {
    this.nome=nome;
    this.valore=valore;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  title: string = 'Progetto app Postit' ;
  name: string ='Simone Bini';
  postit: Array<newPost> =[
    new newPost('pippo','pluto'),
    new newPost('paperino','topolino')

  ]





}
