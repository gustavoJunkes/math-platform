import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  title = "Diferença entre datas"
  diferenceBetweenDatasForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.diferenceBetweenDatasForm = this.formBuilder.group({
      "Data inicial": this.formBuilder.control('', [
        Validators.required
      ]),
      "Data final": this.formBuilder.control('', [
        Validators.required
      ])
    })
  }

  calculateDiferenceBetweenDates(form: FormGroup) {
    let inicialDate = new Date(form.controls["Data inicial"].value);
    let finalDate = new Date(form.controls["Data final"].value);

    window.alert("data inicial: " + inicialDate + ". Data final: " + finalDate)
    

  }
}
