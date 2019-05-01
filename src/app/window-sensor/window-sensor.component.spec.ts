import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowSensorComponent } from './window-sensor.component';

describe('WindowSensorComponent', () => {
  let component: WindowSensorComponent;
  let fixture: ComponentFixture<WindowSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
