import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
