import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { UseTermsComponent } from './use-terms/use-terms.component';

import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    UseTermsComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule,
    SharedModule,
    MatSidenavModule

  ]
})
export class LegalModule { }
