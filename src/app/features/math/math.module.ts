import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';


@NgModule({
  declarations: [
    CompoundInterestComponent
  ],
  imports: [
    CommonModule,
    MathRoutingModule,
    SharedModule
  ]
})
export class MathModule { }
