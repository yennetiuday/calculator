import { Component } from '@angular/core';

@Component({
  selector: 'app-division-calculator',
  templateUrl: './division-calculator.component.html',
  styleUrls: ['./division-calculator.component.css']
})
export class DivisionCalculatorComponent {

  inputValue1: number | null = null;
  inputValue2: number | null = null;
  result: number | null = null;
  showResult: boolean = false;
  typingTimer: any;

  onInputChange() {
    clearTimeout(this.typingTimer);

    this.typingTimer = setTimeout(() => {
      this.calculateDivision();
    }, 500);
  }

  calculateDivision() {
    if (this.inputValue1 !== null && this.inputValue2 !== null && this.inputValue2 !== 0) {
      this.result = this.inputValue1 / this.inputValue2;
      this.showResult = true;
    } else {
      this.showResult = false;
    }
  }
}
