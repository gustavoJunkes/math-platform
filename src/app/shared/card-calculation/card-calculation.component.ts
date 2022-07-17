import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-calculation',
  templateUrl: './card-calculation.component.html',
  styleUrls: ['./card-calculation.component.css']
})
export class CardCalculationComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  form!: FormGroup;
  calculationResult!: number;
  interestCalculationResult!: number;
  keys!: string[];
  @Output()
  resultObject = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.form.value);
  }

  calculate(value: FormGroup) {
    /*
    for(let i = 0; i < this.keys.length; i++) {
      Object.defineProperty(this.resultObject, this.keys[i], {value: this.form.controls[this.keys[i]].value, configurable: true})
    }*/
    this.resultObject.emit(value);
  }

}
