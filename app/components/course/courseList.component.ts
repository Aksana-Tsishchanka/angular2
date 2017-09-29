import { Component, OnInit } from '@angular/core';

const coursesInit = [
    {
        id: '1',
        title: 'Angular 2',
        dateOfCreating: '12 Sep 2017',
        duration: '60 min',
        description: 'React makes it painless to create interactive UIs. Design simple views for ' +
        'each state in your application, ' +
        'and React will efficiently update and render just the right ' +
        'components when your data changes.\n' +
        '\n' +
        'Declarative views make your code more predictable and easier to debug.'
    },
    {
        id: '2',
        title: 'React.js',
        dateOfCreating: '13 Sep 2017',
        duration: '70 min',
        description: 'React makes it painless to create interactive UIs. Design simple views for ' +
        'each state in your application, ' +
        'and React will efficiently update and render just the right ' +
        'components when your data changes.\n' +
        '\n' +
        'Declarative views make your code more predictable and easier to debug.'
    },
    {
        id: '3',
        title: 'Redux',
        dateOfCreating: '14 Sep 2017',
        duration: '80 min',
        description: 'Build encapsulated components that manage their own state, ' +
        'then compose them to make complex UIs.\n' +
        '\n' +
        'Since component logic is written in JavaScript instead of templates, ' +
        'you can easily pass rich data through your app and keep state out of the DOM.'
    },
];

@Component({
    selector:    'course-list',
    template: `
        <div class="flex-container">
            <course *ngFor="let course of courses"
                    [course]=course
                    (onEdit)="onEdit($event)"
                    (onDelete)="onDelete($event)"
            >
            </course>
        </div>
    `,
    styles: [` .flex-container {
        display: flex;
        flex: 1;
        flex-flow: wrap;
    }
    `]
})

export class CourseListComponent implements OnInit {

    private courses: Array<{ id: string, title: string,
        dateOfCreating: string, duration: string, description: string}>;
    constructor() {
        this.courses = [];
    }

    public ngOnInit() {
        this.courses.push(...coursesInit);
    }

    public onEdit(id: string) {
        console.log(`edit course with id: ${id}`);
    }

    public onDelete(id: string) {
        console.log(`delete course with id: ${id}`);
    }
}
