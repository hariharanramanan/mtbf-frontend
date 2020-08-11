import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryMasterComponent } from './factory-master.component';

describe('FactoryMasterComponent', () => {
  let component: FactoryMasterComponent;
  let fixture: ComponentFixture<FactoryMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
