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
  keys!: string[];
  constructor(private formBuilder: FormBuilder) { }
  resultObject!: any;
  title: string = "Juros compostos"

  ngOnInit(): void {
    this.calculationForm = this.formBuilder.group({
      "Valor inicial": this.formBuilder.control('0', [
        Validators.required
      ]),
      "Valor dos juros": this.formBuilder.control('0', [
        Validators.required
      ]),
      "Valor por período": this.formBuilder.control('0', [
        Validators.required
      ]),
      "Número de períodos": this.formBuilder.control('0', [
        Validators.required
      ]),
    })    
  }

  calculate(form: FormGroup) {
    var initialValue = Number(form.controls['Valor inicial'].value);
    var interestValue = Number(form.controls['Valor dos juros'].value);
    var numberPeriods = Number(form.controls['Valor por período'].value);
    var valuePeriod = Number(form.controls['Número de períodos'].value);

    var finalValue = initialValue;
    var numericInterestValue = 0.;
    var totalInterest = 0;

    for (var i = 0; i < numberPeriods; i++) {

      numericInterestValue = (interestValue / 100) * finalValue;
      totalInterest += numericInterestValue;
      finalValue += valuePeriod + numericInterestValue;


      console.log(finalValue)
      console.log("------------------------------")
    }
    finalValue = +(finalValue.toFixed(2))
    this.calculationResult = finalValue;
    this.interestCalculationResult = totalInterest;
    console.log(finalValue)
  }

  changeShowExplanation() {
    this.showExplanation = !this.showExplanation;
  }
}
