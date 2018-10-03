
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemsData: Observable<any>;

  constructor(public navCtrl: NavController,
    private database:  AngularFireDatabase) {

  }
  ionViewDidLoad(){
    this.itemsData = this.database.object(`/items/topics`).valueChanges();
  }
  ionViewWillEnter(){
    this.itemsData = this.database.object(`/items/topics`).valueChanges();
  }

}
