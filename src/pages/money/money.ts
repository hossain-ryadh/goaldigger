
import { Money } from './money.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {

  money  = {} as Money;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl:  ViewController,
    public database: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad moneyPage');
  }

  uploadItems(money){
    this.database.object(`/items/topics/mo`).set(this.money);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }



}
