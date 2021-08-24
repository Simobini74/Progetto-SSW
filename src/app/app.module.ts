import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NuovopostitComponent } from './nuovopostit/nuovopostit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NuovopostitComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
