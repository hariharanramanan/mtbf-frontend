import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUomComponent } from './add-new-uom.component';

describe('AddNewUomComponent', () => {
  let component: AddNewUomComponent;
  let fixture: ComponentFixture<AddNewUomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewUomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
