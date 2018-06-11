import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  myNumberSubscription: Subscription;
  printme: string;
  buttonState: boolean = false;

  constructor() {
    this.printme = '';
  }

  ngOnInit() {
    // create Observable (set of instructions with steps)
    const myNumbers = Observable.create( (observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('1 ');
      },2000);
      setTimeout(() => {
        observer.next('2 ');
      },4000);
      setTimeout(() => {
        observer.complete();
      },5000)

    });
    // subscribe the Observable
   this.myNumberSubscription = myNumbers.subscribe(
      (data:  string) => {
        console.log(data);
        this.printme += data;
        console.log(this.printme)
      },
      (error:  string) => {console.log(error)},
      () => {
        this.printme += 'Done';
        this.buttonState = true;
        console.log('completed');
      }
    );
  }

  // destroy the Observable
  ngOnDestroy () {
    this.myNumberSubscription.unsubscribe();
  }

}
