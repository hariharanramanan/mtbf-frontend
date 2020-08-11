import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplannedMaintenenceWorkInProgressComponent } from './unplanned-maintenence-work-in-progress.component';

describe('UnplannedMaintenenceWorkInProgressComponent', () => {
  let component: UnplannedMaintenenceWorkInProgressComponent;
  let fixture: ComponentFixture<UnplannedMaintenenceWorkInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnplannedMaintenenceWorkInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplannedMaintenenceWorkInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
