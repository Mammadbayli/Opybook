import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { ProfilePage } from '../profile/profile';
import { ZonePage } from '../zone/zone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // loginPage = LoginPage;
  // registrationPage = RegistrationPage;
  zonePage = ZonePage;
  profilePage = ProfilePage;
  constructor(public navCtrl: NavController) {

  }

}
