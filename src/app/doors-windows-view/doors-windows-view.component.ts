import { Component, OnInit } from '@angular/core';
import { DoorsWindowsComponent } from '../doors-windows/doors-windows.component';
import { SensorItem } from '../sensor-view/sensor-item';
import { ClassroomService } from '../classroom.service';

@Component({
  selector: 'app-doors-windows-view',
  templateUrl: './doors-windows-view.component.html',
  styleUrls: ['./doors-windows-view.component.css']
})
export class DoorsWindowsViewComponent implements OnInit {

  sensors: Array<SensorItem> = [];

  constructor(private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classroomService.getAllClassrooms().subscribe(classroomData => {
      classroomData.forEach(classroom => this.sensors.push(new SensorItem(DoorsWindowsComponent, classroom)));
    });
  } 

}
