import { CientificNotationComponent } from './cientific-notation/cientific-notation.component';
import { MdcComponent } from './mdc/mdc.component';
import { FactorialComponent } from './factorial/factorial.component';
import { PercentageComponent } from './percentage/percentage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { DataComponent } from './data/data.component';


const routes: Routes = [
  {
    path: "juros",
    component: CompoundInterestComponent,
    //loadChildren: async () => import('./compound-interest/compound-interest.component').then((m) => m.CompoundInterestComponent),
  },
  {
    path: "",
    redirectTo: "juros",
    pathMatch: "full"
  },
  {
    path: "datas",
    component: DataComponent
  },
  {
    path: "porcentagem",
    component: PercentageComponent
  },
  {
    path: "fatorial",
    component: FactorialComponent
  },
  {
    path: "notação-científica",
    component: CientificNotationComponent
  },
  {
    path: "mdc",
    component: MdcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
