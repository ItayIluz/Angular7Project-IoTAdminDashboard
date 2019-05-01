import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-window-sensor',
  templateUrl: './window-sensor.component.html',
  styleUrls: ['./window-sensor.component.css']
})
export class WindowSensorComponent implements OnInit {

  @Input() isOpen: boolean;
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
