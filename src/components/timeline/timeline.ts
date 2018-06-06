import { Component, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {
  @Input('endIcon') endIcon = "ionic";
  text: string;

  constructor() {
    console.log('Hello TimelineComponent Component');
    this.text = 'Hello World';
  }

}
@Component({
  selector: 'timeline-item',
  template: '<ng-content></ng-content>'
})
export class TimelineItemComponent{
  constructor(){

  }
}


@Component({
  selector:'timeline-time',
  template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
})
export class TimelineTimeComponent{
  @Input('time') time = {};
  constructor(){

  }
}
