import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Variable } from 'src/app/core/model/variable.model';

@Component({
  selector: 'app-new-formula',
  templateUrl: './new-formula.component.html',
  styleUrls: ['./new-formula.component.css']
})
export class NewFormulaComponent implements OnInit, OnChanges{

  // busca da api constantemente
  variables!: Variable[];
  formulaEditor!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.variables = [
      new Variable("A"),
      new Variable("B"),
      new Variable("C")
    ];

    this.formulaEditor = this.formBuilder.group({
      "editor" : this.formBuilder.control("" 
        // adicionar validator para variaveis inseridas existirem na lista de variaveis// ou fazer essa verificação no save
      )
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    // reload do banco
  }

  saveFormula(){
    // salvar formula
  }

}
