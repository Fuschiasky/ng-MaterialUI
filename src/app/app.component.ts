import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'Material';

  constructor( 
    private snackBar: MatSnackBar
  ){}

  openSnackBar(message:string, action:string){
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000}); // YOu can give a bunch of properties the way you have given duration here. Check this out
  
    // runs after the snack closes
    snackBarRef.afterDismissed().subscribe(()=>{
      console.log("The snackbar was dismissed");
    });

    //runs if you click on the Action message
    snackBarRef.onAction().subscribe(()=>{
      console.log('The action button was clicked');
    });

    
  }


  openCustomSnackBar(){
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration:2000})
  }
}

  @Component({
    selector: 'custom-snackbar',
    template: `<span style='color: orange'> Custom SnackBar</span>`
  })
  export class CustomSnackBarComponent {}


