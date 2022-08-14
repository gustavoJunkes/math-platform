import { MyFormulasComponent } from './my-formulas/my-formulas.component';
import { NewFormulaComponent } from './new-formula/new-formula.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "nova-formula",
    component: NewFormulaComponent
  },
  {
    path: "",
    redirectTo: "minhas-formulas"
  },
  {
    path: "minhas-formulas",
    component: MyFormulasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaRoutingModule { }
