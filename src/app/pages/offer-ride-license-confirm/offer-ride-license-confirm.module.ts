import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferRideLicenseConfirmPage } from './offer-ride-license-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: OfferRideLicenseConfirmPage
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
  declarations: [OfferRideLicenseConfirmPage]
})
export class OfferRideLicenseConfirmPageModule {}
