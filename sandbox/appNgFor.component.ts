import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="#course of courses, #i = index">
            {{ i + 1 }} - {{ course }} 
            </li>
        </ul>
        `
})
export class AppComponent {
   courses = ['c1', 'c2', 'c3'] 
}
