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
  key:string;
  postit: Array<newPost>;
  
  constructor(private ps: PostserviceService ) {
    this.postit=new Array<newPost>();
   }
  inviaChiave = async (key: string = null) => {
    if(key == null) {
      const k = await this.ps.requestKey();
      this.inviaChiave(k);
    }
  }

  selezionaPost(itemName: string) {
	  var trovato: Array<newPost> = this.postit.filter(
      el => ( el.titolo === itemName )
    );
    this.selezione = trovato[0];
    
  }
  clean() {
    this.selezione=undefined;
  }
  addPost(newPost) {
    this.postit.push(newPost);
  }

}
