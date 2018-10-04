
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exdata: Observable<any>;
  stdata: Observable<any>;
  drdata: Observable<any>;
  cadata: Observable<any>;
  modata: Observable<any>;

  constructor(public navCtrl: NavController,
    private database:  AngularFireDatabase) {

  }
  ionViewDidLoad(){
    this.exdata = this.database.object(`/items/topics/ex`).valueChanges();
    this.stdata = this.database.object(`/items/topics/st`).valueChanges();
    this.drdata = this.database.object(`/items/topics/dr`).valueChanges();
    this.cadata = this.database.object(`/items/topics/ca`).valueChanges();
    this.modata = this.database.object(`/items/topics/mo`).valueChanges();
  }
  ionViewWillEnter(){
    this.exdata = this.database.object(`/items/topics/ex`).valueChanges();
    this.stdata = this.database.object(`/items/topics/st`).valueChanges();
    this.drdata = this.database.object(`/items/topics/dr`).valueChanges();
    this.cadata = this.database.object(`/items/topics/ca`).valueChanges();
    this.modata = this.database.object(`/items/topics/mo`).valueChanges();
  }


}
