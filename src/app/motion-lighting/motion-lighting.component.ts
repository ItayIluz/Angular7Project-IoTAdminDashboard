import { Component, OnInit, Input } from '@angular/core';
import { SensorContainer } from '../interfaces/sensor-container';

@Component({
  selector: 'app-motion-lighting',
  templateUrl: './motion-lighting.component.html',
  styleUrls: ['./motion-lighting.component.css']
})
export class MotionLightingComponent implements OnInit, SensorContainer{

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
