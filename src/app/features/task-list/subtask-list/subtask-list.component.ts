import {Component, inject} from '@angular/core';
import {TaskService} from "../../../core/domain/services/task.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-subtask-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './subtask-list.component.html',
  styleUrl: './subtask-list.component.css'
})
export class SubtaskListComponent {
  private readonly taskService = inject(TaskService)
  public subTasks$ = this.taskService.taskSelected$
}
