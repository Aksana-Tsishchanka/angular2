import { Component, Input } from '@angular/core';

@Component({
    selector:    'course',
    template: `
        <div class="container">
            <div class="infoContainer">
                <div class="info">
                    <div class="detailsTitle">
                        <div class="title">{{course.title}}</div>
                        <div class="duration">{{course.duration}}</div>
                    </div>
                </div>
                <div class="description">{{course.description}}</div>
                <div class="detailsDate">
                    <div>{{course.dateOfCreating}}</div>
                </div>
            </div>
            <div class="btnContainer">
                <icon-edit></icon-edit>
                <icon-delete></icon-delete>
            </div>
        </div>
    `,
    styles: [`
        :host {
            border: 1px solid #d5c9e2;
            margin-bottom: 2%;
            width: 100%;
            min-width: 300px;
            margin-right: 2%;
            padding: 10px;
        }
        
        :host:hover {
            background-color:rgba(0,0,255,0.1);
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            height: 100%;
        }
        .info, .infoContainer, .detailsTitle, .detailsDate {
            display: flex;
        }
        .infoContainer {
            flex: 3;
            flex-direction: column;
        }
        .description {
            flex: 1;
            margin-top: 10px;
            font-size: 12px;
            line-height: 1.6;
        }
        .info {
            justify-content: space-between;
            font-size: 14px;
        }
        .btnContainer {
            display: flex;
            justify-content: space-between;
        }
        .title {
            color: #50c6db;
            font-size: 16px;
        }
        .duration {
            border-left: 1px solid grey;
            padding-left: 10px;
            color: grey;
            font-size: 14px;
            margin-left: 10px;
        }
        .detailsDate {
            font-size: 12px;
            font-style: italic;
            color: grey;
            line-height: 2;
        }
    `]
})

export class CourseComponent {
    @Input() course:any
}