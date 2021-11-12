import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'Material';

  minDate=new Date();
  maxDate= new Date(2022, 3, 10);  // Months start from 0

  dateFilter = (date: { getDay: () => any; }|null) =>{
    const day = date?.getDay();
    return day!==0 && day!==6;
  }
}
