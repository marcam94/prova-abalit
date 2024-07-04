import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {DialogOpt} from "./dialog.service";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatHint,
    TitleCasePipe,
    MatError
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  public title!: string
  public formGroup!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogOpt,
    public dialog: MatDialogRef<DialogComponent>
  ) {
  }

  ngOnInit(): void {
    this.title = this.data.title
    if (this.data.inputData) this.formGroup = this.data.inputData
  }

  getControlNames() {
    return Object.keys(this.formGroup.controls)
  }

  sendValues() {
    if (this.formGroup.valid) {
      this.dialog.close(this.formGroup.value)
    }
  }
}
