import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedMaintenenceWorkOrderListComponent } from './planned-maintenence-work-order-list.component';

describe('PlannedMaintenenceWorkOrderListComponent', () => {
  let component: PlannedMaintenenceWorkOrderListComponent;
  let fixture: ComponentFixture<PlannedMaintenenceWorkOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedMaintenenceWorkOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannedMaintenenceWorkOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
