export interface Subtask {
  id: number;
  title: string;
  dueDate: Date | null;
  completed: boolean;
  listId: number;
}
