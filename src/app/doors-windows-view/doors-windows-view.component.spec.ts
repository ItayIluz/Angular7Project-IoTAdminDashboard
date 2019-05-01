import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsWindowsViewComponent } from './doors-windows-view.component';

describe('DoorsWindowsViewComponent', () => {
  let component: DoorsWindowsViewComponent;
  let fixture: ComponentFixture<DoorsWindowsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsWindowsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsWindowsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
