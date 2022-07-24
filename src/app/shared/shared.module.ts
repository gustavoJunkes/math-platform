import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardCalculationComponent } from './card-calculation/card-calculation.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardCalculationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    CardCalculationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
