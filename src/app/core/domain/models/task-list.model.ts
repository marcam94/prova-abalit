import {Subtask} from "./sub-task.model";

export interface TaskList {
  id: number;
  name: string;
  icon?: string
  tasks: Subtask[];
}
