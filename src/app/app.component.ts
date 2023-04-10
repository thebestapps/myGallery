<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CommonService } from './common.function';
=======
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
>>>>>>> 280733b (Initial commit)
=======
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CommonService } from './common.function';
>>>>>>> 4c0fc0c (apk+++)

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
<<<<<<< HEAD
<<<<<<< HEAD
})
export class AppComponent implements OnInit {
  user: any = null;
  login_email: any;
  appPages:any = [];

  constructor(public config: CommonService, private storage: Storage) {}

  ngOnInit() {
    this.storage.create();
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    console.log(this.user);

    if (this.user) {
      this.appPages = [
        { title: 'Home', url: '/login', icon: 'paper-plane' },
        { title: 'Contact Us', url: '/contacts', icon: 'heart' },
      ];
    }
  }

  ionViewWillEnter() {
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    console.log(this.user);
  }

  signIn() {
    this.config.navigate('login');
  }
=======
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor() {}
>>>>>>> 280733b (Initial commit)
=======
})
export class AppComponent implements OnInit {
  user: any = null;
  appPages: any = [];

  constructor(public config: CommonService, private storage: Storage) {}

  ngOnInit() {
    this.storage.create();
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    console.log(this.user);

    // if (this.user) {
      this.appPages = [
        { title: 'Home', url: '/login', icon: 'paper-plane' },
        { title: 'Contact Us', url: '/contacts', icon: 'heart' },
      ];
    // }
  }

  ionViewWillEnter() {
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    console.log(this.user);
  }

  async signOut() {
    this.user = '';
    this.config.storageSave('user', this.user);
    this.config.navigate('login');
  }
  signIn() {
    this.config.navigate('login');
  }
>>>>>>> 4c0fc0c (apk+++)
}
