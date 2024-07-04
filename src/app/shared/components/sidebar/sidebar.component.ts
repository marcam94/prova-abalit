import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatSuffix } from '@angular/material/input';
import { NgOptimizedImage } from '@angular/common';
import { TaskListComponent } from '../../../features/task-list/task-list.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIcon, MatInput, NgOptimizedImage, TaskListComponent, MatSuffix],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  username = signal('Marc Albiol Molina');
  email = signal('marcalbiol48@gmail.com');
}
