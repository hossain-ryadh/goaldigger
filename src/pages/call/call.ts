
import { Call } from './call.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-call',
  templateUrl: 'call.html',
})
export class CallPage {

  call  = {} as Call;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl:  ViewController,
    public database: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad callPage');
  }

  uploadItems(call){
    this.database.object(`/items/topics/ca`).set(this.call);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }



}
