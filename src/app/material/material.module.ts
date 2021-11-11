import { NgModule } from '@angular/core';


import {MatMenuModule} from '@angular/material/menu';

const MaterialComponents=[
  MatMenuModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
