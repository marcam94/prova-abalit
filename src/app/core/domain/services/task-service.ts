import {Task} from "../models/task.model";

export interface ITaskService {
  getTasks(listId: number): Task[];

  getTaskById(id: number): Task | undefined;

  addTask(task: Task): void;

  updateTask(task: Task): void;

  deleteTask(id: number): void;
}
