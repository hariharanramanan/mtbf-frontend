import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineManagementChecklistMasterComponent } from './routine-management-checklist-master.component';

describe('RoutineManagementChecklistMasterComponent', () => {
  let component: RoutineManagementChecklistMasterComponent;
  let fixture: ComponentFixture<RoutineManagementChecklistMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineManagementChecklistMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineManagementChecklistMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
