import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-start-ride',
  templateUrl: './start-ride.page.html',
  styleUrls: ['./start-ride.page.scss'],
})
export class StartRidePage implements OnInit {
  public ride: any;

  constructor(
    private storage: Storage,
    public fireDb: AngularFireDatabase
  ) {
    this.ride = {
      code: null,
      date: '',
      email: '',
      for: '',
      lastname: '',
      license: '',
      name: '',
      phone: '',
      price: '',
      seats: null,
      to: ''
    }
    storage.get('authentication_id').then((val) => {
      fireDb.database.ref('data/rides/'+val).on('value', resp => {
        this.ride = convertData(resp);
      });
    });
  }

  ngOnInit() {
  }

}

export const convertData = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
