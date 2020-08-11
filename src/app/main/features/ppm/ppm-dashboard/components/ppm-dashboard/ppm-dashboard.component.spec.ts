import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmDashboardComponent } from './ppm-dashboard.component';

describe('PpmDashboardComponent', () => {
  let component: PpmDashboardComponent;
  let fixture: ComponentFixture<PpmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
