import { TextboxQuestion } from './../model/question-textbox';
import { Variable } from './../model/variable.model';
import { PostService } from './post.service';
import { QuestionBase } from './../model/question-base.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private postService: PostService) { }

  getQuestions(variables: Variable[]): QuestionBase<any>[] {

    let questions = [];

    for(let i = 0; i < variables.length; i ++) {
      let question = new TextboxQuestion({
        key: variables[i].variableName,
        label: variables[i].variableName,
        type: 'number',
        order: i,
        required: true
      });

      questions.push(question);
    }
    return questions;
  }
}
