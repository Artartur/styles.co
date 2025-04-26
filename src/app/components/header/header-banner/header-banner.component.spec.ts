import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerComponent } from './header-banner.component';

describe('HeaderBannerComponent', () => {
  let component: HeaderBannerComponent;
  let fixture: ComponentFixture<HeaderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should close banner', () => {
    component.showBanner = true;
    const result = component.closeBanner();

    expect(component.showBanner).toBeFalsy();

    expect(result).toBeFalsy();
  });
});
