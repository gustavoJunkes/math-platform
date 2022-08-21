import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/core/model/question-base.model';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
}