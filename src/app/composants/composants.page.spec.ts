import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsPage } from './composants.page';

describe('ComposantsPage', () => {
  let component: ComposantsPage;
  let fixture: ComponentFixture<ComposantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
