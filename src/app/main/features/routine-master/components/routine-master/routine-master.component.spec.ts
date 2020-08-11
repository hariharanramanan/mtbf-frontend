import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineMasterComponent } from './routine-master.component';

describe('RoutineMasterComponent', () => {
  let component: RoutineMasterComponent;
  let fixture: ComponentFixture<RoutineMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
