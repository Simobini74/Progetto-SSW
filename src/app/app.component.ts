import { Component, VERSION } from '@angular/core';
import { PostserviceService } from './postservice.service';

class newPost {
  titolo: string;
  contenuto: string; 
  imprtante:boolean;
  }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  title: string = 'Progetto app Postit' ; 
  name: string ='Simone Bini';
  selezione : newPost =new newPost();
  savedPosts: Array<newPost> = [];



}
