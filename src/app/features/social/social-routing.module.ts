import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "formula",
    loadChildren: async () => import('./formula/formula.module').then((m) => m.FormulaModule)
  },
  {
    path: "feed",
    component: FeedComponent
  },
  {
    path: "",
    redirectTo: "feed"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
