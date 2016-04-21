import {Component, Input} from 'angular2/core';
import {Hero} from './hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'views/hero-details.html' 
})
export class HeroDetailComponent {
  @Input() 
  hero: Hero;
}