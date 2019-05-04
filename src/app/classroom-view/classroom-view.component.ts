import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.css']
})
export class ClassroomViewComponent implements OnInit {

  private classroom;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.classroom = window.history.state.classroom;
  }

  goBack(): void {
    this.location.back();
  }
}
