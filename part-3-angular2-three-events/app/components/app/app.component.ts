import {Component} from 'angular2/core';
import {ThreeViewerComponent} from '../threeviewer/threeviewer.component';

@Component({
    selector: 'my-app',
    directives: [ThreeViewerComponent],
    templateUrl: 'app/components/app/app.component.html'
})
export class AppComponent { }
