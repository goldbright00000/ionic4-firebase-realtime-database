import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRideDataConfirmPage } from './offer-ride-data-confirm.page';

describe('OfferRideDataConfirmPage', () => {
  let component: OfferRideDataConfirmPage;
  let fixture: ComponentFixture<OfferRideDataConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRideDataConfirmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferRideDataConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
