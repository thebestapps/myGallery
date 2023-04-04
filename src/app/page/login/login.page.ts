import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { SocialAuthService, SocialUser } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_page = false;
  onboarding_page = true;
  user: any = null;

  User!: SocialUser;
  loggedIn!: boolean;
  constructor(
    public config: CommonService,
    private storage: Storage,
    private authService: SocialAuthService
  ) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  ngOnInit() {
    this.storage.create();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log(this.user);

    if (this.user.authentication.idToken != 'undefined') {
      this.config.storageSave('user', this.user);
      this.config.navigate('home');
    }
  }

  async refresh() {
    const authCode = await GoogleAuth.refresh();
    console.log('refresh', authCode);
  }

  async signOut() {
    // const authCode = await GoogleAuth.refresh();
    await GoogleAuth.signOut();
    this.user = null;
    console.log(this.user);
  }

  getStart() {
    this.login_page = true;
    this.onboarding_page = false;
  }

  async social_login(n) {
    if (n == 'google') {
      this.config.navigate('home');
    }
    if (n == 'apple') {
      this.config.navigate('home');
    }
    if (n == 'facebook') {
      this.config.navigate('home');
      // const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
      // const result = await Plugins.FacebookLogin.login();
    }
    if (n == 'skip') {
      this.config.navigate('home');
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  SignOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
