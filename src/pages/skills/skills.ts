import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {
  coding = ['JavaScript','C/C++','Java(Basics)','HTML5 & CSS3','SQL'];
  dev = ['Angular 2+', 'Ionic 2+', 'Node.js', 'Bootstrap', 'MongoDB(Basic)'];
  soft = ['Time Management', 'Self Motivation', 'Creativity', 'Team Work'];
  others = ['Hybrid Apps', 'SEO', 'PWA', 'Problem Solving']; //TODO

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
