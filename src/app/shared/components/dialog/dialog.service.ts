import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef,} from '@angular/material/dialog';
import {DialogComponent} from './dialog.component';
import {FormGroup} from "@angular/forms";

export interface DialogOpt {
  title: string;
  inputData?: FormGroup;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {
  }

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

  closeDialog() {
    this.dialog.closeAll();
  }
}
