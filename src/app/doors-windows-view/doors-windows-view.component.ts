import { Component, OnInit } from '@angular/core';
import { DoorsWindowsComponent } from '../doors-windows/doors-windows.component';
import { SensorItem } from '../sensor-view/sensor-item';

@Component({
  selector: 'app-doors-windows-view',
  templateUrl: './doors-windows-view.component.html',
  styleUrls: ['./doors-windows-view.component.css']
})
export class DoorsWindowsViewComponent implements OnInit {

  sensors: Array<SensorItem>;

  constructor() { }

  ngOnInit() {
     //TODO get data from server
    this.sensors = [
      new SensorItem(DoorsWindowsComponent, {
        id: 34, 
        doorSensors: [
          { isOpen: true},
          { isOpen: false}
        ],
        windowSensors: [
          { isOpen: true },
          { isOpen: false },
          { isOpen: false },
          { isOpen: true },
        ]
      }),
      new SensorItem(DoorsWindowsComponent, {
        id: 35, 
        doorSensors: [
          { isOpen: true},
          { isOpen: false}
        ],
        windowSensors: [
          { isOpen: true },
          { isOpen: false },
          { isOpen: false },
          { isOpen: true },
        ]
      }),
      new SensorItem(DoorsWindowsComponent, {
        id: 36, 
        doorSensors: [
          { isOpen: true},
          { isOpen: false}
        ],
        windowSensors: [
          { isOpen: true },
          { isOpen: false },
          { isOpen: false },
          { isOpen: true },
        ]
      }),
      new SensorItem(DoorsWindowsComponent, {
        id: 37, 
        doorSensors: [
          { isOpen: true},
          { isOpen: false}
        ],
        windowSensors: [
          { isOpen: true },
          { isOpen: false },
          { isOpen: false },
          { isOpen: true },
        ]
      }),
    ];
  } 

}
