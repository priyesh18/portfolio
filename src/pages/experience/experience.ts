import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-experience',
  templateUrl: 'experience.html',
})
export class ExperiencePage {

  items = [
    {
      title: 'CheckApp HealthCare Technology',
      position: 'Intern',
      details: 'I worked on a project involving Web Development using Angular 2+ and Bootstrap.',
      icon: 'briefcase',
      time: { subtitle: 'March 2018 - May 2018', title: '2 Months'}
    },
    {
      title: 'Triveni Sales',
      position: 'App Development Intern',
      details: 'We developed 2 Hybrid Apps using Ionic 3 and Firebase.',
      icon: 'code',
      time: { subtitle: 'Dec 2017 - Jan 2018', title: '2 Months'}
    },
    {
      title: 'Hasura.io',
      position: 'Product Developent Intern',
      details: 'Built an MVP for a course rating site using Node.js, Hasura Platform, Html, CSS, AJAX.',
      icon: 'cube',
      time: { subtitle: 'May 2017 - Aug 2017', title: '3.5 Months'}
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExperiencePage');
  }

}
