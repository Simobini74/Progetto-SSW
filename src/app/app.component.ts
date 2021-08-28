import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

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
  selezione : newPost;
  name: string ='Simone Bini';
  postit: Array<newPost> =[
    new newPost('pippo','pluto'),
    new newPost('paperino','topolino')

  ]
  constructor(private ps: PostserviceService ) { }
  selezionaPost(itemName: string) {
	  var trovato: Array<newPost> = this.postit.filter(
      el => ( el.titolo === itemName )
    );
    this.selezione = trovato[0];
    this.ps.getData(this.selezione.titolo).subscribe(
      ( x: any ) => this.selezione.contenuto = x.data[0].temp,
      err => console.error('Observer got an error: ' + err)
    );
    
  }
  clean() {
    this.selezione=undefined;
  }
  addPost(newPost) {
    this.postit.push(newPost);
  }

}
