import { BlogPage } from './../pages/blog/blog';
import { ExperiencePage } from './../pages/experience/experience';
import { EducationPage } from './../pages/education/education';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SkillsPage } from '../pages/skills/skills';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About', component: HomePage, icon: 'information-circle' },
      { title: 'Skills', component: SkillsPage, icon: 'code-working'},
      { title: 'Education', component: EducationPage, icon: 'school'},
      { title: 'Experience', component: ExperiencePage, icon: 'briefcase'},
      { title: 'Blog', component: BlogPage, icon: 'book' },      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  
}
