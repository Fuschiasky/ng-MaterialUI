import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'Material';
  numbers:number[] = [];

  constructor(){
    for (let i =0; i<1000; i++){
      this.numbers.push(i);
    }
  }

}



