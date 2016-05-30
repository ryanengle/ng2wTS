import {Component} from 'angular2/core';

@Component({
    selector: 'app-star',
    template: `
        <i 
            class='glyphicon' 
            [ngClass]="{
                'glyphicon-star-empty': isEmpty,
                'glyphicon-star': !isEmpty
            }"
            (click)="onClick()" >
       </i> 
        `
})
export class AppStarComponent {
    isEmpty = true;
    
    onClick(){
        this.isEmpty = !this.isEmpty;
    }
 }
