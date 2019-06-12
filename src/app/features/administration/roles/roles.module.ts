import { NgModule } from '@angular/core';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RolesComponent],
  imports: [
    SharedModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
