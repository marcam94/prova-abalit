import {Injectable} from '@angular/core';
import {TaskList} from "../models/task-list.model";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
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

  private taskListsSubject = new BehaviorSubject<TaskList[]>(this.taskLists);
  taskLists$ = this.taskListsSubject.asObservable();

  constructor() {
  }

  getTaskLists(): Observable<TaskList[]> {
    return of(this.taskLists);
  }

  getTaskListById(id: number): Observable<TaskList | undefined> {
    const taskList = this.taskLists.find(taskList => taskList.id === id);
    return of(taskList);
  }

  addTaskList(taskList: TaskList): void {
    this.taskLists.push(taskList);
    this.taskListsSubject.next(this.taskLists);
  }

  updateTaskList(taskList: TaskList): void {
    const index = this.taskLists.findIndex(tl => tl.id === taskList.id);
    if (index !== -1) {
      this.taskLists[index] = taskList;
      this.taskListsSubject.next(this.taskLists);
    }
  }

  deleteTaskList(id: number): void {
    this.taskLists = this.taskLists.filter(taskList => taskList.id !== id);
    this.taskListsSubject.next(this.taskLists);
  }
}
