import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardCalculationComponent } from './card-calculation/card-calculation.component';
import { CalculationPostComponent } from './calculation-post/calculation-post.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardCalculationComponent,
    FooterComponent,
    CalculationPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    CardCalculationComponent,
    FooterComponent,
    CalculationPostComponent
  ]
})
export class SharedModule { }
