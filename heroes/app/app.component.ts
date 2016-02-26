import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template:`
  <h1>{{title}}</h1>
  <ul>
    <li *ngFor="#hero of heroes" (click)="onSelect(hero)">
      <span>{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name}} details!</h2>
    <div><label>id: </label>{{selectedHero.id}}</div>
    <div><label>name: </label>{{selectedHero.name}}</div>
  </div>
  `

})
export class AppComponent {
    title = 'Tour of Heroes';

    heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero:Hero)  {
        this.selectedHero = hero;
        console.log(this.selectedHero);
    }
}
var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
