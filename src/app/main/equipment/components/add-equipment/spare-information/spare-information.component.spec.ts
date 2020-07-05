import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareInformationComponent } from './spare-information.component';

describe('SpareInformationComponent', () => {
  let component: SpareInformationComponent;
  let fixture: ComponentFixture<SpareInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpareInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
