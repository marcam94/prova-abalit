import {Component, inject} from '@angular/core';
import {TaskListService} from "../../core/domain/services/task-list.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {subTask} from "../../core/domain/services/sub-task.service";
import {TaskList} from "../../core/domain/models/task-list.model";
import {DialogService} from "../../shared/components/dialog/dialog.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {take} from "rxjs";

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
export class TaskListComponent {
  private readonly taskListService = inject(TaskListService)
  public tasks$ = this.taskListService.getTaskLists()
  private readonly taskService = inject(subTask)
  private readonly dialogService = inject(DialogService)
  private newTaskForm = new FormGroup({
    nombre: new FormControl<string>(
      {value: '', disabled: false},
      Validators.required),
  })

  openTasks(task: TaskList) {
    this.taskService.getSubtasks(task.id)
  }

  addNewList() {
    let dialogRef = this.dialogService.openDialog({
        title: 'Crear nueva Lista de tareas',
        inputData: this.newTaskForm,
      },
      {
        height: '400px',
        width: '600px',
      }
    )
    dialogRef.afterClosed().pipe(take(1)).subscribe((resp: { nombre: string }) => {
      if (resp) {
        const newList: TaskList = {
          id: 20,
          name: resp.nombre,
          tasks: [],
          icon: 'menu'
        };
        this.taskListService.addTaskList(newList);
      }
      this.newTaskForm.reset()
    })

  }
}
