import { Component, OnInit, Input } from '@angular/core';
import { Classroom } from '../interfaces/classroom';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClassroomService } from '../classroom.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classroom-view',
  templateUrl: './classroom-view.component.html',
  styleUrls: ['./classroom-view.component.css']
})
export class ClassroomViewComponent implements OnInit {

  @Input() classroom: Classroom;

  constructor(private route: ActivatedRoute, private classroomService: ClassroomService, private location: Location) {}

  ngOnInit(): void {
    this.getClassroom();
  }

  getClassroom(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.classroomService.getAllClassrooms()
        .subscribe(classrooms => {
          this.classroom = classrooms.filter(classroom => classroom['id'] == id)[0]
        });
  }

  goBack(): void {
    this.location.back();
  }
}
