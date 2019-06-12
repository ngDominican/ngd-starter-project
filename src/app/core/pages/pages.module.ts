import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [ SharedModule ],
  exports: []
})
export class PagesModule { }
