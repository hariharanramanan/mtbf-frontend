import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewShiftComponent } from './add-new-shift.component';

describe('AddNewShiftComponent', () => {
  let component: AddNewShiftComponent;
  let fixture: ComponentFixture<AddNewShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
