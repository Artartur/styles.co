import { Component } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  standalone: false,
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.css'
})

export class HeaderBannerComponent {
  public showBanner: boolean;

  constructor() {
    this.showBanner = true;
  }

  public closeBanner(): boolean {
    return this.showBanner = false;
  }
}
