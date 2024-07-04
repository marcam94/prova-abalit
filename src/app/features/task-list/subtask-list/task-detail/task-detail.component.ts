import {Component, Input} from '@angular/core';
import {Subtask} from "../../../../core/domain/models/sub-task.model";
import {DatePipe, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  @Input() subtask!: Subtask
}
