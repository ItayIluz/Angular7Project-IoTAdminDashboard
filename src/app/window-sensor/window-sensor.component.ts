import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-window-sensor',
  templateUrl: './window-sensor.component.html',
  styleUrls: ['./window-sensor.component.css']
})
export class WindowSensorComponent implements OnInit {

  @Input() status: string;
  @Input() number: number;

  constructor() { }

  ngOnInit() {
    if(this.status === "ON") this.status = "OPEN";
    else if(this.status === "OFF") this.status = "CLOSED";
  }

}
