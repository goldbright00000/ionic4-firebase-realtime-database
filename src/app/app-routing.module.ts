import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'email-login', loadChildren: './pages/email-login/email-login.module#EmailLoginPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'message', loadChildren: './pages/message/message.module#MessagePageModule' },
  { path: 'calendar', loadChildren: './pages/calendar/calendar.module#CalendarPageModule' },
  { path: 'offer-ride-license-confirm', loadChildren: './pages/offer-ride-license-confirm/offer-ride-license-confirm.module#OfferRideLicenseConfirmPageModule' },
  { path: 'offer-ride-vehicle-confirm', loadChildren: './pages/offer-ride-vehicle-confirm/offer-ride-vehicle-confirm.module#OfferRideVehicleConfirmPageModule' },
  { path: 'offer-ride-data-confirm', loadChildren: './pages/offer-ride-data-confirm/offer-ride-data-confirm.module#OfferRideDataConfirmPageModule' },
  { path: 'offer-ride-success', loadChildren: './pages/offer-ride-success/offer-ride-success.module#OfferRideSuccessPageModule' },
  { path: 'start-ride', loadChildren: './pages/start-ride/start-ride.module#StartRidePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
