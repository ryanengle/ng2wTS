import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        {{ course.title | uppercase | lowercase }}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | nunber:'2.2-2' }}
        <br/>
        {{ course.price | currency:'AUD':true:'2.2-2' }}
        <br/>
        {{ course.releaseDate | date:'MMM yyyy' }}
        <br />
        {{ course | json }}
    `
})
export class AppComponent {
    course = {
        title: 'A2 for beginners',
        rating: 4.97,
        students: 5998,
        price: 99.95,
        releaseDate: new Date(2016, 5,27)
    }    
}
