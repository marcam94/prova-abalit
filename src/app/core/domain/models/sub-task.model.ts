export interface Subtask {
  id: number;
  title: string;
  dueDate: Date | null;
  description: string;
  completed: boolean;
  taskId: number;
}
