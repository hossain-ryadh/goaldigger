import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
})
export class ExercisePage {

  data: AngularFireList<any>;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl:  ViewController,
    public database: AngularFireDatabase) {
      this.data = database.list(`plan/planned`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }

  uploadItems(goals,period,timeStarts,timeEnds,excolor){

    this.data.push({
      goals: goals,
      period: period,
      timeStarts: timeStarts,
      timeEnds: timeEnds,
      excolor: excolor
     }).then(newData =>
      this.viewCtrl.dismiss()
     )
  }


}
