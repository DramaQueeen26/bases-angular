import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {

    constructor() {}
    public title: string = 'Counter';
    public counter: number = 10;
  
    increaseBy( value: number ): void {
      this.counter += value;
    }
  
    decreaseBy( value: number ): void {
      this.counter -= value;
    }
  
    resetCounter( value: number ){
      this.counter = value;
    }

}