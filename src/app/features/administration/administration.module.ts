import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdministrationComponent } from './administration.component';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [
    SharedModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
