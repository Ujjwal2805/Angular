import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-prsnl-project';

// displayVal:string='';
// getValue(val:string){
// console.warn("Hi there event has occured");
// this.displayVal=val;

// }

valu:number=0;
increment(){


this.valu++;

}
decrement(){

  this.valu--;

  }

}
