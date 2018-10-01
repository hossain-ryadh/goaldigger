import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  goalName: string;
  constructor(public navCtrl: NavController) {

  }

  addNewitem(){

  }

  save(goalName){

    console.log(goalName)
  }

}
