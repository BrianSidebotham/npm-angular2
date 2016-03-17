import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>NPM Based Angular 2 App</h1>
        <p>You can go ahead and change the template in app/app.component.ts and save
           the file. There is a filewatcher that monitors changes and will then compile
           the typescript to javascript which will in-turn cause a browser refresh</p>
    `
})
export class AppComponent { }
