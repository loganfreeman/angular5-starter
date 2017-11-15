import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fibonacci-number',
  templateUrl: './fibonacci-number.component.html',
  styleUrls: ['./fibonacci-number.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FibonacciNumberComponent implements OnInit {

  n: number;

  result: number;

  constructor() { }

  ngOnInit() {
  }

  private fibonacci(num: number, memo: any = {}): number {
    if (memo[num]) return memo[num];
    if (num == 1) return 1;
    if (num == 0) return 0;

    return memo[num] = this.fibonacci(num - 1, memo) + this.fibonacci(num - 2, memo);
  }

  run() {
    this.result = this.fibonacci(this.n);
  }



}
