import { Component, OnInit } from '@angular/core';
import { SensorItem } from "../sensor-view/sensor-item";
import { MotionLightingComponent } from '../motion-lighting/motion-lighting.component';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-motion-lighting-view',
  templateUrl: './motion-lighting-view.component.html',
  styleUrls: ['./motion-lighting-view.component.css']
})
export class MotionLightingViewComponent implements OnInit {

  sensors: Array<SensorItem> = [];

  constructor(private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classroomService.getAllClassrooms().subscribe(classroomData => {
      classroomData.forEach(classroom => this.sensors.push(new SensorItem(MotionLightingComponent, classroom)));
    });
  }
}
