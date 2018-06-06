import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  items =  [
    {
      img: 'assets/imgs/blog4.jpg',
      link:'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5'
    },
    {
      img:'assets/imgs/blog3.jpg',
      link: 'https://medium.com/@priyeshp18/push-notifications-between-ionic-2-3-apps-using-fcm-d3971b0120ce',
    },
    {
      img: 'assets/imgs/blog2.jpg',
      link:'https://medium.com/@priyeshp18/learn-git-and-github-bb2214185aa1'
    },
    {
      img: 'assets/imgs/blog1.jpg',
      link:'https://medium.com/@priyeshp18/1-1-thinking-about-my-first-app-idea-acc68ef951f9'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlogPage');
  }

}
