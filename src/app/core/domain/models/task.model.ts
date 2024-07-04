interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date | null;
  reminder: Date | null;
  completed: boolean;
  subtasks: Subtask[];
  listId: number;
}
