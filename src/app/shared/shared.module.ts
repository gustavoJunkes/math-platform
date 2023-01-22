import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardCalculationComponent } from './card-calculation/card-calculation.component';
import { CalculationPostComponent } from './calculation-post/calculation-post.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HeaderComponent,
    CardCalculationComponent,
    FooterComponent,
    CalculationPostComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
    CardCalculationComponent,
    FooterComponent,
    CalculationPostComponent,
    DynamicFormComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
