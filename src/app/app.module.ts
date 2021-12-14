import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySelectorComponent } from './pages/dropdown-container/my-selector/my-selector.component';
import { ClientSharkComponent } from './pages/dropdown-container/clients/client-shark/client-shark.component';
import { ClientTractorComponent } from './pages/dropdown-container/clients/client-tractor/client-tractor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { HeaderComponent } from './header/header.component';
import { DropdownContainerComponent } from './pages/dropdown-container/dropdown-container.component';
import { NgSelectComponent } from './pages/custom-select/ng-select/ng-select.component';

@NgModule({
  declarations: [
    AppComponent,
    MySelectorComponent,
    ClientSharkComponent,
    ClientTractorComponent,
    ClickOutsideDirective,
    HeaderComponent,
    DropdownContainerComponent,
    NgSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
