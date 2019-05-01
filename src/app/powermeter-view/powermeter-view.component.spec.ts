import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowermeterViewComponent } from './powermeter-view.component';

describe('PowermeterViewComponent', () => {
  let component: PowermeterViewComponent;
  let fixture: ComponentFixture<PowermeterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowermeterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowermeterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
