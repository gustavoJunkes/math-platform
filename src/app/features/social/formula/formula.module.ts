import { PostService } from './../../../core/services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaRoutingModule, PostDataResolver } from './formula-routing.module';
import { NewFormulaComponent } from './new-formula/new-formula.component';
import { MyFormulasComponent } from './my-formulas/my-formulas.component';
import { FormulaCalculationComponent } from './formula-calculation/formula-calculation.component';


@NgModule({
  declarations: [
    NewFormulaComponent,
    MyFormulasComponent,
    FormulaCalculationComponent
  ],
  imports: [
    CommonModule,
    FormulaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    PostDataResolver
  ]
})
export class FormulaModule { }
