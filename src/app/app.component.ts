import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CommonService } from './common.function';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';

import { Location } from '@angular/common';
import { App } from '@capacitor/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: any = null;
  appPages: any = [];
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet?: IonRouterOutlet;
  constructor(
    public config: CommonService,
    private storage: Storage,
    private _changeDetectorRef: ChangeDetectorRef,
    private platform: Platform,
    private alertController: AlertController,
    private location: Location
  ) {
    this.backButtonEvent();
  }

  ngOnInit() {
    this.storage.create();

    // this.user = JSON.parse(
    //   this.config.storageGet('user')['__zone_symbol__value']
    // );
    this.user = this.config.user;
    console.log(this.user);
    this._changeDetectorRef.detectChanges();

    // if (this.user) {
    this.appPages = [
      { title: 'Home', url: '/login', icon: 'paper-plane' },
      { title: 'Contact Us', url: '/contacts', icon: 'heart' },
    ];
    // }
  }

  ionViewWillEnter() {
    this._changeDetectorRef.detectChanges();

    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    this._changeDetectorRef.detectChanges();
    console.log(this.user);
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (!this.routerOutlet?.canGoBack()) {
        App.exitApp();
      } else {
        this.location.back();
      }
    });
  }

  signOut() {
    GoogleAuth.signOut();
    this.config.storageRemoveItem('user');
    this.user = '';
    this.config.user = '';
  }

  signIn() {
    this.config.navigate('login');
  }
}
