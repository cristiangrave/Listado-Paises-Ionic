import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCountryPageRoutingModule } from './list-country-routing.module';

import { ListCountryPage } from './list-country.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCountryPageRoutingModule
  ],
  declarations: [ListCountryPage]
})
export class ListCountryPageModule {}
