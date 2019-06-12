import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path: '', component: AdministrationComponent,
    children: [
      {
        path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
      },
      {
        path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
