import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostserviceService } from './postservice.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NuovopostitComponent } from './nuovopostit/nuovopostit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, NuovopostitComponent ],
  bootstrap:    [ AppComponent ],
  providers:[PostserviceService]
})
export class AppModule { }
