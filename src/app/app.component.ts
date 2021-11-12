import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'Material';
  constructor(public dialog: MatDialog){}
  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent, {data:{name:'Kevin'}});

    dialogRef.afterClosed().subscribe(result=>{
      console.log('dialog result is ', result);
    })
  }

    
}



