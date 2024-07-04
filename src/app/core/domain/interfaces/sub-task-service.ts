import { Subtask } from '../models/sub-task.model';

export interface ISubtaskService {
  getSubtasksRelatedWithTask(taskId: number): void;

  getSubtaskById(id: number): Subtask | undefined;

  addSubtask(newSubtask: { title: string; description: string }): void;

  updateSubtask(subtask: Subtask): void;

  deleteSubtask(id: number): void;
}
