import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferRideDataConfirmPage } from './offer-ride-data-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: OfferRideDataConfirmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfferRideDataConfirmPage]
})
export class OfferRideDataConfirmPageModule {}
