import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { PercentageComponent } from './percentage/percentage.component';
import { FactorialComponent } from './factorial/factorial.component';


@NgModule({
  declarations: [
    CompoundInterestComponent,
    DataComponent,
    PercentageComponent,
    FactorialComponent
  ],
  imports: [
    CommonModule,
    MathRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class MathModule { }
