// Ref:
// https://angular.io/docs/ts/latest/quickstart.html

import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})

export class AppComponent {
    public title = 'This is Angular 2 example 01';
    public namesOfBadGuys = ["Darth Vader", "Lex Luthor", "Sauron", "The Joker"];
}

