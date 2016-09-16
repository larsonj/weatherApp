import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';

import { HomePage } from './pages/home/home';

@Component({
/*  template: '<ion-nav [root]="rootPage"></ion-nav>',*/
  templateUrl: './build/app.html'
})
export class WeatherTether {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage; // todo: set HomePage

  pages: Array<{title: string, component: any}>

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      {title: "New Search", component: HomePage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(WeatherTether);


