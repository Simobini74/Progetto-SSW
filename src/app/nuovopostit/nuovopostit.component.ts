import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuovopostit',
  templateUrl: './nuovopostit.component.html',
  styleUrls: ['./nuovopostit.component.css']
})
export class NuovopostitComponent implements OnInit {
  @Output() newPostEvent = new EventEmitter<string>();
  constructor() { }
  newPost(newName: string) {
    this.newPostEvent.emit(newName);
  }

  ngOnInit() {
  }

}