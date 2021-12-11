import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySelectorComponent } from './my-selector/my-selector.component';
import { ClientSharkComponent } from './client-shark/client-shark.component';
import { ClientTractorComponent } from './client-tractor/client-tractor.component';

@NgModule({
  declarations: [
    AppComponent,
    MySelectorComponent,
    ClientSharkComponent,
    ClientTractorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }