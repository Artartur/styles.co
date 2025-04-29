import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBannerComponent,
    HeaderBrandComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
