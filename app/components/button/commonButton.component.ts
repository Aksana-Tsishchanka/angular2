import { Component, Input } from '@angular/core';

@Component({
    selector:    'common-button',
    template: `
        <button class="btn" [ngClass]=type>{{title}}</button>
    `,
    styles: [` .btn {
        color: white;
        text-align: center;
        text-decoration: none;
        display: flex;
        font-size: 16px;
        margin-bottom: 2%;
        cursor: pointer;
        flex: 1;
        width: 100%;
        padding: 10px 20px;
        border-radius: 5%;
    }
    
    .btn:hover {
        border: 1px solid brown;
    }
    .edit {
        background-color: blueviolet;
        border: 1px solid darkorchid;
    }
    .edit:hover {
        background-color: darkorchid; 
    }
    .delete {
        background-color: #485563;
        border: 1px solid royalblue;
    }
    .delete:hover {
        background-color: brown;
    }`]
})

export class CommonButtonComponent {
    @Input() type: string;
    @Input() title: string;
}