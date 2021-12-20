import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling'; // for virtual scrolling
import { OverlayModule } from '@angular/cdk/overlay'; // needed for popover
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySelectorComponent } from './pages/dropdown-container/my-selector/my-selector.component';
import { ClientSharkComponent } from './pages/dropdown-container/clients/client-shark/client-shark.component';
import { ClientTractorComponent } from './pages/dropdown-container/clients/client-tractor/client-tractor.component';
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';
import { HeaderComponent } from './header/header.component';
import { DropdownContainerComponent } from './pages/dropdown-container/dropdown-container.component';
import { NgSelectComponent } from './pages/custom-select/ng-select/ng-select.component';
import { SelectComponent } from './pages/custom-select/select/select.component';
import { AutofocusDirective } from './directives/auto-focus/autofocus.directive';
import { PopoverComponent } from './pages/popover-container/popover/popover.component';
import { AppPopoverComponent } from './pages/popover-container/popover-apps-list/app-popover/app-popover.component';
import { InsidePopoverComponent } from './pages/popover-container/popover-apps-list/inside-popover/inside-popover.component';
import { AddCssClassHeaderWrapDirective } from './directives/addCssClass-header-wrap/add-css-class-header-wrap.directive';

@NgModule({
  declarations: [
    AppComponent,
    MySelectorComponent,
    ClientSharkComponent,
    ClientTractorComponent,
    ClickOutsideDirective,
    HeaderComponent,
    DropdownContainerComponent,
    NgSelectComponent,
    SelectComponent,
    AutofocusDirective,
    AppPopoverComponent,
    PopoverComponent,
    InsidePopoverComponent,
    AddCssClassHeaderWrapDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ScrollingModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopoverComponent, InsidePopoverComponent]
})
export class AppModule { }
