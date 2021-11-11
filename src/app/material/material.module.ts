import { NgModule } from '@angular/core';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const MaterialComponents=[
 MatProgressSpinnerModule,
 MatProgressBarModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
