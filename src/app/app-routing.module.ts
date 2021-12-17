import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownContainerComponent } from './pages/dropdown-container/dropdown-container.component';
import { NgSelectComponent } from './pages/custom-select/ng-select/ng-select.component';
import { AppPopoverComponent } from './pages/popover-container/popover-apps-list/app-popover/app-popover.component';

const routes: Routes = [
  { path: 'custom-dropdown', component: DropdownContainerComponent },
  { path: 'custom-select', component: NgSelectComponent },
  { path: 'custom-popover', component: AppPopoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
