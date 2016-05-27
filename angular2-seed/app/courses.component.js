System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // decorator function call
            CoursesComponent = (function () {
                function CoursesComponent() {
                    this.title = 'The title of courses page';
                    this.courses = ['Course 1', 'Course 2', 'Course 3'];
                }
                CoursesComponent = __decorate([
                    core_1.Component({
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
                        template: "        \n        <h2>Courses</h2>\n        {{ title }}\n        <ul>\n            <li *ngFor='#course of courses'>\n            {{ course }}\n            </li>\n        </ul>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map