import {Component, inject, OnInit} from '@angular/core';
import {TaskListService} from "../../core/domain/services/task-list.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {TaskService} from "../../core/domain/services/task.service";
import {TaskList} from "../../core/domain/models/task-list.model";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatCard,
    MatCardContent,
    MatIcon
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  private readonly taskListService = inject(TaskListService)
  public tasks$ = this.taskListService.getTaskLists()
  private readonly taskService = inject(TaskService)

  ngOnInit(): void {

  }

  openTasks(ev: TaskList) {
    this.taskService.getTasks(ev.id)
  }
}
