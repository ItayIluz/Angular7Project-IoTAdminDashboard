import { Component, OnInit } from '@angular/core';
import { SensorItem } from "../sensor-view/sensor-item";
import { PowermeterComponent } from '../powermeter/powermeter.component';

@Component({
  selector: 'app-powermeter-view',
  templateUrl: './powermeter-view.component.html',
  styleUrls: ['./powermeter-view.component.css']
})
export class PowermeterViewComponent implements OnInit {

  powermeters: Array<SensorItem>;  

  constructor() { }

  ngOnInit() {
    this.powermeters = [
      new SensorItem(PowermeterComponent, {id: 34, watt: 100}),
      new SensorItem(PowermeterComponent, {id: 35, watt: 35}),
      new SensorItem(PowermeterComponent, {id: 36, watt: 66}),
      new SensorItem(PowermeterComponent, {id: 37, watt: 26}),
    ];
  } 

}
