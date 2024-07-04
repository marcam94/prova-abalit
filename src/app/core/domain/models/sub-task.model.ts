export interface Subtask {
  id: number;
  title: string;
  createAt: Date | null;
  description: string;
  completed: boolean;
  taskId: number;
  doneAt?: Date | null;
  updateAt?: Date | null
}
