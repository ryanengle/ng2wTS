// import services (ElementRef, Renderer) from angular 
//      ElementRef enables access to host element
//      Renderer service used to modify element
import {Directive, ElementRef, Renderer} from 'angular2/core';


@Directive({
    // [] refers to attribute
    selector: '[autoGrow]',
    // host is used to subscribe to events raised
    // from this element
    host: {
        // () contains event name; 
        // () means binding onFocus() method 
        //      to focus event
        // onFocus() is emitted in our directive class 
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    // _ means private
    //_el : ElementRef;
    
    // dependency injection
    // adding private keyword before argument name will cause the
    // TS compiler to automatically create the field and initize
    // it with the following argument 
    constructor(private el: ElementRef, private renderer:Renderer){        
    }
    
    onFocus(){        
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200');
    }
    
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '100');
    }
}