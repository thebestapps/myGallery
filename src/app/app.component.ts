import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CommonService } from './common.function';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  user: any = null;
  appPages: any = [];

  constructor(
    public config: CommonService,
    private storage: Storage,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.storage.create();

    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
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

  signOut() {
    GoogleAuth.signOut();
    this.config.storageRemoveItem('user');
    this.user = '';
  }

  signIn() {
    this.config.navigate('login');
  }
}
