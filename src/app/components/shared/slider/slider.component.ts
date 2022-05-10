import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger(("sliderFade"), [
      state('void', style({opacity: 1})),
      transition('void <=> *', [animate('1s')]), //we can use <=> to optimise below code
      // transition('* => void', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input()  items :Movie[] = [] ;
  currentSlide: any = 0
    constructor() { }

  ngOnInit(): void {
    setInterval(() => {
this.currentSlide = ++this.currentSlide % this.items.length;
    }, 5000)
  }

}
