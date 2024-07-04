import {Routes} from '@angular/router';
import {LayoutComponent} from "./shared/components/layout/layout.component";

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/task-list/task-list.component').then(x => x.TaskListComponent)
      }
    ]
  }
];
