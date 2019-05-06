import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToOfferRide() {
    this.navCtrl.navigateRoot('/tabs/offer-ride');
  }

  goToSearchRide() {
    this.navCtrl.navigateRoot('/tabs/search-ride');
  }

}
