import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnplannedMaintenenceCreateWorkOrderComponent } from './unplanned-maintenence-create-work-order.component';

describe('UnplannedMaintenenceCreateWorkOrderComponent', () => {
  let component: UnplannedMaintenenceCreateWorkOrderComponent;
  let fixture: ComponentFixture<UnplannedMaintenenceCreateWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnplannedMaintenenceCreateWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnplannedMaintenenceCreateWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
