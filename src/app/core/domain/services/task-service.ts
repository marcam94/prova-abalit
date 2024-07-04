import {Subtask} from "../models/sub-task.model";

export interface ITaskService {
  getTasks(listId: number): void;

  getTaskById(id: number): Subtask | undefined;

  addTask(task: string): void;

  updateTask(task: Subtask): void;

  deleteTask(id: number): void;
}
