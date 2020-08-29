import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOperationComponent } from './add-new-operation.component';

describe('AddNewOperationComponent', () => {
  let component: AddNewOperationComponent;
  let fixture: ComponentFixture<AddNewOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
