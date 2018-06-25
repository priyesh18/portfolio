import { Component, ViewChild } from '@angular/core';
import { Nav, App, MenuController } from 'ionic-angular';


import { BlogPage } from './../pages/blog/blog';
import { ExperiencePage } from './../pages/experience/experience';
import { EducationPage } from './../pages/education/education';
import { HomePage } from '../pages/home/home';
import { SkillsPage } from '../pages/skills/skills';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  index = 1;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor( 
    private _app: App,
    private _menu: MenuController
  ) {
    this.setupBackButtonBehavior ();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About', component: HomePage, icon: 'information-circle' },
      { title: 'Skills', component: SkillsPage, icon: 'code-working'},
      { title: 'Education', component: EducationPage, icon: 'school'},
      { title: 'Experience', component: ExperiencePage, icon: 'briefcase'},
      { title: 'Blog', component: BlogPage, icon: 'book' },      
    ];

  }


  openPage(page) {
    this._app.getRootNav().push(page.component);
  }
  nextPage() {
    if(this.index == this.pages.length) {
      this.nav.popToRoot();
      this.index = 1;
    }
    else {
      this._app.getRootNav().push(this.pages[this.index].component)
      //this.nav.push(this.pages[this.index].component);
      this.index = (this.index+1);
      
    }
  }

  private setupBackButtonBehavior () {

    // If on web version (browser)
    if (window.location.protocol !== "file:") {

      // Register browser back button action(s)
      window.onpopstate = (evt) => {

        // Close menu if open
        if (this._menu.isOpen()) {
          this._menu.close ();
          return;
        }

        // Close any active modals or overlays
        

        // Navigate back
        if (this._app.getRootNav().canGoBack()) this._app.getRootNav().pop();

      };

      // Fake browser history on each view enter
      this._app.viewDidEnter.subscribe((app) => {
        history.pushState (null, null, "");
      });

    }
    
  }

  
}
