import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplannedMaintenenceWorkOrderListComponent } from './unplanned-maintenence-work-order-list.component';

describe('UnplannedMaintenenceWorkOrderListComponent', () => {
  let component: UnplannedMaintenenceWorkOrderListComponent;
  let fixture: ComponentFixture<UnplannedMaintenenceWorkOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnplannedMaintenenceWorkOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplannedMaintenenceWorkOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
