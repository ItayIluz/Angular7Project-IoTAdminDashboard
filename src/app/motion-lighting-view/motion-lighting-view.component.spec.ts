import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionLightingViewComponent } from './motion-lighting-view.component';

describe('MotionLightingViewComponent', () => {
  let component: MotionLightingViewComponent;
  let fixture: ComponentFixture<MotionLightingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionLightingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionLightingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
