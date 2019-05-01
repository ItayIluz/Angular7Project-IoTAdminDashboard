import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-door-sensor',
  templateUrl: './door-sensor.component.html',
  styleUrls: ['./door-sensor.component.css']
})
export class DoorSensorComponent implements OnInit {

  @Input() isOpen: boolean;
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
