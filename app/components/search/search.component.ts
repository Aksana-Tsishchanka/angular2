import { Component } from '@angular/core';

@Component({
    selector:    'search',
    template: `
        <div class="searchContainer">
            <input 
                    class="search"
                    #search
                    type="text" 
                    placeholder="search for courses"
                    [value]="value"
                    [(ngModel)]="value"
                    (ngModelChange)="getInputValue($event)"
            />
            <div class="icon">
                <icon-search></icon-search>
            </div>
        </div>
        `,
    styles: [ `
        :host {
            width: 100%;
            display: flex;
        }
        .searchContainer {
            display: flex;
            width: 45%;
            align-items: center;
            position: relative;
        }
        
        .search {
            height: 2rem;
            font-size: 0.8rem;
            margin-bottom: 20px;
            padding-left: 10px;
            width: 100%;
            min-width: 100px;
            display: block;
        }
        .search::placeholder {
            font-style: italic;
        }
        .icon {
            position: absolute;
            right: 5px;
            width: 30px;
            top: 4px;
        }
    `]
})

export class SearchComponent {
    private value = '';

    public onEnter(value: string) {
        this.value = value;
        console.log(value);
    }

    public getInputValue() {
        console.log(this.value);
    }
}
