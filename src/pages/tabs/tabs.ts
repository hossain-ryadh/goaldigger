import { AddgoalPage } from './../addgoal/addgoal';

import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AddgoalPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
