import { Component } from '@angular/core';


@Component({
    selector:    'icon-search',
    templateUrl: './app/assets/svgIcons/search.svg',
    styles: [ `
        :host {
            width: 30px;
            transition: transform .3s ease;
            cursor: pointer;
            line-height: 2;
        }
        
        :host:hover {
            transform: scale(1.2);
        }
    `]
})

export class IconSearchComponent {

}