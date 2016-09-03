import {Component} from "@angular/core";
import {ionicBootstrap, Platform, Events, MenuController, Nav} from "ionic-angular";
import {StatusBar, Splashscreen} from "ionic-native";
import {HomePage} from "./pages/home/home";


interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  template: 'build/app.html'
})
export class WeatherTether {

  @ViewChild(Nav) nav: Nav;

  appPages: PageObj[] = [
    { title: 'Account', component: TabsPage, icon: 'calendar' },
    { title: 'About', component: TabsPage, icon: 'rain' }
  ];

  loggedInPages: PageObj[] = [
    { title: 'Account', component: TabsPage, icon: 'calendar' },
    { title: 'Logout', component: TabsPage, icon: 'rain' }
  ];

  loggeOutPages: PageObj[] = [
    { title: 'Login', component: TabsPage, icon: 'calendar' },
    { title: 'Signup', component: TabsPage, icon: 'rain' }
  ];

  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
console.log('app started');
ionicBootstrap(WeatherTether);
console.log('app ended');

