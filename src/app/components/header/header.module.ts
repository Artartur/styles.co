import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBannerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
