import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
const MaterialComponents=[
  MatTabsModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
