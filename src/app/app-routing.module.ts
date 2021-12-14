import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownContainerComponent } from './pages/dropdown-container/dropdown-container.component';

const routes: Routes = [
  { path: 'custom-dropdown', component: DropdownContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
