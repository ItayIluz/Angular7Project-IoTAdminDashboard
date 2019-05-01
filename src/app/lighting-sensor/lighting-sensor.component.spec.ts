import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingSensorComponent } from './lighting-sensor.component';

describe('LightingSensorComponent', () => {
  let component: LightingSensorComponent;
  let fixture: ComponentFixture<LightingSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightingSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
