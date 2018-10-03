import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddgoalPage } from './addgoal';

@NgModule({
  declarations: [
    AddgoalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddgoalPage),
  ],
})
export class AddgoalPageModule {}
