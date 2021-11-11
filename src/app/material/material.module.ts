import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButton, MatButtonModule } from '@angular/material/button';

const MaterialComponents=[
  MatButtonModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
