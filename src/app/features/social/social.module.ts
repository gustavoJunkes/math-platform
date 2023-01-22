import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { FeedComponent } from './feed/feed.component';

import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class SocialModule { }
