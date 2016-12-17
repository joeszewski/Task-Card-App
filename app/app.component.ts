import { Component, Input } from '@angular/core';

import  { Task } from './model/task'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @Input() task: Task;
 }
