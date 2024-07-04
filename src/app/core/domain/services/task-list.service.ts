import {Injectable} from '@angular/core';
import {TaskList} from "../models/task-list.model";
import {ITaskListService} from "./task-list-service";

@Injectable({
  providedIn: 'root'
})
export class TaskListService implements ITaskListService {
  private taskLists: TaskList[] = [];

  constructor() {
  }

  getTaskLists(): TaskList[] {
    return this.taskLists;
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
