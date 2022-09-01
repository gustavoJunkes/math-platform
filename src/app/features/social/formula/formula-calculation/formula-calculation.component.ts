import { Variable } from './../../../../core/model/variable.model';
import { FormulaService } from './../../../../core/services/formula.service';
import { PostService } from './../../../../core/services/post.service';
import { QuestionService } from './../../../../core/services/question.service';
import { QuestionBase } from './../../../../core/model/question-base.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
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
  form!: FormGroup;
  // todo: buscar questions do questionservice, e passar estas para o dynamic form

  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService, 
    private postService: PostService, 
    private activatedRoute: ActivatedRoute,
    private formulaService: FormulaService
    ) { }
    
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      values: this.formBuilder.array([])
    })
    
    this.postService.byId(this.activatedRoute.snapshot.params['id']).subscribe(post => {
      this.post = post;
      this.onLoaded();
    }) 
  }

  onLoaded() {
    this.post.formula.variables.forEach(variable => {
      this.values.push(this.newValue(variable.variableName))
    })
  }

  newValue(variable: string): FormGroup {
    return this.formBuilder.group({
      variableValue: ''
    })
  }

  get values() {
    return this.form.get("values") as FormArray;
  }

  onSubmit() {
    console.log(this.form.value)
    
    let values: number[] = [];
    let variables: Variable[] = [];

    for(let i = 0; i < this.values.length; i++) {
      console.log(this.values.at(i).value.variableValue);

      variables.push(this.post.formula.variables[i]);
      values.push(Number(this.values.at(i).value.variableValue));      
    }

    this.formulaService.calculate(this.post.formula.id, {variables, values}).subscribe(result => {
      console.log(result)
    })

    
  }

    // TO DO: fazer este form dinamico usando form array
/******
  async ngOnInit(): Promise<void> {
    // todo: fazer este ccccódigo ser sequencial.
    console.log(this.activatedRoute.snapshot.params['id'])
    this.post = await this.postService.byIdAsync(this.activatedRoute.snapshot.params['id']);
    //window.alert("the post title is: "+this.post.title)
    this.questions = this.questionService.getQuestions(this.post!.formula.variables);
    /*
 this.postService.byId(this.activatedRoute.snapshot.params['id']).subscribe((post) => {
      this.post = post;
      this.questions = this.questionService.getQuestions(this.post!.formula.variables);
      console.log("postId: " + post.id)
      console.log("postId: " + post.formula.explanation)
    })
   

  }
***/
}
