import {TaskList} from "../models/task-list.model";

export interface ITaskListService {
  getTaskLists(): TaskList[];

  getTaskListById(id: number): TaskList | undefined;

  addTaskList(taskList: TaskList): void;

  updateTaskList(taskList: TaskList): void;

  deleteTaskList(id: number): void;
}
