import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { FormGroup } from '@angular/forms';
import { Subtask } from '../../../core/domain/models/sub-task.model';

export interface DialogOpt {
  title: string;
  inputForm?: FormGroup;
  inputData?: Subtask;
  readonly?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(
    opts: DialogOpt,
    config: {
      disableClose?: boolean;
      height?: string;
      width?: string;
    } = {}
  ): MatDialogRef<DialogComponent> {
    const dialogConf: MatDialogConfig<DialogOpt> = {
      data: opts,
      ...config,
    };
    return this.dialog.open(DialogComponent, dialogConf);
  }
}
