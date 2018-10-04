import { ExercisePage } from './../exercise/exercise';
import { StudyPage } from './../study/study';
import { DrinkPage } from './../drink/drink';
import { CallPage } from './../call/call';
import { MoneyPage } from './../money/money';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



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
  exercise(){
    this.navCtrl.push(ExercisePage);
  }
  study(){
    this.navCtrl.push(StudyPage);
  }
  drink(){
    this.navCtrl.push(DrinkPage);
  }
  call(){
    this.navCtrl.push(CallPage);
  }
  money(){
    this.navCtrl.push(MoneyPage);
  }
}
