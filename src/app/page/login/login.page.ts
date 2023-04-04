import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';

import { Storage } from '@ionic/storage-angular';

import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_page = false;
  onboarding_page = true;
  user: any = null;

  loggedIn!: boolean;
  constructor(
    public config: CommonService,
    private storage: Storage,
    // private authService: AuthService
  ) {}

  ngOnInit() {
    this.storage.create();
  }

  getStart() {
    this.login_page = true;
    this.onboarding_page = false;
  }

  async social_login(n) {
    if (n == 'google') {
      // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.config.navigate('home');
    }
    if (n == 'apple') {
      this.config.navigate('home');
    }
    if (n == 'facebook') {
      // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      this.config.navigate('home');
    }
    if (n == 'skip') {
      this.config.navigate('home');
    }
  }


  signInWithGoogle(): void {
    
  }
 
  signInWithFB(): void {
    
  }
 
  // signOut(): void {
  //   this.authService.signOut();
  // }
}
