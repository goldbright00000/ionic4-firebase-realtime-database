import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-offer-ride-license-confirm',
  templateUrl: './offer-ride-license-confirm.page.html',
  styleUrls: ['./offer-ride-license-confirm.page.scss'],
})
export class OfferRideLicenseConfirmPage implements OnInit {
  public onConfirmationForm: FormGroup;
  public errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private storage: Storage,
    public fireDb: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.onConfirmationForm = this.formBuilder.group({
      'license': [null, Validators.compose([
        Validators.required
      ])],
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'lastname': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  doContinue() {
    if (this.onConfirmationForm.valid) {
      this.storage.get('authentication_id').then((val) => {
        const ref = this.fireDb.object('data/rides/'+val);
        ref.update(this.onConfirmationForm.value);
        this.navCtrl.navigateRoot('/offer-ride-vehicle-confirm');
      });
    } else {
      this.errorMessage = 'Please fill out all fields.';
    }
  }

}
