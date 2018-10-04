
import { drink } from './drink.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  drink  = {} as drink;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl:  ViewController,
    public database: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad drinkPage');
  }

  uploadItems(drink){
    this.database.object(`/items/topics/dr`).set(this.drink);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }



}
