import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/core/model/question-base.model';
import { QuestionControlService } from 'src/app/core/services/question-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form!: FormGroup;

  @Output()
  resultObject = new EventEmitter();

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    console.log("aham: " + this.questions)
    if(this.questions != null) {
      console.log(this.questions != null)
      this.form = this.qcs.toFormGroup(this.questions);  
    }
    
  }

  onSubmit() {
    this.questions?.forEach(question => {
      console.log(question.key + " - " + this.form.controls[question.key].value)
    })
    console.log(this.form.controls["a"])
    this.resultObject.emit()
  }

}