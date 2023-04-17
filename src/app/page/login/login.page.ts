import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';

<<<<<<< HEAD
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
=======
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


const FACEBOOK_PERMISSIONS = [
  'email',
  'user_birthday',
  'user_photos',
  'user_gender',
];
>>>>>>> b1d1df0 (filter ++)
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
=======
  header_logo = true;
  loggedIn!: boolean;
  fristTime: any;
  constructor(public config: CommonService, private storage: Storage) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }
>>>>>>> b1d1df0 (filter ++)

  ngOnInit() {
    this.storage.create();
  }
  ionViewDidEnter() {
    GoogleAuth.initialize();

<<<<<<< HEAD
<<<<<<< HEAD
=======
  async signIn() {}
=======
>>>>>>> b1d1df0 (filter ++)

    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    if (this.user) {
      this.onboarding_page = false;
      this.login_page = false;
      this.header_logo = false;
      this.config.navigate('home');
    }
    if (!this.user) {
      // this.onboarding_page = true;
      this.login_page = true;
      this.header_logo = true;
    }
    if (this.fristTime != true) {
      this.onboarding_page = true;
      this.login_page = false;
      this.header_logo = true;
    }

    this.fristTime = JSON.parse(
      this.config.storageGet('pageDisplayed')['__zone_symbol__value']
    );
    if (this.fristTime == true) {
      this.onboarding_page = false;
      this.login_page = true;
      this.header_logo = true;
    }
  }

>>>>>>> 4c0fc0c (apk+++)
  getStart() {
    this.login_page = true;
    this.onboarding_page = false;
    this.config.storageSave('pageDisplayed', true);
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
<<<<<<< HEAD
      this.config.navigate('home');
>>>>>>> 4c0fc0c (apk+++)
=======
      this.user = await GoogleAuth.signIn();
      console.log(this.user);

      if (this.user.authentication.idToken != 'undefined') {
        this.config.storageSave('user', this.user);
        this.config.navigate('home');
      }
      // this.config.navigate('home');
>>>>>>> b1d1df0 (filter ++)
    }
    if (n == 'apple') {
      this.config.navigate('home');
    }
    if (n == 'facebook') {
<<<<<<< HEAD
<<<<<<< HEAD
      // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
=======
>>>>>>> 4c0fc0c (apk+++)
      this.config.navigate('home');
=======
      console.log('en');
      
>>>>>>> b1d1df0 (filter ++)
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
