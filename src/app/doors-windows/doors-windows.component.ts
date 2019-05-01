import { Component, OnInit,Input } from '@angular/core';
import { SensorContainer } from '../interfaces/sensor-container';

@Component({
  selector: 'app-doors-windows',
  templateUrl: './doors-windows.component.html',
  styleUrls: ['./doors-windows.component.css']
})
export class DoorsWindowsComponent implements OnInit, SensorContainer {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
