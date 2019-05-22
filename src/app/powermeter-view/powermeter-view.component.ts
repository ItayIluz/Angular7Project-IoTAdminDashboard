import { Component, OnInit } from '@angular/core';
import { SensorItem } from "../sensor-view/sensor-item";
import { PowermeterComponent } from '../powermeter/powermeter.component';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-powermeter-view',
  templateUrl: './powermeter-view.component.html',
  styleUrls: ['./powermeter-view.component.css']
})
export class PowermeterViewComponent implements OnInit{

  powermeters: Array<SensorItem> = [];  

  constructor(private classroomService: ClassroomService) {}

  ngOnInit() {
    this.classroomService.getAllClassrooms().subscribe(classroomData => {
      classroomData.forEach(classroom => {
        this.powermeters.push(new SensorItem(PowermeterComponent, classroom))
      });
    });
  } 
}
