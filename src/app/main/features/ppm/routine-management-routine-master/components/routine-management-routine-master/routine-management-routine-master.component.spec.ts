import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineManagementRoutineMasterComponent } from './routine-management-routine-master.component';

describe('RoutineManagementRoutineMasterComponent', () => {
  let component: RoutineManagementRoutineMasterComponent;
  let fixture: ComponentFixture<RoutineManagementRoutineMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineManagementRoutineMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineManagementRoutineMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
