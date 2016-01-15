import {Component} from 'angular2/core';

//this needs to be resources because of spring
@Component({
    selector: 'my-app',
    templateUrl: '/resources/heroes/heroDetails.html'
})
export class AppComponent {
    public title = 'Tour of heroes';
    public hero:Hero = { id : 1,name:'he-man'};
}
interface Hero {
    id: number;
    name: string;
}