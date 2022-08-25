import { PostService } from './../../../../core/services/post.service';
import { QuestionService } from './../../../../core/services/question.service';
import { QuestionBase } from './../../../../core/model/question-base.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/model/post.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-formula-calculation',
  templateUrl: './formula-calculation.component.html',
  styleUrls: ['./formula-calculation.component.css']
})
export class FormulaCalculationComponent implements OnInit {

 // calculationForm!: FormGroup;
  post!: Post;
  questions!: QuestionBase<any>[];
  // todo: buscar questions do questionservice, e passar estas para o dynamic form

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService, 
    private postService: PostService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // todo: fazer este ccccódigo ser sequencial.
    console.log(this.activatedRoute.snapshot.params['id'])
    this.postService.byId(this.activatedRoute.snapshot.params['id']).subscribe((post) => {
      this.post = post;
      this.questions = this.questionService.getQuestions(this.post!.formula.variables);
      console.log("postId: " + post.id)
      console.log("postId: " + post.formula.explanation)
    })

  }

}
