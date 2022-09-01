import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mdc',
  templateUrl: './mdc.component.html',
  styleUrls: ['./mdc.component.css']
})
export class MdcComponent implements OnInit {

  formMdc!: FormGroup;

  calculationResult!: number;

  valueCopied!: Object;

  constructor(private formBuilder: FormBuilder,  private titleService: Title) { }

  ngOnInit(): void {
    this.formMdc = this.formBuilder.group({
      "Valor 1": this.formBuilder.control('', [
        Validators.required
      ]),
      "Valor 2": this.formBuilder.control('', [
        Validators.required
      ])
    })
    this.titleService.setTitle("Cálculo MDC")
  }

  copy(value: number) {
    navigator.clipboard.writeText(value+"");
    this.valueCopied = value;
  }

  //to do: acertar calculo, adicionar botão mdc no header, terminar css card result-
  calculateMdc(form: FormGroup) {
    var rest = 0;
    var value1 = form.controls["Valor 1"].value;
    var value2 = form.controls["Valor 2"].value;

    while (value2 != 0) {
      rest = value1 % value2;
      value1 = value2;
      value2 = rest;      
      console.log("value2:" + value2)
      console.log("value1:" + value1)

    }
    console.log(value2)
    this.calculationResult = value2;
  }

}
