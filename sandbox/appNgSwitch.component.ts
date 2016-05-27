import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <ul class="nav nav-pills">
            <!-- Class binding to adjust BootStrap style -->
            <li [class.active]="viewMode == 'map'">
                <a (click)="viewMode = 'map'">Map View</a></li>
            <!-- Class binding to adjust BootStrap style -->
            <li [class.active]="viewMode == 'list'">
                <a (click)="viewMode = 'list'">List View</a></li>
        </ul>
        <!-- Container div to display info based on viewMode -->
        <div [ngSwitch]="viewMode">
            <!-- templates are part of HTML5
                    and are hidden until active -->
            <!-- template for map view -->
            <!-- default -->
            <template [ngSwitchWhen]="'map'" ngSwitchDefault>
                Map View Content
            </template>
            
            <!-- template for list view -->
            <template [ngSwitchWhen]="'list'" >
                List View Content
            </template>        
        </div>
        `
})
export class AppComponent {
    viewMode = 'map';
       
}
