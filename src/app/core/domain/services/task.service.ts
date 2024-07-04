import {Injectable} from '@angular/core';
import {Subtask} from '../models/task.model';
import {ITaskService} from "./task-service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService implements ITaskService {
  taskSelected$ = new Subject<Subtask[] | undefined>()


  private tasks: Subtask[] = [
    {
      listId: 1,
      id: 1,
      completed: false,
      dueDate: new Date(),
      title: 'Comprar'
    },
    {
      listId: 2,
      id: 1,
      completed: false,
      dueDate: new Date(),
      title: 'aa'
    },
    {
      listId: 3,
      id: 1,
      completed: false,
      dueDate: new Date(),
      title: 'Sss'
    },
  ];

  constructor() {
  }

  getTasks(listId: number) {
    const subTaskFound = this.tasks.filter(task => task.listId === listId);
    if (subTaskFound) {
      this.taskSelected$.next(subTaskFound)
    } else {
      this.taskSelected$.next(undefined)
    }
  }

  getTaskById(id: number): Subtask | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Subtask): void {
    this.tasks.push(task);
  }

  updateTask(task: Subtask): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}
