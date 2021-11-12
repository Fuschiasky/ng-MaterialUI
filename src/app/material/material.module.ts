import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatSnackBarModule} from '@angular/material/snack-bar';
const MaterialComponents=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
