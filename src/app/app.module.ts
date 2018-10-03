
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AddgoalPage } from './../pages/addgoal/addgoal';
import { ContactPage } from '../pages/contact/contact';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    LoginPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage,
    AddgoalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,
    AddgoalPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
