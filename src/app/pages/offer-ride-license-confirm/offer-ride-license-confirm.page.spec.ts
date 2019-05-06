import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRideLicenseConfirmPage } from './offer-ride-license-confirm.page';

describe('OfferRideLicenseConfirmPage', () => {
  let component: OfferRideLicenseConfirmPage;
  let fixture: ComponentFixture<OfferRideLicenseConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRideLicenseConfirmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferRideLicenseConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
