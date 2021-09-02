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
  log: boolean = false;
  key = '';
  constructor(private service: PostserviceService) {}
  showOne(id: newPost) {
    this.selezione.titolo = id.titolo;
    this.selezione.contenuto = id.contenuto;
  }
  addPost(newPostit: newPost) {
    this.service.apiKEY = this.key;
    this.savedPosts.push(newPostit);
    let newmsg: string = JSON.stringify(this.savedPosts);
    this.service
      .postData(newmsg)
      .then(response => response.json(), error => alert(error));
  }
  login(k: string) {
    this.service.apiKEY = k;
    this.service
      .getData()
      .then(response => response.json(), error => alert(error))
      .then(data => {
        let obj = JSON.parse(data);
        for (let i in obj) {
          this.savedPosts.push(obj[i]);
        }
        this.log = true;
        this.key = k;
      });
  }
  getKey() {
    this.service.Key().then(key => {
      fetch(this.service.apiURL + '/post?key=' + key + '&msg=' + {}, {
        method: 'POST'
      }).then(response => response.json(), error => alert(error));
      this.key = key;
    });
    this.log = true;
  }



}
