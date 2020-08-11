import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsMttrComponent } from './reports-mttr.component';

describe('ReportsMttrComponent', () => {
  let component: ReportsMttrComponent;
  let fixture: ComponentFixture<ReportsMttrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsMttrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsMttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
