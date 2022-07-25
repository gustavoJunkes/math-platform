import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.component.html',
  styleUrls: ['./compound-interest.component.css']
})
export class CompoundInterestComponent implements OnInit {

  calculationForm1!: FormGroup;
  calculationForm2!: FormGroup;
    
  calculationResult1!: number;
  calculationResult2!: number;
  
  interestCalculationResult1!: number;
  interestCalculationResult2!: number;

  showExplanation: boolean = false;
  resultObject!: any;
  title: string = "Cálculo de Juros"

  constructor(private formBuilder: FormBuilder) { }
  

  ngOnInit(): void {
    this.calculationForm1 = this.formBuilder.group({
      "Valor inicial": this.formBuilder.control('0', [
        Validators.required
      ]),
      "Valor por período": this.formBuilder.control('0', [
        Validators.required
      ]),
      "Valor dos juros": this.formBuilder.control('0', [
        Validators.required
      ]),      
      "Número de períodos": this.formBuilder.control('0', [
        Validators.required
      ])
    });
    
    this.calculationForm2 = this.formBuilder.group({
      "Valor inicial": this.formBuilder.control('0', [
        Validators.required
      ]),     
      "Valor por período": this.formBuilder.control('0', [
        Validators.required
      ]),
      "Valor dos juros": this.formBuilder.control('0', [
        Validators.required
      ]),
      "Número de períodos": this.formBuilder.control('0', [
        Validators.required
      ])
    })    
  }

  copy(value: Object) {
    navigator.clipboard.writeText(value+"");
  }

  calculate1(form: FormGroup) {
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
    finalValue = +(finalValue.toFixed(2));
    this.calculationResult1 = finalValue;
    this.interestCalculationResult1 = totalInterest;
    console.log(finalValue)
  }

  changeShowExplanation() {
    this.showExplanation = !this.showExplanation;
  }

  calculate2(form: FormGroup) {
    var initialValue = Number(form.controls['Valor inicial'].value);
    var interestValue = Number(form.controls['Valor dos juros'].value);
    var numberPeriods = Number(form.controls['Valor por período'].value);
    var valuePeriod = Number(form.controls['Número de períodos'].value);
    
    var numericInterestValue = (interestValue / 100)*initialValue;
    var finalValue = initialValue + numericInterestValue + valuePeriod * numberPeriods;
    this.calculationResult2 = finalValue;    
    this.interestCalculationResult2 = numericInterestValue;
  }
}
