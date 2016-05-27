import {Component} from 'angular2/core';

@Component({
    selector: 'app-star',
    template: `
        <div [hidden]="courses.length == 0">
            List of Courses
        </div>
        <div [hidden]="courses.length > 0">
            No courses.
        </div> 
        `
})
export class AppStarComponent {
    courses = [];
}
