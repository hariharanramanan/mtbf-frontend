import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEquipmentTypeComponent } from './add-new-equipment-type.component';

describe('AddNewEquipmentTypeComponent', () => {
  let component: AddNewEquipmentTypeComponent;
  let fixture: ComponentFixture<AddNewEquipmentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEquipmentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEquipmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
