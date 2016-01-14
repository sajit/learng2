import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'heroDetails.html'
})
export class AppComponent {
    public title = 'Tour of heroes';
    public hero:Hero = { id : 1,name:'he-man'};
}
interface Hero {
    id: number;
    name: string;
}