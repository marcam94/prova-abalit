import {TaskList} from "../models/task-list.model";
import {Observable} from "rxjs";

export interface ITaskListService {
  getTaskLists(): Observable<TaskList[]>;

  getTaskListById(id: number): TaskList | undefined;

  addTaskList(taskList: TaskList): void;

  updateTaskList(taskList: TaskList): void;

  deleteTaskList(id: number): void;
}
