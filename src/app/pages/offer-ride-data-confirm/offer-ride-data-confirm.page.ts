import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-offer-ride-data-confirm',
  templateUrl: './offer-ride-data-confirm.page.html',
  styleUrls: ['./offer-ride-data-confirm.page.scss'],
})
export class OfferRideDataConfirmPage implements OnInit {
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
      'phone': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'code': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  doContinue() {
    if (this.onConfirmationForm.valid) {
      this.storage.get('authentication_id').then((val) => {
        const ref = this.fireDb.object('data/rides/'+val);
        ref.update(this.onConfirmationForm.value);
        this.navCtrl.navigateRoot('/offer-ride-success');
      });
    } else {
      this.errorMessage = 'Please fill out all fields.';
    }
  }

}
