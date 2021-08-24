import { Component, VERSION } from '@angular/core';

class newPost {
  titolo: string;
  contenuto: string; 
  constructor(titolo: string, contenuto: string) {
    this.titolo=titolo;
    this.contenuto=contenuto;
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
