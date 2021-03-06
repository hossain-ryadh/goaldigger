


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import {RegistrationPage} from './../pages/registration/registration';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { ExercisePage } from './../pages/exercise/exercise';
import { DrinkPage } from './../pages/drink/drink';
import { StudyPage } from './../pages/study/study';
import { CallPage } from './../pages/call/call';
import { MoneyPage } from './../pages/money/money';
import { AdditemPage } from './../pages/additem/additem';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { AddgoalPage } from './../pages/addgoal/addgoal';
import { ContactPage } from '../pages/contact/contact';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';

const config = {
  apiKey: "AIzaSyCU9dt5OMjosf2AlRy2Ncz_6F-9qaDPm9E",
  authDomain: "goaldigger-27349.firebaseapp.com",
  databaseURL: "https://goaldigger-27349.firebaseio.com",
  projectId: "goaldigger-27349",
  storageBucket: "goaldigger-27349.appspot.com",
  messagingSenderId: "418450711334"
};


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
    AdditemPage,
    ExercisePage,
    StudyPage,
    DrinkPage,
    CallPage,
    MoneyPage,
    RegistrationPage,

  ],
  imports: [

    BrowserModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,
    RegistrationPage,
    AddgoalPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage,
    AdditemPage,
    ExercisePage,
    StudyPage,
    DrinkPage,
    CallPage,
    MoneyPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
