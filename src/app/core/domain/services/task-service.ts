import {Subtask} from "../models/task.model";

export interface ITaskService {
  getTasks(listId: number): void;

  getTaskById(id: number): Subtask | undefined;

  addTask(task: Subtask): void;

  updateTask(task: Subtask): void;

  deleteTask(id: number): void;
}
