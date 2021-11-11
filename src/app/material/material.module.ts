import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponents=[
  MatGridListModule

]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
