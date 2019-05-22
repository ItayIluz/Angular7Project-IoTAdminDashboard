import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-motion-sensor',
  templateUrl: './motion-sensor.component.html',
  styleUrls: ['./motion-sensor.component.css']
})
export class MotionSensorComponent implements OnInit {

  @Input() lastMotionDetection: Date;

  constructor() { }

  ngOnInit() {
    if(this.lastMotionDetection === undefined)
      this.lastMotionDetection = new Date();
  }

}
