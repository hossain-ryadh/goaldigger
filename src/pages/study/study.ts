
import { Study } from './study.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {

  study  = {} as Study;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl:  ViewController,
    public database: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyPage');
  }

  uploadItems(study){
    this.database.object(`/items/topics/st`).set(this.study);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }



}
