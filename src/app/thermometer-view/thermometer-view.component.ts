import { Component, OnInit } from '@angular/core';
import { SensorItem } from "../sensor-view/sensor-item";
import { ThermometerComponent } from '../thermometer/thermometer.component';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-thermometer-view',
  templateUrl: './thermometer-view.component.html',
  styleUrls: ['./thermometer-view.component.css']
})

export class ThermometerViewComponent implements OnInit {
  thermometers: Array<SensorItem> = [];

  constructor(private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classroomService.getAllClassrooms().subscribe(classroomData => {
      classroomData.forEach(classroom => this.thermometers.push(new SensorItem(ThermometerComponent, classroom)));
    });
  } 

}
