import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuovopostit',
  templateUrl: './nuovopostit.component.html',
  styleUrls: ['./nuovopostit.component.css']
})
export class NuovopostitComponent  {
  @Output() newPostEvent = new EventEmitter<Object>();

  createPost(titolo: string, contenuto: string, imp: boolean) {
    if (titolo != '') {
      this.newPostEvent.emit({ titolo, contenuto, imp});
    } else {
      alert('Il titolo non può essere vuoto');
    }
  }


}