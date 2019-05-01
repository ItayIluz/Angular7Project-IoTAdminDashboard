import { Component, OnInit } from '@angular/core';
import { SensorItem } from "../sensor-view/sensor-item";
import { ThermometerComponent } from '../thermometer/thermometer.component';

@Component({
  selector: 'app-thermometer-view',
  templateUrl: './thermometer-view.component.html',
  styleUrls: ['./thermometer-view.component.css']
})

export class ThermometerViewComponent implements OnInit {
  thermometers: Array<SensorItem>;

  constructor() { }

  ngOnInit() {
     //TODO get data from server
    this.thermometers = [
      new SensorItem(ThermometerComponent, {id: 34, humidity: 15, temperature: 24}),
      new SensorItem(ThermometerComponent, {id: 35, humidity: 12, temperature: 25}),
      new SensorItem(ThermometerComponent, {id: 36, humidity: 14, temperature: 20}),
      new SensorItem(ThermometerComponent, {id: 37, humidity: 15, temperature: 26}),
    ];
  } 

}
