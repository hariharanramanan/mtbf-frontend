import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedMaintenanceCreateWorkOrderComponent } from './planned-maintenance-create-work-order.component';

describe('PlannedMaintenanceCreateWorkOrderComponent', () => {
  let component: PlannedMaintenanceCreateWorkOrderComponent;
  let fixture: ComponentFixture<PlannedMaintenanceCreateWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedMaintenanceCreateWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedMaintenanceCreateWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
