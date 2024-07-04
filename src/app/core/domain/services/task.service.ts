import {Injectable} from '@angular/core';
import {Task} from '../models/task.model';
import {ITaskService} from "./task-service";

@Injectable({
  providedIn: 'root'
})
export class TaskService implements ITaskService {
  private tasks: Task[] = [];

  constructor() {
  }

  getTasks(listId: number): Task[] {
    return this.tasks.filter(task => task.listId === listId);
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}
