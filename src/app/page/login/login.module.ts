<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 4c0fc0c (apk+++)
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { IonicStorageModule } from '@ionic/storage-angular';
<<<<<<< HEAD
import { SharedModule } from 'src/app/shared/shared.module';
// import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
// import {
//   GoogleLoginProvider,
//   FacebookLoginProvider,
// } from 'angular4-social-login';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';

// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider(
//       '1036514703472-77fd85qdl3c58g34cgue0f74kpbv1ghu.apps.googleusercontent.com'
//     ),
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('Facebook-App-Id'),
//   },
// ]);
=======
>>>>>>> 4c0fc0c (apk+++)
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    IonicStorageModule,
<<<<<<< HEAD
    SharedModule,
    // SocialLoginModule,
    // SocialLoginModule.initialize(config),
  ],
  declarations: [LoginPage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '1036514703472-77fd85qdl3c58g34cgue0f74kpbv1ghu.apps.googleusercontent.com'
    //         ),
    //       },
    //       {
    //         id: FacebookLoginProvider.PROVIDER_ID,
    //         provider: new FacebookLoginProvider('168147219362369'),
    //       },
    //     ],
    //     onError: (err) => {
    //       console.error(err);
    //     },
    //   } as SocialAuthServiceConfig,
    // },
    GooglePlus
  ],
=======
  ],
  declarations: [LoginPage],

  providers: [],
>>>>>>> 4c0fc0c (apk+++)
})
export class LoginPageModule {}
