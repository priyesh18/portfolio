import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
  items = [
    {
      title: 'Bachelor of Engineering (IT)',
      content: 'Dwarkadas J. Sanghvi College of Engineering',
      score:'8.73/10',
      icon: 'school',
      time: { title: '2015 - Current'}
    },
    {
      title: 'H.S.C - Science(Grade XII)',
      content: 'Tikamdas Purshotam Bhatia College of Science',
      score:'84.95%',
      icon: 'school',
      time: { title: '2015'}
    },
    {
      title: 'S.S.C (Grade X)',
      content: 'J.B. Khot High School No. 2',
      score:'93.45%',
      icon: 'school',
      time: {title: '2013'}
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }

}
