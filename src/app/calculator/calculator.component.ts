import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() { }

  public getNumber(val: string) {
    console.log(val);
    if (this.waitForSecondNumber) {
      this.currentNumber = val;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = val : this.currentNumber += val;
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op, secondOp) {
    switch (op) {
      case '+':
      return this.firstOperand += secondOp;
      case '-':
      return this.firstOperand -= secondOp;
      case '*':
      return this.firstOperand *= secondOp;
      case '/':
      return this.firstOperand /= secondOp;
      case '=':
      return secondOp;
    }
  }

  getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator , Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
