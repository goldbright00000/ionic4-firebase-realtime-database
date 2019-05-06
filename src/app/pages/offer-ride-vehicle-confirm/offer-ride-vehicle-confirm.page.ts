import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-offer-ride-vehicle-confirm',
  templateUrl: './offer-ride-vehicle-confirm.page.html',
  styleUrls: ['./offer-ride-vehicle-confirm.page.scss'],
})
export class OfferRideVehicleConfirmPage implements OnInit {
  public onConfirmationForm: FormGroup;
  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.onConfirmationForm = this.formBuilder.group({
      'license': [null, Validators.compose([
        Validators.required
      ])],
      'vehicle_color': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  doContinue() {
    this.navCtrl.navigateRoot('/offer-ride-data-confirm');
  }

}
