import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { UseTermsComponent } from './use-terms/use-terms.component';


@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    UseTermsComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule,
    SharedModule
  ]
})
export class LegalModule { }
