import { Component } from '@angular/core';

@Component({
    selector: 'header-component',
    template: `<h1 class="logo">
        <logo></logo>
        Courses
    </h1>`,
    styles: [`
        h1 {
            margin: 0;
        }
        .logo {
            display: flex;
            align-items: center;
        }`
    ]
})
export class HeaderComponent {

}
