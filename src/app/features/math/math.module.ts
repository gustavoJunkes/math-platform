import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    CompoundInterestComponent
    DataComponent,
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
