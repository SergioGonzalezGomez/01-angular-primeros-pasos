import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `<h1>Hola soy counter</h1>
  <p>
  Counter: {{ counter }}
</p>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="decreaseBy(1)">-1</button>
  `
})
export class CounterComponent {

  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter = this.counter += value;
  }

  decreaseBy(value: number): void {
    this.counter = this.counter -= value;
  }

  reset(): void {
    this.counter = 0;

  }
}
