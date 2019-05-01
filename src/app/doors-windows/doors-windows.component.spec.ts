import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsWindowsComponent } from './doors-windows.component';

describe('DoorsWindowsComponent', () => {
  let component: DoorsWindowsComponent;
  let fixture: ComponentFixture<DoorsWindowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsWindowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsWindowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
