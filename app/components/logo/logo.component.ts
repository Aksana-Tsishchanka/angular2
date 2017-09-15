import { Component } from '@angular/core';


@Component({
    selector:    'logo',
    templateUrl: './app/assets/svgIcons/courses.svg',
    styles: [ `
        :host {
            width: 90px;
            height: 90px;
            transition: transform .3s ease;
            
        }
        :host:hover {
            transform: scale(1.2);
        }
    `]
})

export class LogoComponent {

}