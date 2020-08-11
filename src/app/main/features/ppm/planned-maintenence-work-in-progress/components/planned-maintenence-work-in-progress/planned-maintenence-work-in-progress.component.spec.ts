import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedMaintenenceWorkInProgressComponent } from './planned-maintenence-work-in-progress.component';

describe('PlannedMaintenenceWorkInProgressComponent', () => {
  let component: PlannedMaintenenceWorkInProgressComponent;
  let fixture: ComponentFixture<PlannedMaintenenceWorkInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedMaintenenceWorkInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedMaintenenceWorkInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
