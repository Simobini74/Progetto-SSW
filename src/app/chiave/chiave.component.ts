import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chiave',
  templateUrl: './chiave.component.html',
  styleUrls: ['./chiave.component.css']
})
export class ChiaveComponent {
  @Output() newKeyEvent = new EventEmitter<string>();
  @Output() newAltroEvent = new EventEmitter();

  useKey(key: string) {
    this.newKeyEvent.emit(key);
  }
  getKey(){
    this.newAltroEvent.emit();
  }


}