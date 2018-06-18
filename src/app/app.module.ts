import { BlogPage } from './../pages/blog/blog';
import { EducationPage } from './../pages/education/education';
import { ExperiencePage } from './../pages/experience/experience';
import { SkillsPage } from '../pages/skills/skills';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from '../components/timeline/timeline';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SkillsPage,
    ExperiencePage,
    EducationPage,
    BlogPage,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SkillsPage,
    ExperiencePage,
    EducationPage,
    BlogPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
