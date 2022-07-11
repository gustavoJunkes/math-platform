import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';


const routes: Routes = [
  {
    path: "juros",
    component: CompoundInterestComponent
    //loadChildren: async () => import('./compound-interest/compound-interest.component').then((m) => m.CompoundInterestComponent),
  },
  {
    path: "",
    redirectTo: "juros",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
