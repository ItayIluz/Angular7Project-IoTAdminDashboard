import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermometerViewComponent } from './thermometer-view.component';

describe('ThermometerViewComponent', () => {
  let component: ThermometerViewComponent;
  let fixture: ComponentFixture<ThermometerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermometerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermometerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
