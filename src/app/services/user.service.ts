import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User, auth } from "firebase";
import { AngularFireDatabase } from '@angular/fire/database';
// import { AuthProvider } from "firebase/auth";
import { Platform } from "@ionic/angular";
import { Observable } from "rxjs";
import { Facebook } from "@ionic-native/facebook/ngx";

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: Observable<User>;

  constructor(
    private storage: Storage,
    public fireAuth: AngularFireAuth,
    public platform: Platform,
    public facebook: Facebook,
    public fireDb: AngularFireDatabase
  ) {
    this.user = this.fireAuth.user;
  }

  async signInWithEmail(value) {
    const res = await this.fireAuth.auth.signInWithEmailAndPassword(value.email, value.password);
    this.storage.set('authentication_id', res.user.uid);
    return res;
  }

  async signUpWithEmail(value) {
    const res = await this.fireAuth.auth.createUserWithEmailAndPassword(value.email, value.password);
    this.storage.set('authentication_id', res.user.uid);
    const ref = this.fireDb.object('data/users/'+res.user.uid);
    delete value.password;
    ref.set(value);
    return res;
  }

  // async signInWithFacebook() {
  //   return this.platform.is("cordova")
  //     ? this.oauthSignInCordova(
  //         auth.FacebookAuthProvider.credential(
  //           (await this.facebook.login(["email"])).authResponse.accessToken
  //         )
  //       )
  //     : this.oauthSignInWeb(new auth.FacebookAuthProvider());
  // }

  async signOut() {
    return this.fireAuth.auth.signOut();
  }

  // async oauthSignInCordova(
  //   authCredential: auth.AuthCredential
  // ): Promise<auth.UserCredential> {
  //   return this.fireAuth.auth.signInAndRetrieveDataWithCredential(
  //     authCredential
  //   );
  // }

  // async oauthSignInWeb(provider: AuthProvider): Promise<auth.UserCredential> {
  //   return await this.fireAuth.auth.signInWithPopup(provider);
  // }

}
