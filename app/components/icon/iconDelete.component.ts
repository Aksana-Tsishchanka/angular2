import { Component } from '@angular/core';


@Component({
    selector:    'icon-delete',
    templateUrl: './app/assets/svgIcons/delete.svg',
    styles: [ `
        :host {
            width: 30px;
            transition: transform .3s ease;
            cursor: pointer;
        }
        
        :host:hover {
            transform: scale(1.2);
        }
    `]
})

export class IconDeleteComponent {

}