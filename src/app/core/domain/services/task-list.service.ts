import { Injectable } from '@angular/core';
import { TaskList } from '../models/task-list.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ITaskListService } from './task-list-service';

@Injectable({
  providedIn: 'root',
})
export class TaskListService implements ITaskListService {
  private taskLists: TaskList[] = [
    {
      id: 1,
      name: 'Mi día',
      subtasks: [],
      icon: 'wb_sunny',
    },
    {
      id: 2,
      name: 'Importante',
      subtasks: [],
      icon: 'stars',
    },
    {
      id: 3,
      name: 'Planeado',
      subtasks: [],
      icon: 'calendar_today',
    },
    {
      id: 4,
      name: 'Tareas',
      subtasks: [],
      icon: 'home',
    },
  ];

  private taskListsSubject = new BehaviorSubject<TaskList[]>(this.taskLists);

  constructor() {}

  getTaskLists(): Observable<TaskList[]> {
    return of(this.taskLists);
  }

  addTaskList(taskList: TaskList): void {
    this.taskLists.push(taskList);
    this.taskListsSubject.next(this.taskLists);
  }
}
