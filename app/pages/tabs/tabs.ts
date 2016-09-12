import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {SettingsPage} from '../settings/settings';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any = HomePage;
  private tab2Root: any = AboutPage;
  private tab3Root: any = SettingsPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
/*
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = SettingsPage;
*/
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    console.log('mySelectedIndex: ', this.mySelectedIndex);
  }
}
