import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  formPercentage1!: FormGroup;
  formPercentage2!: FormGroup;
  formPercentage3!: FormGroup;
  formPercentage4!: FormGroup;

  calculationResult1!: number;
  calculationResult2!: number;
  calculationResult3!: number;
  calculationResult4!: number;

  showExplanation01: boolean = true;
  valueCopied!: Object;

  constructor(private formBuilder: FormBuilder,  private titleService: Title) { }

  ngOnInit(): void {
    this.formPercentage1 = this.formBuilder.group({
      "O valor": this.formBuilder.control('', [
        Validators.required
      ]),
      "É qual porcentagem do valor": this.formBuilder.control('', [
        Validators.required
      ])
    });

    this.formPercentage2 = this.formBuilder.group({
      "x": this.formBuilder.control('', [
        Validators.required
      ]),
      "y": this.formBuilder.control('', [
        Validators.required
      ])
    }),

    this.formPercentage3 = this.formBuilder.group({
      "O valor": this.formBuilder.control('', [
        Validators.required
      ]),
      "Aumentou para": this.formBuilder.control('', [
        Validators.required
      ])
    }),

    this.formPercentage4 = this.formBuilder.group({
      "O valor": this.formBuilder.control('', [
        Validators.required
      ]),
      "Diminuiu para": this.formBuilder.control('', [
        Validators.required
      ])
    })
    this.titleService.setTitle("Cálculo de percentual");

  }

  copy(value: number) {
    navigator.clipboard.writeText(value+"");
    this.valueCopied = value;
  }

  calculatePercentage1(form: FormGroup) {
    let value1 = form.controls["O valor"].value;
    let value2 = form.controls["É qual porcentagem do valor"].value;

    let result = (value1 / value2) * 100;
    this.calculationResult1 = result;
    console.log("O resultado é: " + result + "%")
  }

  calculatePercentage2(form: FormGroup) {
    let value1 = form.controls['x'].value;
    let value2 = form.controls['y'].value;

    let result = (value1 / 100) * value2; 
    this.calculationResult2 = result;
    console.log("O resultado é: " + result)
  }

  calculatePercentage3(form: FormGroup) {
    let value1 = form.controls["O valor"].value;
    let value2 = form.controls['Aumentou para'].value;

    let result = (value2 - value1) / value1 * 100;
    this.calculationResult3 = result;
    console.log("O resultado é: " + result + "%")
  }

  calculatePercentage4(form: FormGroup) { 
    let value1 = form.controls["O valor"].value;
    let value2 = form.controls['Diminuiu para'].value;

    let result = (value1 - value2) / value2 * 100;
    this.calculationResult4 = result;
    console.log("O resultado é: " + result + "%")
  }

}
