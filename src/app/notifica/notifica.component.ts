import { Component, Input } from '@angular/core';
import {newPost} from '../app.component'

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent {
  @Input() selezioneC: newPost;

clean() {
   this.selezioneC.contenuto = undefined;
  }

  constructor() { }

  ngOnInit() {
  }

}