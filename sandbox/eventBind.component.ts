import {Component} from 'angular2/core';

@Component({
    selector: 'my-app', 
    template:`
        <div (click)="onDivClick()">
        <button (click)="onClick($event)">
            Submit
        </button>
        </div>
    `
})

export class styleBindComponent {
    
    onDivClick(){
        console.log('Handled by div');
    }
    onClick($event){
        // $event.stopPropagtion(); // stops event bubbling/propagation
        console.log('Button Clicked', $event);   
    }
}