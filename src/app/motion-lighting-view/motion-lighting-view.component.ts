import { Component, OnInit } from '@angular/core';
import { SensorItem } from "../sensor-view/sensor-item";
import { MotionLightingComponent } from '../motion-lighting/motion-lighting.component';

@Component({
  selector: 'app-motion-lighting-view',
  templateUrl: './motion-lighting-view.component.html',
  styleUrls: ['./motion-lighting-view.component.css']
})
export class MotionLightingViewComponent implements OnInit {

  sensors: Array<SensorItem>;

  constructor() { }

  ngOnInit() {
     //TODO get data from server
    this.sensors = [
      new SensorItem(MotionLightingComponent, {
        id: 34, 
        lastMotionDetection: new Date(),
        light: 50    
      }),
      new SensorItem(MotionLightingComponent, {
        id: 35, 
        lastMotionDetection: new Date(),
        light: 0   
      }),
      new SensorItem(MotionLightingComponent, {
        id: 36, 
        lastMotionDetection: new Date(),
        light: 20   
      }),
      new SensorItem(MotionLightingComponent, {
        id: 37, 
        lastMotionDetection: new Date(),
        light: 0    
      }),
    ];
  } 

}
