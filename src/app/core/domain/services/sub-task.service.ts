import {Injectable} from '@angular/core';
import {Subtask} from '../models/sub-task.model';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class subTask {
  private currentTaskIdSelected!: number
  private subtasks: Subtask[] = [{
    taskId: 1, id: 1, completed: false, dueDate: new Date(), title: 'Comprar', description: 'test'
  }, {
    taskId: 1, id: 2, completed: true, dueDate: new Date(), title: 'Vender', description: 'test'
  }, {
    taskId: 1, id: 3, completed: false, dueDate: new Date(), title: 'Lavar', description: 'test'
  }, {
    taskId: 2, id: 4, completed: false, dueDate: new Date(), title: 'aa', description: 'test'
  }, {
    taskId: 3, id: 5, completed: false, dueDate: new Date(), title: 'Sss', description: 'test'
  },];
  private subtasksSubject = new Subject<Subtask[] | []>();
  subtasks$ = this.subtasksSubject.asObservable();

  constructor() {
  }

  getSubtasks(taskId: number): void {
    const subtasksFound = this.subtasks.filter(subtask => subtask.taskId === taskId);
    this.currentTaskIdSelected = taskId
    this.subtasksSubject.next(subtasksFound.length ? subtasksFound : []);
  }

  getSubtaskById(id: number): Subtask | undefined {
    return this.subtasks.find(subtask => subtask.id === id);

  }

  addSubtask(newSubtask: { title: string, description: string }): void {
    const newSubtaskToAdd: Subtask = {
      title: newSubtask.title,
      taskId: this.currentTaskIdSelected,
      description: newSubtask.description,
      id: Math.floor(Math.random() * 1000),
      completed: false,
      dueDate: new Date()
    };
    this.subtasks.push(newSubtaskToAdd);
    this.subtasksSubject.next(this.subtasks.filter(subtask => subtask.taskId === this.currentTaskIdSelected));
  }

  updateSubtask(subtask: Subtask): void {
    const index = this.subtasks.findIndex(st => st.id === subtask.id);
    if (index !== -1) {
      this.subtasks[index] = subtask;
      this.subtasksSubject.next(this.subtasks.filter(st => st.taskId === subtask.taskId));
    }
  }

  deleteSubtask(id: number): void {
    const taskSubtasks = this.subtasks.filter(subtask => subtask.taskId === this.currentTaskIdSelected);
    const updatedSubtasks = taskSubtasks.filter(subtask => subtask.id !== id);

    this.subtasks = this.subtasks.filter(subtask => subtask.taskId !== this.currentTaskIdSelected);
    this.subtasks.push(...updatedSubtasks);

    this.subtasksSubject.next(this.subtasks.filter(subtask => subtask.taskId === this.currentTaskIdSelected));
  }
}
