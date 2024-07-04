import {Injectable} from '@angular/core';
import {TaskList} from "../models/task-list.model";
import {ITaskListService} from "./task-list-service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskListService implements ITaskListService {
  private taskLists: TaskList[] = [
    {
      id: 1,
      name: 'Mi día',
      tasks: [],
      icon: 'wb_sunny'
    },
    {
      id: 2,
      name: 'Importante',
      tasks: [],
      icon: 'stars'
    },
    {
      id: 3,
      name: 'Planeado',
      tasks: [],
      icon: 'calendar_today'
    },
    {
      id: 4,
      name: 'Tareas',
      tasks: [],
      icon: 'home'
    }
  ];

  constructor() {
  }

  getTaskLists(): Observable<TaskList[]> {
    return of(this.taskLists);
  }

  getTaskListById(id: number): TaskList | undefined {
    return this.taskLists.find(taskList => taskList.id === id);
  }

  addTaskList(taskList: TaskList): void {
    this.taskLists.push(taskList);
  }

  updateTaskList(taskList: TaskList): void {
    const index = this.taskLists.findIndex(tl => tl.id === taskList.id);
    if (index !== -1) {
      this.taskLists[index] = taskList;
    }
  }

  deleteTaskList(id: number): void {
    this.taskLists = this.taskLists.filter(taskList => taskList.id !== id);
  }
}
