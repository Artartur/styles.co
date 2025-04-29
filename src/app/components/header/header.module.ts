import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBannerComponent,
    HeaderBrandComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
