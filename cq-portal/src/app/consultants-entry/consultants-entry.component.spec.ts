import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsEntryComponent } from './consultants-entry.component';

describe('ConsultantsEntryComponent', () => {
  let component: ConsultantsEntryComponent;
  let fixture: ComponentFixture<ConsultantsEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantsEntryComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
