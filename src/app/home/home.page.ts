import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  display = "0";
  operand = 0;
  operator = '';
  memory: any = [];
  showTrigFunctions = false; // Variable para controlar la visibilidad de las funciones trigonométricas
  trigModeDegrees = true; // Variable para controlar el modo de grados/radianes

  constructor() {}

  numbers(n: any) {
    this.memory.push(n);
    this.display = this.memory.join('');
  }

  operation(op: any) {
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

  clear() {
    this.display = '0';
    this.operand = 0;
    this.memory = [];
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

  trigFunction(func: string) {
    let value = Number(this.display);

    if (this.trigModeDegrees) {
      // Si estamos en modo grados, convertir a radianes antes de calcular
      value = (value * Math.PI) / 180;
    }

    switch (func) {
      case 'sin':
        this.display = String(Math.sin(value));
        break;
      case 'cos':
        this.display = String(Math.cos(value));
        break;
      case 'tan':
        this.display = String(Math.tan(value));
        break;
      case 'π':
        this.display = String(Math.PI);
        break;
      default:
        break;
    }
  }

  toggleTrigMode() {
    this.trigModeDegrees = !this.trigModeDegrees; // Alternar entre grados y radianes
  }
}
