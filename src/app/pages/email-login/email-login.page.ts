import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.page.html',
  styleUrls: ['./email-login.page.scss'],
})
export class EmailLoginPage implements OnInit {
  public onEmailLoginForm: FormGroup;
  public errorMessage: string = '';

  constructor(
      private formBuilder: FormBuilder,
      public navCtrl: NavController,
      public auth: UserService,
      public loading: LoadingController
    ) { }

  ngOnInit() {
    this.onEmailLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  async login() {
    if (this.onEmailLoginForm.valid) {
      const load = await this.loading.create();
      await load.present();
      try {
        await this.auth.signInWithEmail(this.onEmailLoginForm.value);
        this.navCtrl.navigateRoot('/tabs/home');
      } catch (error) {
        this.errorMessage = error.message;
      }
      await load.dismiss();
    } else {
      this.errorMessage = 'Please fill out all fields.';
    }
  }

}
