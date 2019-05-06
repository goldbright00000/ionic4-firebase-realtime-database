import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferRideSuccessPage } from './offer-ride-success.page';

const routes: Routes = [
  {
    path: '',
    component: OfferRideSuccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfferRideSuccessPage]
})
export class OfferRideSuccessPageModule {}
