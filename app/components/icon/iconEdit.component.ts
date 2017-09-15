import { Component, Input } from '@angular/core';

@Component({
    selector:    'icon-edit',
    templateUrl: './app/assets/svgIcons/edit.svg',
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

export class IconEditComponent {

}
