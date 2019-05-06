import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferRidePage } from './offer-ride.page';

describe('OfferRidePage', () => {
  let component: OfferRidePage;
  let fixture: ComponentFixture<OfferRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferRidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
