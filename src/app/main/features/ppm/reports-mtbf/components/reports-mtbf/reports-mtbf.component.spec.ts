import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsMtbfComponent } from './reports-mtbf.component';

describe('ReportsMtbfComponent', () => {
  let component: ReportsMtbfComponent;
  let fixture: ComponentFixture<ReportsMtbfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsMtbfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsMtbfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
