import {Component} from 'angular2/core';

@Component({
    selector: 'app-star',
    template: `
        <div *ngIf="courses.length > 0">
            List of Courses
        </div>
        <div *ngIf="courses.length == 0">
            No courses.
        </div> 
        `
})
export class AppStarComponent {
    courses = [];
}
