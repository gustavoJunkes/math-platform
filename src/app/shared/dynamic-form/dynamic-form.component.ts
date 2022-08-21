import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/core/model/question-base.model';
import { QuestionControlService } from 'src/app/core/services/question-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;


  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    console.log("aham: " + this.questions)
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

}