import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownRecordBreakdownComponent } from './breakdown-record-breakdown.component';

describe('BreakdownRecordBreakdownComponent', () => {
  let component: BreakdownRecordBreakdownComponent;
  let fixture: ComponentFixture<BreakdownRecordBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownRecordBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownRecordBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
