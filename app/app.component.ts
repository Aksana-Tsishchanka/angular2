import { Component } from '@angular/core';

@Component({
    selector:    'app',
    template: `
        <div class="mainContainer">
            <div class="header">
                <header-component></header-component>
            </div>
            <div class="main">
                <search></search>
                <course-list></course-list>
            </div>
            <div class="footer">
                <footer-component></footer-component>
            </div>
        </div>
    `,
})

export class AppComponent {

}
