import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colorVar = 'red';

  myArray: number[];

  val: number;

  constructor () {
    this.myArray = [5,10,100];
    // random value from myArray
    this.val = this.myArray[Math.floor(Math.random()*this.myArray.length)];
  }
}
