import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage implements OnInit {
  login_page = false;
  onboarding_page = true;
  user: any = null;

  header_logo = true;
  loggedIn!: boolean;
  fristTime: any;
  constructor(public config: CommonService, private storage: Storage) {}

  ngOnInit() {
    this.storage.create();
  }
  ionViewDidEnter() {
    this.user = JSON.parse(
      this.config.storageGet('user')['__zone_symbol__value']
    );
    this.config.user = this.user;
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

  getStart() {
    this.config.navigate('login');
    this.config.storageSave('pageDisplayed', true);
  }
}
