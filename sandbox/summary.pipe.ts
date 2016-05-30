import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    // name of the pipe object/used in template
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    // this interface has one function, transform
        // value: on which we are going to apply the pipe
        // args: holds options passed  
    transform(value: string, args: string[]){
        // if no argument is specified, 50 is used as limit
        var limit = (args && args[0]) ? parseInt(args[0]) : 50 ;
        
        if (value) 
            return value.substring(0,limit) + '...';
    }   
}