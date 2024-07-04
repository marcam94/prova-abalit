import { Injectable } from '@angular/core';
import { Subtask } from '../models/sub-task.model';
import { Subject } from 'rxjs';
import { ISubtaskService } from '../interfaces/sub-task-service';

@Injectable({
  providedIn: 'root',
})
export class SubtaskService implements ISubtaskService {
  public currentTaskIdSelected!: number;
  private subtasks: Subtask[] = [
    {
      taskId: 1,
      id: 1,
      completed: false,
      createAt: new Date(),
      title: 'Comprar',
      description: 'pan cereales',
    },
    {
      taskId: 1,
      id: 2,
      completed: false,
      createAt: new Date(),
      title: 'Vender',
      description: 'tele por wallapop',
    },
    {
      taskId: 1,
      id: 3,
      completed: false,
      createAt: new Date(),
      title: 'Lavar',
      description: 'ropa del trabajo',
    },
    {
      taskId: 2,
      id: 4,
      completed: false,
      createAt: new Date(),
      title: 'Deberes',
      description: 'fisica',
    },
    {
      taskId: 3,
      id: 5,
      completed: true,
      createAt: new Date(),
      title: 'limpiar la casa',
      description: 'sin falta!',
    },
  ];
  private subtasksSubject = new Subject<Subtask[] | []>();
  subtasks$ = this.subtasksSubject.asObservable();

  constructor() {
  }

  getSubtasksRelatedWithTask(taskId: number): void {
    const subtasksFound = this.subtasks.filter(
      subtask => subtask.taskId === taskId,
    );
    this.subtasksSubject.next(subtasksFound.length ? subtasksFound : []);
    this.currentTaskIdSelected = taskId;
  }

  getSubtaskById(id: number): Subtask | undefined {
    return this.subtasks.find(subtask => subtask.id === id);
  }

  addSubtask(newSubtask: { title: string; description: string }): void {
    const newSubtaskToAdd: Subtask = {
      title: newSubtask.title,
      taskId: this.currentTaskIdSelected,
      description: newSubtask.description,
      id: Math.floor(Math.random() * 1000),
      completed: false,
      createAt: new Date(),
    };
    this.subtasks.push(newSubtaskToAdd);
    this.subtasksSubject.next(
      this.subtasks.filter(
        subtask => subtask.taskId === this.currentTaskIdSelected,
      ),
    );
  }

  updateSubtask(subtask: Subtask): void {
    const index = this.subtasks.findIndex(x => x.id === subtask.id);
    if (index !== -1) {
      this.subtasks[index] = subtask;
      this.subtasksSubject.next(
        this.subtasks.filter(x => x.taskId === subtask.taskId),
      );
      console.log(this.subtasks);
    }
  }

  deleteSubtask(id: number): void {
    const taskSubtasks = this.subtasks.filter(
      subtask => subtask.taskId === this.currentTaskIdSelected,
    );
    const updatedSubtasks = taskSubtasks.filter(subtask => subtask.id !== id);

    this.subtasks = this.subtasks.filter(
      subtask => subtask.taskId !== this.currentTaskIdSelected,
    );
    this.subtasks.push(...updatedSubtasks);

    this.subtasksSubject.next(
      this.subtasks.filter(
        subtask => subtask.taskId === this.currentTaskIdSelected,
      ),
    );
  }
}
