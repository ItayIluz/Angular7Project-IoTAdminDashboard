import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-door-sensor',
  templateUrl: './door-sensor.component.html',
  styleUrls: ['./door-sensor.component.css']
})
export class DoorSensorComponent implements OnInit {

  @Input() status: string;
  @Input() number: number;

  constructor() { }

  ngOnInit() {
    if(this.status === "ON") this.status = "OPEN";
    else if(this.status === "OFF") this.status = "CLOSED";
  }

}
