import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';

<<<<<<< HEAD
import { Storage } from '@ionic/storage-angular';

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { GooglePlus } from '@ionic-native/google-plus/ngx';
=======
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

>>>>>>> 4c0fc0c (apk+++)
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_page = false;
  onboarding_page = true;
  user: any = null;
<<<<<<< HEAD
  userData: any = {};
  loggedIn!: boolean;
  
  constructor(
    public config: CommonService,
    private storage: Storage,
    private googlePlus: GooglePlus
    // private authService: AuthService
  ) {}
=======

  loggedIn!: boolean;
  constructor(public config: CommonService, private storage: Storage) {}
>>>>>>> 4c0fc0c (apk+++)

  ngOnInit() {
    this.storage.create();
  }

<<<<<<< HEAD
=======
  async signIn() {}

  async refresh() {}

  async signOut() {
    // const authCode = await GoogleAuth.refresh();
  }

>>>>>>> 4c0fc0c (apk+++)
  getStart() {
    this.login_page = true;
    this.onboarding_page = false;
  }

  async social_login(n) {
<<<<<<< HEAD
    if (n == 'goggle') {
      // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.googlePlus.login({})
      .then(result => this.userData = result)
      .catch(err => this.userData = `Error ${JSON.stringify(err)}`);
      // this.config.navigate('home');
=======
    if (n == 'google') {
      this.config.navigate('home');
>>>>>>> 4c0fc0c (apk+++)
    }
    if (n == 'apple') {
      this.config.navigate('home');
    }
    if (n == 'facebook') {
<<<<<<< HEAD
      // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
=======
>>>>>>> 4c0fc0c (apk+++)
      this.config.navigate('home');
    }
    if (n == 'skip') {
      this.config.navigate('home');
    }
  }
<<<<<<< HEAD


  signInWithGoogle(): void {
    
  }
 
  signInWithFB(): void {
    
  }
 
  // signOut(): void {
  //   this.authService.signOut();
  // }
=======
>>>>>>> 4c0fc0c (apk+++)
}
