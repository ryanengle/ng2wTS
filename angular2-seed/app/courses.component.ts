// import Component decorator from core angular module
import {Component} from 'angular2/core'

// decorator function call
@Component({
    // selector: specifies a CSS selector for a host HTML element
    // when angular sees an element that matches the CSS selector,
    // it will create an instance of our component in the host element
    // here we are assuming the host element is an element with the 
    // tag 'courses'
    selector: 'courses',
    // template: specifies the HTML that will be inserted into the DOM
    // when the component's view is rendered.
    // we can write the template inline or put it in a separate file
    // interpolation: {{ title }} is an example of one-way binding. 
    // Updating the title property will cause the component template 
    // to be updated automatically    
    template: `        
        <h2>Courses</h2>
        {{ title }}
        <ul>
            <li *ngFor='#course of courses'>
            {{ course }}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    title: string = 'The title of courses page';
    courses: string[] = ['Course 1', 'Course 2', 'Course 3'];
}
