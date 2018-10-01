
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

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
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,
    ContactPage,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
