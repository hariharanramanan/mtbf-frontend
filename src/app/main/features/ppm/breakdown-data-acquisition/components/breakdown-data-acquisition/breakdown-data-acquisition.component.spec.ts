import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownDataAcquisitionComponent } from './breakdown-data-acquisition.component';

describe('BreakdownDataAcquisitionComponent', () => {
  let component: BreakdownDataAcquisitionComponent;
  let fixture: ComponentFixture<BreakdownDataAcquisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownDataAcquisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownDataAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
