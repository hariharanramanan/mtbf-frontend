import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsMasterComponent } from './operations-master.component';

describe('OperationsMasterComponent', () => {
  let component: OperationsMasterComponent;
  let fixture: ComponentFixture<OperationsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
