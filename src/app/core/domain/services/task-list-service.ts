import {TaskList} from "../models/task-list.model";
import {Observable} from "rxjs";

export interface ITaskListService {
  getTaskLists(): Observable<TaskList[]>;

  addTaskList(taskList: TaskList): void;

}
