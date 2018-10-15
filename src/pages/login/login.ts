import { RegistrationPage } from './../registration/registration';
import { AngularFireAuth } from 'angularfire2/auth';
import {User} from './user'

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
        if(result){
          this.navCtrl.setRoot(TabsPage);
        }
    }
    catch(e) {
      console.error(e);
    }
  }
  register(){
    this.navCtrl.push(RegistrationPage);
  }




}
