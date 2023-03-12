import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angular-6-social-login';
// import {
//   SocialAuthService,
//   FacebookLoginProvider,
//   SocialUser,
// } from 'angularx-social-login';
// import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_page = false;
  onboarding_page = true;
  // user!: SocialUser;
  loggedIn?: boolean;
  constructor(
    // private socialAuthService: SocialAuthService,
  ) {}

  ngOnInit() {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = user != null;
    // });
  }

  // refreshToken(): void {
  //   this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  // }
  // signOut(): void {
  //   this.socialAuthService.signOut();
  // }

  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // loginWithFacebook(): void {
  //   this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  getStart() {
    this.login_page = true;
    this.onboarding_page = false;
  }

  public socialSignIn(socialPlatform: string) {
    // let socialPlatformProvider: any;
    // if (socialPlatform == 'facebook') {
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // } else if (socialPlatform == 'google') {
    //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    // }
    // this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
    //   console.log(socialPlatform + ' sign in data : ', userData);
    //   // Now sign-in with userData
    //   // ...
    // });
  }
}

// public btnRender(): void {
//   const options = {
//     scope: 'profile email',
//     width: 250,
//     height: 50,
//     longtitle: true,
//     theme: 'dark',
//     onsuccess: (googleUser: any) => {
//       let profile = googleUser.getBasicProfile();
//       console.log('Token || ' + googleUser.getAuthResponse().id_token);
//       console.log('ID: ' + profile.getId());
//       console.log('Name: ' + profile.getName());
//       console.log('Image URL: ' + profile.getImageUrl());
//       console.log('Email: ' + profile.getEmail());

//       // your-code-goes-here
//     },
//     onfailure: (error: any) => {
//       console.log('failure', error);
//     },
//   };
//   gapi.signin2.render('googleBtn', options);
// }
