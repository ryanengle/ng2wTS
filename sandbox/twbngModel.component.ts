import {Component} from 'angular2/core';

@Component({
    selector: 'my-app', 
    template:`
        <!-- input field with two-way binding -->
        <input type="text"
            [(ngModel)]="title" />
        <!-- Preview of binding -->
        Preview: {{ title }}
        <!-- Test using clear button -->
        <p></p>
        <input type="button"
            (click)="title = '' "
            value="Clear" />
    `
})

export class twBindComponent {
    title = "Angular App";
}