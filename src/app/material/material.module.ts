import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
const MaterialComponents=[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule
  
]


@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
