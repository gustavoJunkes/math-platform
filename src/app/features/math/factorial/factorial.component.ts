import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {

  calculationForm1!: FormGroup;

  calculationResult1!: number;

  valueCopied!: Object;

  constructor(private formBuilder: FormBuilder, private titleService: Title) { }

  ngOnInit(): void {
  this.calculationForm1 = this.formBuilder.group({
    "Fatorial": this.formBuilder.control('', [
      Validators.required
    ])
  })
  this.titleService.setTitle("Cálculo de fatorial");
  }

  copy(value: number) {
    navigator.clipboard.writeText(value+"");
    this.valueCopied = value;
  }

  calculate1(form: FormGroup) {
    var number = form.controls['Fatorial'].value;
    this.calculationResult1 = this.calculateFactorial(number);
  }

  // 4! = 4*3*2*1
  calculateFactorial(number:number): number {
    if(number < 3 && number > -3) {
      return number;
    }
    
    var result = number;
    for(let i = number - 1; i > 0; i--) {
      result *= i;
      //result *= this.calculateFactorial(i);
    }

    return result;
  }

}
