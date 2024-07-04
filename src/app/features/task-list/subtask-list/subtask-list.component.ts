import { Component, inject } from '@angular/core';
import { SubtaskService } from '../../../core/domain/services/sub-task.service';
import {
  AsyncPipe,
  JsonPipe,
  NgIf,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { AutofocusDirective } from '../../../shared/directives/autofocus.directive';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatButton, MatIconButton } from '@angular/material/button';
import { DialogService } from '../../../shared/components/dialog/dialog.service';
import { take } from 'rxjs';
import { Subtask } from '../../../core/domain/models/sub-task.model';

@Component({
  selector: 'app-subtask-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    TitleCasePipe,
    UpperCasePipe,
    MatIcon,
    NgIf,
    MatInput,
    FormsModule,
    AutofocusDirective,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatButton,
    MatIconButton,
  ],
  templateUrl: './subtask-list.component.html',
  styleUrl: './subtask-list.component.css',
})
export class SubtaskListComponent {
  private readonly subTaskService = inject(SubtaskService);
  public subTasks$ = this.subTaskService.subtasks$;
  private readonly dialogService = inject(DialogService);
  private newSubTaskForm = new FormGroup({
    nombre: new FormControl<string>(
      { value: '', disabled: false },
      Validators.required
    ),
    descripcion: new FormControl<string>(
      { value: '', disabled: false },
      Validators.required
    ),
  });

  deleteSubTask(id: number) {
    this.subTaskService.deleteSubtask(id);
  }

  viewDetail(id: number) {
    const findRelatedSubTask = this.subTaskService.getSubtaskById(id);
    if (!findRelatedSubTask) {
      throw new Error('subtaks related not found');
    } else {
      let dialogRef = this.dialogService.openDialog(
        {
          title: 'Detalle tarea',
          inputData: findRelatedSubTask,
          readonly: true,
        },
        {
          height: '400px',
          width: '600px',
        }
      );
      dialogRef.afterClosed().pipe(take(1)).subscribe();
    }
  }

  editSubTask(id: number) {
    const findRelatedSubTask = this.subTaskService.getSubtaskById(id);
    if (!findRelatedSubTask) {
      throw new Error('subtaks related not found');
    } else {
      this.newSubTaskForm.patchValue({
        nombre: findRelatedSubTask?.title,
        descripcion: findRelatedSubTask?.description,
      });
      let dialogRef = this.dialogService.openDialog(
        {
          title: 'Editar tarea',
          inputForm: this.newSubTaskForm,
        },
        {
          height: '400px',
          width: '600px',
        }
      );
      dialogRef
        .afterClosed()
        .pipe(take(1))
        .subscribe({
          next: (res: { nombre: string; descripcion: string }) => {
            const updatedSubTask = {
              ...findRelatedSubTask,
              title: res.nombre,
              description: res.descripcion,
              updateAt: new Date(),
            } as Subtask;
            this.subTaskService.updateSubtask(updatedSubTask);
          },
          complete: () => {
            this.newSubTaskForm.reset();
          },
        });
    }
  }

  checkSubTask(id: number) {
    const findRelatedSubTask = this.subTaskService.getSubtaskById(id);
    if (findRelatedSubTask) {
      this.subTaskService.updateSubtask({
        ...findRelatedSubTask,
        completed: true,
        doneAt: new Date(),
      });
    }
  }

  createSubTask() {
    let dialogRef = this.dialogService.openDialog(
      {
        title: 'Crear nueva tarea',
        inputForm: this.newSubTaskForm,
      },
      {
        height: '400px',
        width: '600px',
      }
    );

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe({
        next: (res: { nombre: string; descripcion: string }) => {
          if (res) {
            this.subTaskService.addSubtask({
              title: res.nombre,
              description: res.descripcion,
            });
          }
          this.newSubTaskForm.reset();
        },
      });
  }
}
