import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'my-app',
    template: `
        {{ post.title }}
        <br />
        {{ post.body | summary: 10 }}
        `,
    pipes: [SummaryPipe]
})
export class AppComponent {
    post = {
        title: 'Angular title',
        body: `
        Test lines blab bla bla bla bla. Able
        lines 2 yada yda yoda yoda, more stuff
        lines 3. Text more text.
        `
    }
}
