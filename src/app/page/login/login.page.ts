import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { CommonService } from 'src/app/common.function';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_page = false;
  onboarding_page = true;
  constructor(public config: CommonService) {} // private googlePlus: GooglePlus

  ngOnInit() {}

  getStart() {
    this.login_page = true;
    this.onboarding_page = false;
  }

  social_login(n) {
    if (n == 'login') {
      this.config.navigate('home');
    }
    if (n == 'apple') {
      this.config.navigate('home');
    }
    if (n == 'facebook') {
      this.config.navigate('home');
    }
  }
}
