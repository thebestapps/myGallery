import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.function';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_page = false;
  onboarding_page = true;

  constructor(public config: CommonService) {}

  ngOnInit() {}

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

  async loginPage() {
    // const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
    // const result = await Storage.FacebookLogin.login();
  }
}
