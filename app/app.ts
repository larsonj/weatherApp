import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { SettingsPage } from './pages/settings/settings';
import { AboutPage } from './pages/about/about';

@Component({
templateUrl: './app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

rootPage: any = TabsPage;

pages: Array<{title: string, component: any}>;

constructor(public platform: Platform) {
this.initializeApp();

// used for an example of ngFor and navigation
this.pages = [
  { title: 'Home', component: HomePage },
  { title: 'Settings', component: SettingsPage },
  { title: 'About', component: AboutPage }
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
// Reset the content nav to have just this page
// we wouldn't want the back button to show in this scenario
this.nav.setRoot(page.component);
}
}

ionicBootstrap(MyApp);
