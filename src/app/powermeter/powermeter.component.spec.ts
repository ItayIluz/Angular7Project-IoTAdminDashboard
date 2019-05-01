import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowermeterComponent } from './powermeter.component';

describe('PowermeterComponent', () => {
  let component: PowermeterComponent;
  let fixture: ComponentFixture<PowermeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowermeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowermeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
