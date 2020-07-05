import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInformationComponent } from './equipment-information.component';

describe('EquipmentInformationComponent', () => {
  let component: EquipmentInformationComponent;
  let fixture: ComponentFixture<EquipmentInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
