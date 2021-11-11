import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
const MaterialComponents=[
  MatCardModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
