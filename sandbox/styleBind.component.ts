import {Component} from 'angular2/core';

@Component({
    selector: 'my-app', 
    template:`
        <button class="btn btn-primary" [class.active]="isActive"
        [style.backgroundColor]="isActive? 'blue' : 'gray' ">
            Submit
        </button>
    `
})

export class styleBindComponent {
    isActive = true;
}