import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatIconModule,
  ]
})
export class LandingPageModule { }
