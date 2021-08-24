import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuovopostit',
  templateUrl: './nuovopostit.component.html',
  styleUrls: ['./nuovopostit.component.css']
})
export class NuovopostitComponent implements OnInit {
  @Output() newCityEvent = new EventEmitter<string>();
  constructor() { }
  newCity(newName: string) {
    this.newCityEvent.emit(newName);
  }

  ngOnInit() {
  }

}