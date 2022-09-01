import { Post } from 'src/app/core/model/post.model';
import { PostService } from './../../../core/services/post.service';
import { MyFormulasComponent } from './my-formulas/my-formulas.component';
import { NewFormulaComponent } from './new-formula/new-formula.component';
import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterModule, Routes } from '@angular/router';
import { FormulaCalculationComponent } from './formula-calculation/formula-calculation.component';
import { Observable } from 'rxjs';

@Injectable()
export class PostDataResolver implements Resolve<Post> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    return this.postService.byId(route.params['id']);
  }
}

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
  },
  {
    path: ":id",
    component: FormulaCalculationComponent,
    resolve: {
      post: PostDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PostDataResolver
  ]
})
export class FormulaRoutingModule { }
