import { NgModule } from '@angular/core';
import { AppSqrtPipe } from './app.sqrt';

@NgModule({
  declarations: [AppSqrtPipe],
  exports: [AppSqrtPipe]
})

export class PipModule {}
