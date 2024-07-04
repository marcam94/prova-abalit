import {Routes} from '@angular/router';
import {LayoutComponent} from "./shared/components/layout/layout.component";

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'tareas'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tareas',
        loadComponent: () => import('./features/task-list/subtask-list/subtask-list.component')
          .then(x => x.SubtaskListComponent)
      }
    ]
  }
];
