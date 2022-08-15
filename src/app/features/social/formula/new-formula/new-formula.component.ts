import { Post } from './../../../../core/model/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Variable } from 'src/app/core/model/variable.model';
import { Formula } from 'src/app/core/model/formula.model';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-new-formula',
  templateUrl: './new-formula.component.html',
  styleUrls: ['./new-formula.component.css']
})
export class NewFormulaComponent implements OnInit, OnChanges {

  // busca da api constantemente
  formula!: Formula;
  formulaEditor!: FormGroup;
  variableEditor!: FormGroup;
  explanationEditor!: FormGroup;
  post!: Post;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
    this.formula = new Formula("", "", []);
    this.post = new Post("", "", this.formula)

    this.formulaEditor = this.formBuilder.group({
      editor: this.formBuilder.control("", [Validators.required]
        // adicionar validator para variaveis inseridas existirem na lista de variaveis// ou fazer essa verificação no save
      )
    });

    this.variableEditor = this.formBuilder.group({
      variable: this.formBuilder.control("", [Validators.required])
      // adicionar validator para nome de variável. Deve seguir um padrão, sem espaços, não começar com número e etc.
    });

    this.explanationEditor = this.formBuilder.group({
      explanation: this.formBuilder.control("", [
        Validators.required
      ]),
      title: this.formBuilder.control("", [
        Validators.required
      ])
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    // reload do banco
  }

  saveFormula() {
    let formulaString = this.formulaEditor.controls['editor'].value;
    this.formula.formulaString = formulaString;
  }

  saveVariable() {
    let variable: Variable = new Variable(this.variableEditor.controls['variable'].value);
    this.formula.variables.push(variable); 
    this.variableEditor.reset();
  }

  saveExplanation() {
    this.formula.explanation = this.explanationEditor.controls['explanation'].value;
    this.post.title = this.explanationEditor.controls['title'].value;
  }

  postFormula() {
    // aqui dar sequencia para o post. 
    this.post.formula = this.formula;
  }
}
