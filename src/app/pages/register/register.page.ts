import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
  public errorMessage: string = '';
  years = [];

  constructor(
      private formBuilder: FormBuilder,
      public navCtrl: NavController,
      public auth: UserService, 
      public loading: LoadingController
    ) { }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'gender': [null, Validators.compose([
        Validators.required
      ])],
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'lastname': [null, Validators.compose([
        Validators.required
      ])],
      'bithyear': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'college': [null, Validators.compose([
        Validators.required
      ])],
      'class': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
    for (let i = (new Date()).getFullYear(); i > 1950; i--) {
      this.years.push(i);
    }
  }

  goToLogin() {
    this.navCtrl.navigateRoot('/login');
  }

  async doRegister() {
    if (this.onRegisterForm.valid) {
      const load = await this.loading.create();
      await load.present();
      try {
        await this.auth.signUpWithEmail(this.onRegisterForm.value);
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
