import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display ="0"
  operand = 0;
  operator = '';
  memory:any = [];

  constructor() {}

  numbers(n: any){
    this.memory.push(n);
    this.display = this.memory.join('');
  }

  operation(op: any){
    this.operand = Number(this.display);
    this.memory = [];
    this.operator = op;
  }

  equal() {
    if (this.operator === 'x') {
      this.display = String(this.operand * Number(this.display));
    } else if (this.operator === '÷') {
      this.display = String(this.operand / Number(this.display));
    } else if (this.operator === '+') {
      this.display = String(this.operand + Number(this.display));
    } else if (this.operator === '-') {
      this.display = String(this.operand - Number(this.display));
    } else if (this.operator === '%') {
      this.display = String(this.operand * (Number(this.display) / 100));
    }
  }

  clear(){
    this.display = '0';
    this.operand = 0;
    this.memory = [];
  }

  addDecimal() {
    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  toggleSign() {
    if (this.display !== '0') {
      if (this.display.startsWith('-')) {
        this.display = this.display.substring(1); 
      } else {
        this.display = '-' + this.display; 
      }
    }
  }
  
  
}
