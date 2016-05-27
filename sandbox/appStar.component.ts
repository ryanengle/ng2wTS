import {Component} from 'angular2/core';

@Component({
    selector: 'app-star',
    template: `
        <i 
            class='glyphicon' 
            [class.glyphicon-star-empty]="isEmpty" 
            [class.glyphicon-star]="!isEmpty" 
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
