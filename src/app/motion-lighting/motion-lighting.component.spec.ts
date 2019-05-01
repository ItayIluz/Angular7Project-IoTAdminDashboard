import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionLightingComponent } from './motion-lighting.component';

describe('MotionLightingComponent', () => {
  let component: MotionLightingComponent;
  let fixture: ComponentFixture<MotionLightingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionLightingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
