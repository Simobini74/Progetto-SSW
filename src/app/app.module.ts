import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostserviceService } from './postservice.service';
import { ChiaveComponent } from './chiave/chiave.component';
import { NotificaComponent } from './notifica/notifica.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NuovopostitComponent } from './nuovopostit/nuovopostit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, NuovopostitComponent, ChiaveComponent, NotificaComponent ],
  bootstrap:    [ AppComponent ],
  providers:[PostserviceService]
})
export class AppModule { }
