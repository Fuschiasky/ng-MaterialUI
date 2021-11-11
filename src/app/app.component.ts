import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Material';

  showSpinner=false;

  showBar = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    }, 2000);
  }

  loadBarData(){
    this.showBar=true;
    setTimeout(()=>{
      this.showBar=false;
    }, 2000);
  }
}
