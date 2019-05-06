import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferRideVehicleConfirmPage } from './offer-ride-vehicle-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: OfferRideVehicleConfirmPage
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
  declarations: [OfferRideVehicleConfirmPage]
})
export class OfferRideVehicleConfirmPageModule {}
