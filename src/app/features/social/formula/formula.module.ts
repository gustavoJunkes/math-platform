import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaRoutingModule } from './formula-routing.module';
import { NewFormulaComponent } from './new-formula/new-formula.component';
import { MyFormulasComponent } from './my-formulas/my-formulas.component';


@NgModule({
  declarations: [
    NewFormulaComponent,
    MyFormulasComponent
  ],
  imports: [
    CommonModule,
    FormulaRoutingModule
  ]
})
export class FormulaModule { }
