import { NgModule } from '@angular/core';


import {MatListModule} from '@angular/material/list';

const MaterialComponents=[
  MatListModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
