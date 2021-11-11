import { NgModule } from '@angular/core';


import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
const MaterialComponents=[
  MatListModule,
  MatIconModule,
  MatDividerModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
