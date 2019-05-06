import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-offer-ride-success',
  templateUrl: './offer-ride-success.page.html',
  styleUrls: ['./offer-ride-success.page.scss'],
})
export class OfferRideSuccessPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/tabs');
    }, 2000);
  }

}
