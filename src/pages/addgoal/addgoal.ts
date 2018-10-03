import { AdditemPage } from './../additem/additem';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddgoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addgoal',
  templateUrl: 'addgoal.html',
})
export class AddgoalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddgoalPage');
  }


  goToOtherPage(){
    this.navCtrl.push(AdditemPage);
  }

}