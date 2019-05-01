import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import {  ClassroomsListComponent } from './classrooms-list.component';

describe(' ClassroomsListComponent', () => {
  let component:  ClassroomsListComponent;
  let fixture: ComponentFixture< ClassroomsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ClassroomsListComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ClassroomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
