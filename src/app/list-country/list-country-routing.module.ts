import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCountryPage } from './list-country.page';

const routes: Routes = [
  {
    path: '',
    component: ListCountryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCountryPageRoutingModule {}
