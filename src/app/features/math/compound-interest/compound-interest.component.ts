import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.css']
})
export class CompoundInterestComponent implements OnInit {

  calculationForm!: FormGroup;
  showExplanation: boolean = false;
  calculationResult!: number;
  interestCalculationResult!: number;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.calculationForm = this.formBuilder.group({
      initialValue: this.formBuilder.control('', [
        Validators.required
      ]),
      interestValue: this.formBuilder.control('', [
        Validators.required
      ]),
      valuePeriod: this.formBuilder.control('', [
        Validators.required
      ]),
      numberPeriods: this.formBuilder.control('', [
        Validators.required
      ]),
    })
  }

  calculate() {
    var initialValue = Number(this.calculationForm.controls['initialValue'].value);
    var interestValue = Number(this.calculationForm.controls['interestValue'].value);
    var numberPeriods = Number(this.calculationForm.controls['numberPeriods'].value);
    var valuePeriod = Number(this.calculationForm.controls['valuePeriod'].value);
    
    var finalValue = initialValue
    var numericInterestValue = 0.;
    var totalInterest = 0;

    for(var i = 0; i < numberPeriods; i++) {
      
      numericInterestValue = (interestValue / 100) * finalValue;
      totalInterest += numericInterestValue;
      finalValue += valuePeriod + numericInterestValue; 
      
      
      console.log(finalValue)
      console.log("------------------------------")
    }
    finalValue = +(finalValue.toFixed(2))   
    this.calculationResult = finalValue;
    this.interestCalculationResult = totalInterest;
  }

  changeShowExplanation() {
    this.showExplanation = !this.showExplanation;
  }
}
