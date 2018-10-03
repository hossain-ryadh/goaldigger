
import { Exercise } from './exercise.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  exercise  = {} as Exercise;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl:  ViewController,
    public database: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }

  uploadItems(exercise){
    this.database.object(`/items/topics`).set(this.exercise);
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }



}
