// Ref:
// https://angular.io/docs/ts/latest/quickstart.html

// In Angular2, what does import do?
// In Angular2, what is Component?
// In Angular2, what is 'angular2/core'?
import {Component} from 'angular2/core';

// In Angular2, when I use the @ sign, what does the @ sign do?
@Component({
    // In Angular2, what does selector property do?
    selector: 'my-app',

    templateUrl: 'app/app.component.html',
})

// In Angular2, what does export do?
export class AppComponent {
    public title = 'Hello, Today is January 31';
    public namesOfBadGuys = ["Darth Vader", "Lex Luthor", "Sauron", "The Joker"];
}
// In Angular2, what does class do?
// In my Angular2 app, where else do I see AppComponent?
