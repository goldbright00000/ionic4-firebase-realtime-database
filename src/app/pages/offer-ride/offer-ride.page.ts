import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-offer-ride',
  templateUrl: './offer-ride.page.html',
  styleUrls: ['./offer-ride.page.scss'],
})
export class OfferRidePage implements OnInit {
  public onOfferRideForm: FormGroup;
  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private storage: Storage,
    public fireDb: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.onOfferRideForm = this.formBuilder.group({
      'to': [null, Validators.compose([
        Validators.required
      ])],
      'for': [null, Validators.compose([
        Validators.required
      ])],
      'date': [null, Validators.compose([
        Validators.required
      ])],
      'seats': [null, Validators.compose([
        Validators.required
      ])],
      'price': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  goToOfferRideLicenseConfirm() {
    if (this.onOfferRideForm.valid) {
      this.storage.get('authentication_id').then((val) => {
        const ref = this.fireDb.object('data/rides/'+val);
        ref.set(this.onOfferRideForm.value);
        this.navCtrl.navigateRoot('/offer-ride-license-confirm');
      });
    } else {
      this.errorMessage = 'Please fill out all fields.';
    }
  }

}
