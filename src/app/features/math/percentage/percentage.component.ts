import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  formPercentage1!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formPercentage1 = this.formBuilder.group({
      "O valor": this.formBuilder.control('', [
        Validators.required
      ]),
      "É qual porcentagem do valor": this.formBuilder.control('', [
        Validators.required
      ])
    })
  }

  calculatePercentage1(form: FormGroup) {
    let value1 = form.controls["O valor"].value;
    window.alert(value1)
  }

}
