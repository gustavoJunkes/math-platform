import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "matematica",
    loadChildren: async () => import('./math/math.module').then((m) => m.MathModule)
  },
  {
    path: "",
    redirectTo: "matematica",
    pathMatch: "full"
  },
  //adicionando um direto para o componente para testar
  {
    path: "calculation",
    loadChildren: async () => import('./math/math.module').then((m) => m.MathModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
