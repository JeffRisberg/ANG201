// Ref:
// https://angular.io/docs/ts/latest/quickstart.html
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // In Angular2, when I use the @ sign, what does the @ sign do?
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Hello Today is January 31';
                    this.namesOfBadGuys = ["Darth Vader", "Lex Luthor", "Sauron", "The Joker"];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        // In Angular2, what does selector property do?
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
// In Angular2, what does class do?
// In my Angular2 app, where else do I see AppComponent?
//# sourceMappingURL=app.component.js.map