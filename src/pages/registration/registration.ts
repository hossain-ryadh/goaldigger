import { TabsPage } from './../tabs/tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../login/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth:  AngularFireAuth) {
  }


  async register(user: User){
    try{
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        if (result){
          this.navCtrl.setRoot(TabsPage);
        }
      } catch(e) {
      console.error(e);
    }

  }


}
